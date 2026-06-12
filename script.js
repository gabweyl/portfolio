const card = document.querySelector('.card');
const page = document.querySelector('.page');

card.addEventListener('mouseenter', () => {
  card.style.transform = 'scale(1.03) translateY(-6px)';
});

card.addEventListener('mouseleave', () => {
  card.style.transform = '';
  page.style.backgroundPosition = '0px 0px';
});

document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * -20;
  const y = (e.clientY / window.innerHeight - 0.5) * -20;
  page.style.backgroundPosition = `${x}px ${y}px`;
});
