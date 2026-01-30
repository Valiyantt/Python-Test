document.getElementById('cta').addEventListener('click', () => {
  alert('Hello from the Dummy Website!');
});

const form = document.getElementById('contact-form');
const status = document.getElementById('status');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const obj = Object.fromEntries(data.entries());
  // Simulate submission
  status.textContent = 'Sending...';
  setTimeout(() => {
    status.textContent = `Thanks, ${obj.name}! (This is a demo — no data was sent.)`;
    form.reset();
  }, 900);
});