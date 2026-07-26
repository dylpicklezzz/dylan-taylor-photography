// js/hero.js — homepage hero: cross-dissolves through every landscape project image
// (not thumbnails, and not portrait-oriented photos), in a shuffled, non-repeating
// order that reshuffles once the full set has played.
//
// Orientation is precomputed in data.js (the "landscape" flag on each image),
// so building this list is instant and requires no extra downloads.

const heroPool = [];
PROJECTS.forEach((project) => {
  project.images.forEach((img) => {
    if (img.landscape !== false) {
      heroPool.push(img.src);
    }
  });
});

function shuffle(arr) {
  const shuffled = arr.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const slidesEl = document.getElementById("hero-slides");
const heroEl = document.getElementById("hero");

if (slidesEl && heroPool.length > 0) {
  let sequence = shuffle(heroPool);
  let index = 0;

  const layerA = document.createElement("img");
  const layerB = document.createElement("img");
  layerA.className = "hero-slide";
  layerB.className = "hero-slide";
  slidesEl.appendChild(layerA);
  slidesEl.appendChild(layerB);

  let activeLayer = layerA;
  let hiddenLayer = layerB;

  // Preload + decode the very first slide too, so it fades in cleanly
  // instead of popping in, and clear the skeleton once it's ready.
  (async () => {
    const firstSrc = sequence[index];
    const preload = new Image();
    preload.src = firstSrc;
    try {
      await preload.decode();
    } catch (err) {
      // show it anyway if decoding fails
    }
    activeLayer.src = firstSrc;
    activeLayer.classList.add("active");
    if (heroEl) heroEl.classList.remove("skeleton");
  })();

  async function advance() {
    index++;
    if (index >= sequence.length) {
      sequence = shuffle(heroPool);
      index = 0;
    }
    const nextSrc = sequence[index];

    // Fully decode off the main thread before starting the crossfade, so the
    // fade-in never has to decode+paint a huge image mid-transition — that
    // decode-time stall was what caused the jank/snap.
    const preload = new Image();
    preload.src = nextSrc;
    try {
      await preload.decode();
    } catch (err) {
      // fall through and show it anyway if decoding fails
    }

    hiddenLayer.src = nextSrc;
    hiddenLayer.classList.add("active");
    activeLayer.classList.remove("active");
    [activeLayer, hiddenLayer] = [hiddenLayer, activeLayer];
  }

  setInterval(advance, 4000);
}
