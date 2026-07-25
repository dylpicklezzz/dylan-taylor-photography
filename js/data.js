// js/data.js
// ============================================================
// HOW TO ADD A NEW PROJECT (no coding needed):
// 1. Create a new folder in /images, e.g. images/newplace/
// 2. Put a 4:3 thumbnail image in it named thumb.jpg
// 3. Put your full-size photos in it named 01.jpg, 02.jpg, 03.jpg...
// 4. Copy one of the blocks below, paste it into the PROJECTS array,
//    change the text and image list to match.
// 5. Save this file, refresh the browser. Done — no other file needs editing.
//
// The order of this array is the homepage order AND the order used by
// "Next project" on each project page (it wraps from the last back to the first).
// ============================================================

const PROJECTS = [
  {
    slug: "dolomites",
    title: "Dolomites",
    intro: "Write a short paragraph of body copy here — set the scene for this project, where it was shot and what it's about.",
    thumb: "images/dolomites/thumb.jpg",
    images: [
      { src: "images/dolomites/01.jpg", caption: "Caption for photo 1" },
      { src: "images/dolomites/02.jpg", caption: "Caption for photo 2" }
    ]
  },
  {
    slug: "menorca",
    title: "Menorca",
    intro: "Write a short paragraph of body copy here — set the scene for this project, where it was shot and what it's about.",
    thumb: "images/menorca/thumb.png",
    images: [
      { src: "images/menorca/01.png", caption: "Caption for photo 1" },
      { src: "images/menorca/02.png", caption: "Caption for photo 2" },
      { src: "images/menorca/03.png", caption: "Caption for photo 3" },
      { src: "images/menorca/04.png", caption: "Caption for photo 4" },
      { src: "images/menorca/05.png", caption: "Caption for photo 5" },
      { src: "images/menorca/06.png", caption: "Caption for photo 6" },
      { src: "images/menorca/07.png", caption: "Caption for photo 7" },
      { src: "images/menorca/08.png", caption: "Caption for photo 8" },
      { src: "images/menorca/09.jpg", caption: "Caption for photo 9" },
      { src: "images/menorca/10.png", caption: "Caption for photo 10" }
    ]
  },
  {
    slug: "slovenia",
    title: "Slovenia",
    intro: "Write a short paragraph of body copy here — set the scene for this project, where it was shot and what it's about.",
    thumb: "images/slovenia/thumb.png",
    images: [
      { src: "images/slovenia/01.jpg", caption: "Caption for photo 1" },
      { src: "images/slovenia/02.jpg", caption: "Caption for photo 2" },
      { src: "images/slovenia/03.jpg", caption: "Caption for photo 3" },
      { src: "images/slovenia/04.jpg", caption: "Caption for photo 4" },
      { src: "images/slovenia/05.jpg", caption: "Caption for photo 5" },
      { src: "images/slovenia/06.jpg", caption: "Caption for photo 6" },
      { src: "images/slovenia/07.jpg", caption: "Caption for photo 7" },
      { src: "images/slovenia/08.jpg", caption: "Caption for photo 8" },
      { src: "images/slovenia/09.jpg", caption: "Caption for photo 9" }
    ]
  },
  {
    slug: "fam",
    title: "Fam",
    intro: "Write a short paragraph of body copy here — set the scene for this project, where it was shot and what it's about.",
    thumb: "images/fam/thumb.jpg",
    images: [
      { src: "images/fam/01.jpg", caption: "Caption for photo 1" },
      { src: "images/fam/02.jpg", caption: "Caption for photo 2" },
      { src: "images/fam/03.jpg", caption: "Caption for photo 3" },
      { src: "images/fam/04.jpg", caption: "Caption for photo 4" },
      { src: "images/fam/05.jpg", caption: "Caption for photo 5" },
      { src: "images/fam/06.jpg", caption: "Caption for photo 6" },
      { src: "images/fam/07.jpg", caption: "Caption for photo 7" },
      { src: "images/fam/08.jpg", caption: "Caption for photo 8" }
    ]
  }
];
