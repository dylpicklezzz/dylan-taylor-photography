// js/home.js — renders the homepage gallery grid from PROJECTS (see js/data.js)

const grid = document.getElementById("gallery-grid");

PROJECTS.forEach((project) => {
  const count = project.images.length + 1; // +1 for the thumbnail, which also appears as the first full-size image

  const link = document.createElement("a");
  link.className = "thumb-card";
  link.href = `project.html?slug=${encodeURIComponent(project.slug)}`;

  const ratio = project.thumbRatio || 1.5;

  link.innerHTML = `
    <div class="thumb-frame skeleton" style="aspect-ratio: ${ratio};">
      <img src="${project.thumbGrid || project.thumb}" alt="${project.title}">
    </div>
    <div class="thumb-caption">
      <span class="thumb-title">${project.title}</span>
      <span class="thumb-count">1 of ${count}</span>
    </div>
  `;

  const frame = link.querySelector(".thumb-frame");
  const thumbImg = link.querySelector("img");
  thumbImg.addEventListener("load", () => {
    frame.classList.remove("skeleton");
    thumbImg.classList.add("loaded");
  });

  grid.appendChild(link);
});
