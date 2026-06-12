const text = 'gabweyl';
const el = document.getElementById('typed');
const plain = 'gabweyl';
let i = 0;

function type() {
  if (i <= text.length) {
    const current = text.slice(0, i);
    const p = current.slice(0, Math.min(i, plain.length));
    const a = current.slice(plain.length);
    el.innerHTML = p + (a ? `<span class="accent">${a}</span>` : '');
    i++;
    setTimeout(type, 200);
  }
}

setTimeout(type, 500);