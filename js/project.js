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
    gallery.appendChild(fig);
  });

  const nextProject = PROJECTS[(index + 1) % PROJECTS.length];
  const nextLink = document.getElementById("next-project-link");
  nextLink.href = `project.html?slug=${encodeURIComponent(nextProject.slug)}`;
  nextLink.textContent = `Next project: ${nextProject.title}`;
}
