// js/admin.js — local-only admin tool for reordering projects/photos and
// editing captions. Reads and writes js/data.js directly on disk via the
// File System Access API (Chrome/Edge only). Never touches image files —
// only the order of entries (and caption text) in data.js changes.

const DATA_HEADER = `// js/data.js
// ============================================================
// HOW TO ADD A NEW PROJECT (no coding needed):
// 1. Create a new folder in /images, e.g. images/newplace/
// 2. Put a 4:3 thumbnail image in it named thumb.jpg
// 3. Put your full-size photos in it named 01.jpg, 02.jpg, 03.jpg...
// 4. Copy one of the blocks below, paste it into the PROJECTS array,
//    change the text and image list to match.
//    - "landscape" records whether a photo is wider than tall
//    - "thumbRatio" is the thumbnail's width divided by its height
//    - "thumb" is the full-quality thumbnail (used on the project page
//      as the lead image); "thumbGrid" is a smaller compressed copy of
//      the SAME photo used only on the homepage grid, so the grid loads
//      fast without permanently degrading the only copy of the photo.
//    All of the above are computed once from the files on disk, so the
//    page never has to download images just to check their shape. If
//    you add a photo/project and aren't sure of the exact numbers, a
//    rough guess is fine (landscape: true, thumbRatio: 1.5).
// 5. Save this file, refresh the browser. Done — no other file needs editing.
//
// The order of this array is the homepage order AND the order used by
// "Next project" on each project page (it wraps from the last back to the first).
// ============================================================

const PROJECTS = [
`;

let fileHandle = null;
let PROJECTS = [];
let dirty = false;
let view = { mode: "list" }; // { mode: "list" } | { mode: "project", slug }

const mainEl = document.getElementById("admin-main");
const statusEl = document.getElementById("admin-status");
const btnLoad = document.getElementById("btn-load");
const btnSave = document.getElementById("btn-save");

btnLoad.addEventListener("click", loadFile);
btnSave.addEventListener("click", saveFile);

function setDirty(value) {
  dirty = value;
  btnSave.disabled = !dirty || !fileHandle;
  statusEl.textContent = fileHandle
    ? (dirty ? "Unsaved changes" : "All changes saved")
    : "No file loaded";
  statusEl.classList.toggle("dirty", dirty);
}

async function loadFile() {
  if (!window.showOpenFilePicker) {
    alert("Your browser doesn't support direct file editing. Please use Chrome or Edge.");
    return;
  }
  try {
    const [handle] = await window.showOpenFilePicker({
      types: [{ description: "data.js", accept: { "text/javascript": [".js"] } }],
    });
    const file = await handle.getFile();
    const text = await file.text();

    const match = text.match(/const PROJECTS = (\[[\s\S]*\]);?\s*$/);
    if (!match) {
      alert("Couldn't find a PROJECTS array in that file — make sure you selected js/data.js.");
      return;
    }
    PROJECTS = new Function(`return ${match[1]};`)();
    fileHandle = handle;
    view = { mode: "list" };
    setDirty(false);
    render();
  } catch (err) {
    if (err.name !== "AbortError") {
      console.error(err);
      alert("Couldn't open that file: " + err.message);
    }
  }
}

async function saveFile() {
  if (!fileHandle) return;
  try {
    const perm = await fileHandle.requestPermission({ mode: "readwrite" });
    if (perm !== "granted") {
      alert("Write permission was not granted, so nothing was saved.");
      return;
    }
    const writable = await fileHandle.createWritable();
    await writable.write(serialize(PROJECTS));
    await writable.close();
    setDirty(false);
  } catch (err) {
    console.error(err);
    alert("Couldn't save: " + err.message);
  }
}

function serialize(projects) {
  const blocks = projects.map((p) => {
    const images = p.images
      .map(
        (img) =>
          `      { src: ${JSON.stringify(img.src)}, caption: ${JSON.stringify(img.caption || "")}, landscape: ${img.landscape !== false} }`
      )
      .join(",\n");
    return `  {
    slug: ${JSON.stringify(p.slug)},
    title: ${JSON.stringify(p.title)},
    intro: ${JSON.stringify(p.intro)},
    thumb: ${JSON.stringify(p.thumb)},
    thumbGrid: ${JSON.stringify(p.thumbGrid)},
    thumbRatio: ${p.thumbRatio},
    images: [
${images}
    ]
  }`;
  });
  return DATA_HEADER + blocks.join(",\n") + "\n];\n";
}

// ---- rendering ----

function render() {
  if (view.mode === "list") {
    renderProjectList();
  } else {
    renderProjectDetail(view.slug);
  }
}

