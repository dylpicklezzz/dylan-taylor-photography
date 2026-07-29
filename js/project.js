// js/project.js — renders project.html based on the ?slug= query param

const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");

const index = PROJECTS.findIndex((p) => p.slug === slug);
const project = PROJECTS[index];

if (!project) {
  document.getElementById("project-root").innerHTML =
    "<p class=\"not-found\">Project not found. <a href=\"index.html\">Return home</a>.</p>";
} else {
  document.title = project.title;

  document.getElementById("project-title").textContent = project.title;
  document.getElementById("project-intro").textContent = project.intro;

  const gallery = document.getElementById("project-gallery");
  const galleryImages = [
    {
      src: project.thumb,
      caption: "",
      landscape: (project.thumbRatio || 1.5) >= 1,
      ratio: project.thumbRatio,
    },
    ...project.images,
  ];
  galleryImages.forEach((img) => {
    const fig = document.createElement("figure");
    fig.className = "full-image";

    // Portrait photos are restricted to the viewport height instead of
    // stretching full-width, so they don't appear stretched/oversized.
    if (img.landscape === false) {
      fig.classList.add("portrait");
    }

    // "ratio" (precomputed in data.js) reserves the photo's exact aspect
    // ratio on the page before it loads, so the page doesn't jump around
    // as images finish loading - a shimmering skeleton fills that space
    // until the photo is ready, then fades in.
    const ratio = img.ratio || 1.5;
    fig.innerHTML = `
      <img src="${img.src}" alt="${img.caption || project.title}" class="skeleton" style="aspect-ratio: ${ratio};">
      ${img.caption ? `<figcaption>${img.caption}</figcaption>` : ""}
    `;

    const imgEl = fig.querySelector("img");
    imgEl.addEventListener("load", () => {
      imgEl.classList.remove("skeleton");
      imgEl.classList.add("loaded");
    });

    gallery.appendChild(fig);
  });

  const nextProject = PROJECTS[(index + 1) % PROJECTS.length];
  const nextLink = document.getElementById("next-project-link");
  nextLink.href = `project.html?slug=${encodeURIComponent(nextProject.slug)}`;
  nextLink.textContent = `Next project: ${nextProject.title}`;
}
