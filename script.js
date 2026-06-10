const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (toggle && navLinks) {
  toggle.addEventListener('click', () => navLinks.classList.toggle('show'));
}

function handleForm(event) {
  event.preventDefault();
  const message = document.getElementById('form-message');
  message.textContent = 'Thank you. This demo form is working visually. Connect it to Formspree, Netlify Forms, or a backend to receive messages.';
  event.target.reset();
  return false;
}
