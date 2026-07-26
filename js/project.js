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
  const galleryImages = [{ src: project.thumb, caption: "" }, ...project.images];
  galleryImages.forEach((img) => {
    const fig = document.createElement("figure");
    fig.className = "full-image";
    fig.innerHTML = `
      <img src="${img.src}" alt="${img.caption || project.title}">
      ${img.caption ? `<figcaption>${img.caption}</figcaption>` : ""}
    `;

    // Portrait photos are restricted to the viewport height instead of
    // stretching full-width, so they don't appear stretched/oversized.
    // "landscape" is precomputed in data.js so this doesn't have to wait on
    // the image loading; the thumbnail (no stored flag) falls back to
    // checking once it loads.
    if (img.landscape === false) {
      fig.classList.add("portrait");
    } else if (img.landscape === undefined) {
      const imgEl = fig.querySelector("img");
      imgEl.addEventListener("load", () => {
        if (imgEl.naturalHeight > imgEl.naturalWidth) {
          fig.classList.add("portrait");
        }
      });
    }

    gallery.appendChild(fig);
  });

  const nextProject = PROJECTS[(index + 1) % PROJECTS.length];
  const nextLink = document.getElementById("next-project-link");
  nextLink.href = `project.html?slug=${encodeURIComponent(nextProject.slug)}`;
  nextLink.textContent = `Next project: ${nextProject.title}`;
}
