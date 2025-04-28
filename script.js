document.addEventListener('DOMContentLoaded', () => {
  const weddingDate = new Date('2025-07-24T14:30:00');

  function updateCountdown() {
    const now = new Date();
    const diff = weddingDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();

  window.addEventListener('scroll', () => {
    document.querySelectorAll('.scroll-animation').forEach(section => {
      if (section.getBoundingClientRect().top < window.innerHeight * 0.9) {
        section.classList.add('show');
      }
    });
  });
});
