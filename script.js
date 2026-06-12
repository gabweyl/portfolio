const card = document.querySelector('.card');
const page = document.querySelector('.page');

let floatY = 0;
let floatDir = 1;
let floatFrame;

function floatCard() {
  floatY += 0.05 * floatDir;
  if (floatY > 6 || floatY < 0) floatDir *= -1;
  card.style.transform = `translateY(${floatY}px)`;
  floatFrame = requestAnimationFrame(floatCard);
}

floatCard();

card.addEventListener('mouseenter', () => {
  cancelAnimationFrame(floatFrame);
  card.style.transform = 'scale(1.03) translateY(-6px)';
});

card.addEventListener('mouseleave', () => {
  page.style.backgroundPosition = '0px 0px';
  floatY = 0;
  floatDir = 1;
  floatCard();
});

document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * -20;
  const y = (e.clientY / window.innerHeight - 0.5) * -20;
  page.style.backgroundPosition = `${x}px ${y}px`;
});
