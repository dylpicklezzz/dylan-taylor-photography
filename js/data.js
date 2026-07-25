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
      { src: "images/dolomites/02.jpg", caption: "Caption for photo 2" },
      { src: "images/dolomites/03.jpg", caption: "Caption for photo 3" },
      { src: "images/dolomites/04.jpg", caption: "Caption for photo 4" },
      { src: "images/dolomites/05.jpg", caption: "Caption for photo 5" },
      { src: "images/dolomites/06.jpg", caption: "Caption for photo 6" },
      { src: "images/dolomites/07.jpg", caption: "Caption for photo 7" },
      { src: "images/dolomites/08.jpg", caption: "Caption for photo 8" },
      { src: "images/dolomites/09.jpg", caption: "Caption for photo 9" },
      { src: "images/dolomites/10.jpg", caption: "Caption for photo 10" },
      { src: "images/dolomites/11.jpg", caption: "Caption for photo 11" },
      { src: "images/dolomites/12.jpg", caption: "Caption for photo 12" },
      { src: "images/dolomites/13.jpg", caption: "Caption for photo 13" },
      { src: "images/dolomites/14.jpg", caption: "Caption for photo 14" },
      { src: "images/dolomites/15.jpg", caption: "Caption for photo 15" },
      { src: "images/dolomites/16.jpg", caption: "Caption for photo 16" },
      { src: "images/dolomites/17.jpg", caption: "Caption for photo 17" },
      { src: "images/dolomites/18.jpg", caption: "Caption for photo 18" },
      { src: "images/dolomites/19.jpg", caption: "Caption for photo 19" },
      { src: "images/dolomites/20.jpg", caption: "Caption for photo 20" },
      { src: "images/dolomites/21.jpg", caption: "Caption for photo 21" },
      { src: "images/dolomites/22.jpg", caption: "Caption for photo 22" },
      { src: "images/dolomites/23.jpg", caption: "Caption for photo 23" },
      { src: "images/dolomites/24.jpg", caption: "Caption for photo 24" },
      { src: "images/dolomites/25.jpg", caption: "Caption for photo 25" },
      { src: "images/dolomites/26.jpg", caption: "Caption for photo 26" }
    ]
  },
  {
    slug: "menorca",
    title: "Menorca",
    intro: "Write a short paragraph of body copy here — set the scene for this project, where it was shot and what it's about.",
    thumb: "images/menorca/thumb.jpg",
    images: [
      { src: "images/menorca/01.jpg", caption: "Caption for photo 1" },
      { src: "images/menorca/02.jpg", caption: "Caption for photo 2" },
      { src: "images/menorca/03.jpg", caption: "Caption for photo 3" },
      { src: "images/menorca/04.jpg", caption: "Caption for photo 4" },
      { src: "images/menorca/05.jpg", caption: "Caption for photo 5" },
      { src: "images/menorca/06.jpg", caption: "Caption for photo 6" },
      { src: "images/menorca/07.jpg", caption: "Caption for photo 7" },
      { src: "images/menorca/08.jpg", caption: "Caption for photo 8" },
      { src: "images/menorca/09.jpg", caption: "Caption for photo 9" },
      { src: "images/menorca/10.jpg", caption: "Caption for photo 10" },
      { src: "images/menorca/11.jpg", caption: "Caption for photo 11" },
      { src: "images/menorca/12.jpg", caption: "Caption for photo 12" },
      { src: "images/menorca/13.jpg", caption: "Caption for photo 13" },
      { src: "images/menorca/14.jpg", caption: "Caption for photo 14" },
      { src: "images/menorca/15.jpg", caption: "Caption for photo 15" },
      { src: "images/menorca/16.jpg", caption: "Caption for photo 16" },
      { src: "images/menorca/17.jpg", caption: "Caption for photo 17" },
      { src: "images/menorca/18.jpg", caption: "Caption for photo 18" },
      { src: "images/menorca/19.jpg", caption: "Caption for photo 19" },
      { src: "images/menorca/20.jpg", caption: "Caption for photo 20" },
      { src: "images/menorca/21.jpg", caption: "Caption for photo 21" },
      { src: "images/menorca/22.jpg", caption: "Caption for photo 22" },
      { src: "images/menorca/23.jpg", caption: "Caption for photo 23" },
      { src: "images/menorca/24.jpg", caption: "Caption for photo 24" },
      { src: "images/menorca/25.jpg", caption: "Caption for photo 25" },
      { src: "images/menorca/26.jpg", caption: "Caption for photo 26" },
      { src: "images/menorca/27.jpg", caption: "Caption for photo 27" },
      { src: "images/menorca/28.jpg", caption: "Caption for photo 28" },
      { src: "images/menorca/29.jpg", caption: "Caption for photo 29" },
      { src: "images/menorca/30.jpg", caption: "Caption for photo 30" },
      { src: "images/menorca/31.jpg", caption: "Caption for photo 31" },
      { src: "images/menorca/32.jpg", caption: "Caption for photo 32" },
      { src: "images/menorca/33.jpg", caption: "Caption for photo 33" },
      { src: "images/menorca/34.jpg", caption: "Caption for photo 34" },
      { src: "images/menorca/35.jpg", caption: "Caption for photo 35" },
      { src: "images/menorca/36.jpg", caption: "Caption for photo 36" },
      { src: "images/menorca/37.jpg", caption: "Caption for photo 37" },
      { src: "images/menorca/38.jpg", caption: "Caption for photo 38" },
      { src: "images/menorca/39.jpg", caption: "Caption for photo 39" },
      { src: "images/menorca/40.jpg", caption: "Caption for photo 40" },
      { src: "images/menorca/41.jpg", caption: "Caption for photo 41" },
      { src: "images/menorca/42.jpg", caption: "Caption for photo 42" },
      { src: "images/menorca/43.jpg", caption: "Caption for photo 43" },
      { src: "images/menorca/44.jpg", caption: "Caption for photo 44" },
      { src: "images/menorca/45.jpg", caption: "Caption for photo 45" }
    ]
  },
  {
    slug: "slovenia",
    title: "Slovenia",
    intro: "Write a short paragraph of body copy here — set the scene for this project, where it was shot and what it's about.",
    thumb: "images/slovenia/thumb.jpg",
    images: [
      { src: "images/slovenia/01.jpg", caption: "Caption for photo 1" },
      { src: "images/slovenia/02.jpg", caption: "Caption for photo 2" },
      { src: "images/slovenia/03.jpg", caption: "Caption for photo 3" },
      { src: "images/slovenia/04.jpg", caption: "Caption for photo 4" },
      { src: "images/slovenia/05.jpg", caption: "Caption for photo 5" },
      { src: "images/slovenia/06.jpg", caption: "Caption for photo 6" },
      { src: "images/slovenia/07.jpg", caption: "Caption for photo 7" },
      { src: "images/slovenia/08.jpg", caption: "Caption for photo 8" },
      { src: "images/slovenia/09.jpg", caption: "Caption for photo 9" },
      { src: "images/slovenia/10.jpg", caption: "Caption for photo 10" },
      { src: "images/slovenia/11.jpg", caption: "Caption for photo 11" },
      { src: "images/slovenia/12.jpg", caption: "Caption for photo 12" },
      { src: "images/slovenia/13.jpg", caption: "Caption for photo 13" }
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
  },
  {
    slug: "allie",
    title: "Per Molts d'anys, Allie!",
    intro: "Write a short paragraph of body copy here — set the scene for this project, where it was shot and what it's about.",
    thumb: "images/allie/thumb.jpg",
    images: [
      { src: "images/allie/01.jpg", caption: "Caption for photo 1" },
      { src: "images/allie/02.jpg", caption: "Caption for photo 2" },
      { src: "images/allie/03.jpg", caption: "Caption for photo 3" },
      { src: "images/allie/04.jpg", caption: "Caption for photo 4" },
      { src: "images/allie/05.jpg", caption: "Caption for photo 5" },
      { src: "images/allie/06.jpg", caption: "Caption for photo 6" },
      { src: "images/allie/07.jpg", caption: "Caption for photo 7" },
      { src: "images/allie/08.jpg", caption: "Caption for photo 8" },
      { src: "images/allie/09.jpg", caption: "Caption for photo 9" },
      { src: "images/allie/10.jpg", caption: "Caption for photo 10" },
      { src: "images/allie/11.jpg", caption: "Caption for photo 11" },
      { src: "images/allie/12.jpg", caption: "Caption for photo 12" },
      { src: "images/allie/13.jpg", caption: "Caption for photo 13" },
      { src: "images/allie/14.jpg", caption: "Caption for photo 14" },
      { src: "images/allie/15.jpg", caption: "Caption for photo 15" },
      { src: "images/allie/16.jpg", caption: "Caption for photo 16" },
      { src: "images/allie/17.jpg", caption: "Caption for photo 17" },
      { src: "images/allie/18.jpg", caption: "Caption for photo 18" },
      { src: "images/allie/19.jpg", caption: "Caption for photo 19" },
      { src: "images/allie/20.jpg", caption: "Caption for photo 20" },
      { src: "images/allie/21.jpg", caption: "Caption for photo 21" },
      { src: "images/allie/22.jpg", caption: "Caption for photo 22" },
      { src: "images/allie/23.jpg", caption: "Caption for photo 23" },
      { src: "images/allie/24.jpg", caption: "Caption for photo 24" },
      { src: "images/allie/25.jpg", caption: "Caption for photo 25" },
      { src: "images/allie/26.jpg", caption: "Caption for photo 26" }
    ]
  },
  {
    slug: "basilicacistern",
    title: "Basilica Cistern",
    intro: "Write a short paragraph of body copy here — set the scene for this project, where it was shot and what it's about.",
    thumb: "images/basilicacistern/thumb.jpg",
    images: [
      { src: "images/basilicacistern/01.jpg", caption: "Caption for photo 1" },
      { src: "images/basilicacistern/02.jpg", caption: "Caption for photo 2" },
      { src: "images/basilicacistern/03.jpg", caption: "Caption for photo 3" },
      { src: "images/basilicacistern/04.jpg", caption: "Caption for photo 4" },
      { src: "images/basilicacistern/05.jpg", caption: "Caption for photo 5" },
      { src: "images/basilicacistern/06.jpg", caption: "Caption for photo 6" },
      { src: "images/basilicacistern/07.jpg", caption: "Caption for photo 7" }
    ]
  },
  {
    slug: "cheesemongers",
    title: "Cheesemongers",
    intro: "Write a short paragraph of body copy here — set the scene for this project, where it was shot and what it's about.",
    thumb: "images/cheesemongers/thumb.jpg",
    images: [
      { src: "images/cheesemongers/01.jpg", caption: "Caption for photo 1" },
      { src: "images/cheesemongers/02.jpg", caption: "Caption for photo 2" },
      { src: "images/cheesemongers/03.jpg", caption: "Caption for photo 3" },
      { src: "images/cheesemongers/04.jpg", caption: "Caption for photo 4" },
      { src: "images/cheesemongers/05.jpg", caption: "Caption for photo 5" },
      { src: "images/cheesemongers/06.jpg", caption: "Caption for photo 6" },
      { src: "images/cheesemongers/07.jpg", caption: "Caption for photo 7" },
      { src: "images/cheesemongers/08.jpg", caption: "Caption for photo 8" },
      { src: "images/cheesemongers/09.jpg", caption: "Caption for photo 9" },
      { src: "images/cheesemongers/10.jpg", caption: "Caption for photo 10" },
      { src: "images/cheesemongers/11.jpg", caption: "Caption for photo 11" },
      { src: "images/cheesemongers/12.jpg", caption: "Caption for photo 12" },
      { src: "images/cheesemongers/13.jpg", caption: "Caption for photo 13" },
      { src: "images/cheesemongers/14.jpg", caption: "Caption for photo 14" }
    ]
  }
];
