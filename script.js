const imageContainer = document.querySelector('.image-container');
const count = document.getElementById('count');
const seriesButtons = [...document.querySelectorAll('.text-links .skip[data-start]')];

const TOTAL = 106;
const images = Array.from({ length: TOTAL }, (_, i) => `img/folio${i + 1}.jpg`);

// início de cada série, em ordem, para saber qual título destacar
const starts = seriesButtons
    .map(b => ({ button: b, start: Number(b.dataset.start) }))
    .sort((a, b) => a.start - b.start);

let currentIndex = 0;

function show(index) {
    currentIndex = (index + TOTAL) % TOTAL;
    imageContainer.style.backgroundImage = `url(${images[currentIndex]})`;
    count.textContent = `${currentIndex + 1} / ${TOTAL}`;

    // destaca a série atual
    let current = starts[0];
    for (const s of starts) if (s.start <= currentIndex) current = s;
    seriesButtons.forEach(b => b.removeAttribute('aria-current'));
    current.button.setAttribute('aria-current', 'true');

    // pré-carrega vizinhas, para a troca ser instantânea
    [currentIndex + 1, currentIndex - 1].forEach(i => {
        new Image().src = images[(i + TOTAL) % TOTAL];
    });
}

const next = () => show(currentIndex + 1);
const prev = () => show(currentIndex - 1);

// títulos das séries
seriesButtons.forEach(b => b.addEventListener('click', () => show(Number(b.dataset.start))));

// contador
document.getElementById('next-button').addEventListener('click', next);
document.getElementById('prev-button').addEventListener('click', prev);

// clique na imagem: terço esquerdo volta, o resto avança
imageContainer.addEventListener('click', e => {
    if (e.clientX < window.innerWidth / 3) prev(); else next();
});
imageContainer.addEventListener('mousemove', e => {
    imageContainer.classList.toggle('back', e.clientX < window.innerWidth / 3);
});

// teclado
document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') { e.preventDefault(); next(); }
    if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); prev(); }
});

// deslizar no celular
let touchX = null;
imageContainer.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
imageContainer.addEventListener('touchend', e => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    touchX = null;
    if (Math.abs(dx) > 40) { dx < 0 ? next() : prev(); }
});

show(0);
