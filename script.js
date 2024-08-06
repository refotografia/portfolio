const imageContainer = document.querySelector('.image-container');
const nextButton = document.getElementById('next-button');
const aridezButton = document.getElementById('aridez');
const japaoButton = document.getElementById('japao');
const transeButton = document.getElementById('transe');
const antesButton = document.getElementById('antes');
const travessiaButton = document.getElementById('travessia');
const casaButton = document.getElementById('casa');
const maresiasButton = document.getElementById('maresias');
const unicosButton = document.getElementById('unicos');
const aquiButton = document.getElementById('aqui');
const pluracidadesButton = document.getElementById('pluracidades');
const pluralButton = document.getElementById('plural');
const guiButton = document.getElementById('gui');

const images = [
    'img/folio1.jpg',
    'img/folio2.jpg',
    'img/folio3.jpg',
    'img/folio4.jpg',
    'img/folio5.jpg',
    'img/folio6.jpg',
    'img/folio7.jpg',
    'img/folio8.jpg',
    'img/folio9.jpg',
    'img/folio10.jpg',
    'img/folio11.jpg',
    'img/folio12.jpg',
    'img/folio13.jpg',
    'img/folio14.jpg',
    'img/folio15.jpg',
    'img/folio16.jpg',
    'img/folio17.jpg',
    'img/folio18.jpg',
    'img/folio19.jpg',
    'img/folio20.jpg',
    'img/folio21.jpg',
    'img/folio22.jpg',
    'img/folio23.jpg',
    'img/folio24.jpg',
    'img/folio25.jpg',
    'img/folio26.jpg',
    'img/folio27.jpg',
    'img/folio28.jpg',
    'img/folio29.jpg',
    'img/folio30.jpg',
    'img/folio31.jpg',
    'img/folio32.jpg',
    'img/folio33.jpg',
    'img/folio34.jpg',
    'img/folio35.jpg',
    'img/folio36.jpg',
    'img/folio37.jpg',
    'img/folio38.jpg',
    'img/folio39.jpg',
    'img/folio40.jpg',
    'img/folio41.jpg',
    'img/folio42.jpg',
    'img/folio43.jpg',
    'img/folio44.jpg',
    'img/folio45.jpg',
    'img/folio46.jpg',
    'img/folio47.jpg',
    'img/folio48.jpg',
    'img/folio49.jpg',
    'img/folio50.jpg',
    'img/folio51.jpg',
    'img/folio52.jpg',
    'img/folio53.jpg',
    'img/folio54.jpg',
    'img/folio55.jpg',
    'img/folio56.jpg',
    'img/folio57.jpg',
    'img/folio58.jpg',
    'img/folio59.jpg',
    'img/folio60.jpg',
    'img/folio61.jpg',
    'img/folio62.jpg',
    'img/folio63.jpg',
    'img/folio64.jpg',
    'img/folio65.jpg',
    'img/folio66.jpg',
    'img/folio67.jpg',
    'img/folio68.jpg',
    'img/folio69.jpg',
    'img/folio70.jpg',
    'img/folio71.jpg',
    'img/folio72.jpg',
    'img/folio73.jpg',
    'img/folio74.jpg',
    'img/folio75.jpg',
    'img/folio76.jpg',
    'img/folio77.jpg',
    'img/folio78.jpg',
    'img/folio79.jpg',
    'img/folio80.jpg',
    'img/folio81.jpg',
    'img/folio82.jpg',
    'img/folio83.jpg',
    'img/folio84.jpg',
    'img/folio85.jpg',
    'img/folio86.jpg',
    'img/folio87.jpg',
    'img/folio88.jpg',
    'img/folio89.jpg',
    'img/folio90.jpg',
    'img/folio91.jpg',
    'img/folio92.jpg',
    'img/folio93.jpg',
    'img/folio94.jpg',
    'img/folio95.jpg',
    'img/folio96.jpg',
    'img/folio97.jpg',
    'img/folio98.jpg',
    'img/folio99.jpg',
    'img/folio100.jpg',
    'img/folio101.jpg',
    'img/folio102.jpg',
    'img/folio103.jpg',
    'img/folio104.jpg',
    'img/folio105.jpg',
    'img/folio106.jpg'
];

let currentIndex = 0;
const changeText = document.getElementById('txt');

function changeImage() {
    changeText.textContent = "";
    currentIndex = (currentIndex + 1) % images.length;
    imageContainer.style.backgroundImage = `url(${images[currentIndex]})`;
}

function gotoImage(new_index) {
    changeText.textContent = "";
    currentIndex = new_index;
    imageContainer.style.backgroundImage = `url(${images[currentIndex]})`;
}

aridezButton.addEventListener('click', () => gotoImage(0));
antesButton.addEventListener('click', () => gotoImage(13));
japaoButton.addEventListener('click', () => gotoImage(35));
transeButton.addEventListener('click', () => gotoImage(47));
travessiaButton.addEventListener('click', () => gotoImage(53));
casaButton.addEventListener('click', () => gotoImage(62));
maresiasButton.addEventListener('click', () => gotoImage(69));
unicosButton.addEventListener('click', () => gotoImage(74));
aquiButton.addEventListener('click', () => gotoImage(83));
pluracidadesButton.addEventListener('click', () => gotoImage(92));
pluralButton.addEventListener('click', () => gotoImage(100));
guiButton.addEventListener('click', () => gotoImage(105))
nextButton.addEventListener('click', changeImage);

// Initial image
imageContainer.style.backgroundImage = `url(${images[currentIndex]})`;
