// Read the correct Answer keys from the frontmatter yaml of quiz (auto-create array; separating with commas except for after last item):
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
  const userAnswers = [
    // Loop through answer values (classes q1, q2 etc. )Separate with a comma except for after the last item, thereby auto-creating an array
    {% for quizItem in quiz %}
      form.q{{ loop.index }}.value{{ ',' if loop.index !== quiz | length }}
    {% endfor %}
  ];

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