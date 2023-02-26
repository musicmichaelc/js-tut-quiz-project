// Read the correct Answer keys from the frontmatter yaml of quiz:
const correctAnswers = [
  {% for quizItem in quiz %}
    '{{ quizItem.correctAnswer }}'{{ ',' if loop.index !== quiz | length }}
  {% endfor %}
];
// Set score increment relative to how many questions/correct answers there are:
const scoreIncrement = 100 / correctAnswers.length;
const form = document.querySelector('.quiz-form');

form.addEventListener('submit', e => {
  // Prevent the default action of refreshing the page after submitting---which we don't want here:
  e.preventDefault();

  let score = 0;
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  // Check answers:
  userAnswers.forEach((answer, index) => {
    if(answer === correctAnswers[index]){
      score += scoreIncrement;
    }
  });

  // Display result:
  const result = document.querySelector('.result');
  const scoreDisplay = result.querySelector('span');

  scrollTo(0, 0);
  result.classList.remove('d-none');

  // Animate score:
  let output = 0;
  const timer = setInterval(() => {
    scoreDisplay.textContent = `${output}%`;
    if(output === score){
      clearInterval(timer);
    } else {
      output++
    }
  }, 10);
});