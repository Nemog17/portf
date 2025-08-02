document.addEventListener('DOMContentLoaded', () => {
  const availability = document.querySelector('.availability');
  if (!availability) return;

  const profileUrl = 'https://do.linkedin.com/in/';

  fetch('https://r.jina.ai/https://do.linkedin.com/in/')
    .then(resp => resp.text())
    .then(html => {
      const isOpen = /open to work|abierto a trabajar/i.test(html);
      if (isOpen) {
        availability.textContent = 'disponible';
        availability.classList.add('available');
      } else {
        availability.textContent = 'no disponible';
        availability.classList.add('not-available');
      }
    })
    .catch(() => {
      availability.textContent = 'no disponible';
      availability.classList.add('not-available');
    });
});
