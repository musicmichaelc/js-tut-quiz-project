// I changed the order of some of the answers, so that they are not always the same:
const correctAnswers = ['B', 'A', 'B', 'A'];
const form = document.querySelector('.quiz-form');

form.addEventListener('submit', e => {
  // Prevent the default action of refreshing the page after submitting---which we don't want here:
  e.preventDefault();

  let score = 0;
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  // Check answers:
  userAnswers.forEach((answer, index) => {
    if(answer === correctAnswers[index]){
      score += 25;
    }
  });

  // Display result:
  const result = document.querySelector('.result');
  const scoreDisplay = result.querySelector('span');

  scoreDisplay.textContent = `${score}%`;
  result.classList.remove('d-none');
});