function renderProjectList() {
  mainEl.innerHTML = `
    <h2 class="admin-section-title">Projects</h2>
    <p class="admin-section-hint">Drag cards to reorder the homepage. Click a project to edit its photos and captions.</p>
    <div class="admin-project-grid" id="project-grid"></div>
  `;
  const grid = document.getElementById("project-grid");

  PROJECTS.forEach((project, index) => {
    const card = document.createElement("div");
    card.className = "admin-project-card";
    card.draggable = true;
    card.dataset.index = index;
    card.innerHTML = `
      <img src="${project.thumbGrid || project.thumb}" alt="${project.title}">
      <div class="admin-project-card-label">
        <span>${project.title}</span>
        <button class="open-link" type="button">Edit &rarr;</button>
      </div>
    `;
    card.querySelector(".open-link").addEventListener("click", () => {
      view = { mode: "project", slug: project.slug };
      render();
    });
    card.addEventListener("click", (e) => {
      if (e.target.closest(".open-link")) return;
    });
    attachDragHandlers(card, grid, ".admin-project-card", (fromIndex, toIndex) => {
      moveItem(PROJECTS, fromIndex, toIndex);
      setDirty(true);
      renderProjectList();
    });
    grid.appendChild(card);
  });
}

function renderProjectDetail(slug) {
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) {
    view = { mode: "list" };
    render();
    return;
  }

  mainEl.innerHTML = `
    <button class="admin-back" type="button">&larr; All projects</button>
    <h2 class="admin-section-title">${project.title}</h2>
    <p class="admin-section-hint">Drag photos to reorder. Captions stay attached to their photo when you reorder.</p>
    <div class="admin-thumb-note">
      <img src="${project.thumbGrid || project.thumb}" alt="${project.title}">
      <p>This is the project's thumbnail (shown on the homepage, and as the first photo on the project page). It isn't reordered here — ask Claude to change it if you want a different lead photo.</p>
    </div>
    <div class="admin-photo-grid" id="photo-grid"></div>
  `;

  mainEl.querySelector(".admin-back").addEventListener("click", () => {
    view = { mode: "list" };
    render();
  });

  const grid = document.getElementById("photo-grid");
  project.images.forEach((img, index) => {
    const card = document.createElement("div");
    card.className = "admin-photo-card";
    card.draggable = true;
    card.dataset.index = index;
    card.innerHTML = `
      <span class="admin-photo-index">${index + 1}</span>
      <img src="${img.src}" alt="${img.caption || ""}">
      <textarea class="admin-photo-caption" placeholder="Caption for this photo&hellip;">${img.caption || ""}</textarea>
    `;

    const textarea = card.querySelector("textarea");
    textarea.addEventListener("input", () => {
      img.caption = textarea.value;
      setDirty(true);
    });
    // dragging shouldn't start from inside the textarea (so text is selectable)
    textarea.addEventListener("mousedown", (e) => e.stopPropagation());

    attachDragHandlers(card, grid, ".admin-photo-card", (fromIndex, toIndex) => {
      moveItem(project.images, fromIndex, toIndex);
      setDirty(true);
      renderProjectDetail(slug);
    });

    grid.appendChild(card);
  });
}

// ---- drag and drop (shared between project list and photo grid) ----

function attachDragHandlers(card, container, selector, onReorder) {
  card.addEventListener("dragstart", (e) => {
    card.classList.add("dragging");
    e.dataTransfer.setData("text/plain", card.dataset.index);
    e.dataTransfer.effectAllowed = "move";
  });

  card.addEventListener("dragend", () => {
    card.classList.remove("dragging");
    container.querySelectorAll(selector).forEach((el) => el.classList.remove("drag-over"));
  });

  card.addEventListener("dragover", (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    card.classList.add("drag-over");
  });

  card.addEventListener("dragleave", () => {
    card.classList.remove("drag-over");
  });

  card.addEventListener("drop", (e) => {
    e.preventDefault();
    card.classList.remove("drag-over");
    const fromIndex = parseInt(e.dataTransfer.getData("text/plain"), 10);
    const toIndex = parseInt(card.dataset.index, 10);
    if (fromIndex === toIndex || Number.isNaN(fromIndex)) return;
    onReorder(fromIndex, toIndex);
  });
}

function moveItem(arr, fromIndex, toIndex) {
  const [item] = arr.splice(fromIndex, 1);
  arr.splice(toIndex, 0, item);
}

window.addEventListener("beforeunload", (e) => {
  if (dirty) {
    e.preventDefault();
    e.returnValue = "";
  }
});
