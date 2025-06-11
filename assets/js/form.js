let startTime;

const form = document.getElementById('contactForm');
const timeDisplay = document.getElementById('timeSpent');
const confirmation = document.getElementById('confirmation');

form.addEventListener('focusin', () => {
  if (!startTime) {
    startTime = new Date();
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const endTime = new Date();
  const seconds = Math.floor((endTime - startTime) / 1000);
  timeDisplay.textContent = `Time spent: ${seconds} seconds`;
  confirmation.classList.remove('hidden');
  form.reset();
  startTime = null;
});
