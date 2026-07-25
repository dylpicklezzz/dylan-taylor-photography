// js/hero.js — homepage hero: cross-dissolves through every project image (not thumbnails),
// in a shuffled, non-repeating order that reshuffles once the full set has played.

const heroPool = [];
PROJECTS.forEach((project) => {
  project.images.forEach((img) => heroPool.push(img.src));
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

if (slidesEl && heroPool.length > 0) {
  let sequence = shuffle(heroPool);
  let index = 0;

  let current = document.createElement("img");
  let next = document.createElement("img");
  current.className = "hero-slide active";
  next.className = "hero-slide";
  current.src = sequence[index];
  slidesEl.appendChild(current);
  slidesEl.appendChild(next);

  setInterval(() => {
    index++;
    if (index >= sequence.length) {
      sequence = shuffle(heroPool);
      index = 0;
    }
    next.src = sequence[index];
    next.classList.add("active");
    current.classList.remove("active");
    [current, next] = [next, current];
  }, 4000);
}
