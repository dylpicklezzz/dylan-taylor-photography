# Photography Portfolio

A simple, no-build static site: plain HTML, CSS, and JavaScript. No frameworks, no installs required to run it.

## Previewing it locally

Just double-click `index.html` and it will open in your browser. That's it — the sample projects use placeholder images from `placehold.co`, so there's nothing else to set up.

## Adding a new project

1. Open `js/data.js`.
2. Copy one of the existing project blocks (the part between `{` and `},`).
3. Paste it into the `PROJECTS` array and edit:
   - `slug` — a short lowercase id with no spaces, used in the URL (e.g. `"japan"`)
   - `title` — shown on the homepage thumbnail and as the page heading
   - `intro` — the paragraph of body copy under the heading
   - `thumb` — the homepage thumbnail image
   - `images` — the list of `{ src, caption }` pairs for that project, in the order you want them to appear
4. Save the file and refresh your browser. The new project appears on the homepage automatically, with the correct image count and a working "Next project" link — you don't need to touch any other file.

The order of projects in `js/data.js` is the order they appear on the homepage, and it's also the order "Next project" cycles through (the last project loops back to the first).

## Swapping in your real photos

Right now every project uses `placehold.co` placeholder images so the site works immediately. To use your own photos:

1. Resize your photos (thumbnails should be roughly 4:3, e.g. 1200x900px).
2. Create a folder for the project, e.g. `images/vietnam/`, and put your files in it — a common naming pattern is `thumb.jpg` for the homepage thumbnail and `01.jpg`, `02.jpg`, `03.jpg`... for the rest.
3. In `js/data.js`, change the placeholder URLs for that project to the matching local path, e.g. `"images/vietnam/01.jpg"`.
4. Save and refresh.

## Publishing to GitHub Pages

If you're new to git/GitHub, here's the full path from this folder to a live URL.

**1. Turn this folder into a git repository and make your first commit:**
```
git init
git add .
git commit -m "Initial site"
```

**2. Create a new repository on GitHub:**
- Go to github.com and click "New repository"
- Name it something like `photography-portfolio`
- Leave it empty — do **not** check "Add a README" (this avoids a conflict on your first push)
- Click "Create repository"

**3. Connect and push your code** (GitHub will show you a URL like `https://github.com/<your-username>/photography-portfolio.git` — use that in place of `<url>` below):
```
git remote add origin <url>
git branch -M main
git push -u origin main
```

**4. Turn on GitHub Pages:**
- On your repo's GitHub page, go to Settings → Pages
- Under "Source", choose "Deploy from a branch"
- Branch: `main`, folder: `/ (root)` → Save
- Wait about a minute, then your site is live at `https://<your-username>.github.io/photography-portfolio/`

**5. Publishing future changes** (e.g. after adding a new project):
```
git add .
git commit -m "Add Japan project"
git push
```
GitHub Pages redeploys automatically within about a minute of each push.

One thing to watch for: GitHub Pages is case-sensitive about file names (unlike Mac by default), so make sure the paths you type in `js/data.js` exactly match the actual file names and folder names.
