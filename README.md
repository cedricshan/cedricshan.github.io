# Yuan Shan — Personal Website

A static, single-page personal site for [Yuan Shan](https://github.com/cedricshan).
Hand-written HTML / CSS / JS — no build step, no dependencies.

```
personal_website/
├── index.html              # all page content
├── styles.css              # design system + layout
├── script.js               # theme toggle, mobile menu, reveals, project filter
├── YuanSHAN-resume-042126.pdf
└── README.md
```

## Local preview

Just open `index.html` in a browser, or run a tiny local server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy publicly

The site is fully static. Pick whichever host you prefer — all of these work out of the box:

### Option A · GitHub Pages (recommended, free)

1. Create a new public repo, e.g. `cedricshan.github.io` (user site)
   or `personal-website` (project site).
2. Push the contents of this folder to the repo's default branch.

   ```bash
   cd personal_website
   git init
   git add .
   git commit -m "Initial personal website"
   git branch -M main
   git remote add origin git@github.com:cedricshan/cedricshan.github.io.git
   git push -u origin main
   ```

3. On GitHub: **Settings → Pages → Build & deployment**
   - **Source**: *Deploy from a branch*
   - **Branch**: `main` / `/ (root)` → Save
4. Wait ~1 minute. Your site will be live at:
   - `https://cedricshan.github.io/` (if you used the `cedricshan.github.io` repo name)
   - `https://cedricshan.github.io/personal-website/` (project repo)

### Option B · Netlify (drag & drop)

1. Visit https://app.netlify.com/drop
2. Drag the entire `personal_website` folder into the page.
3. You get an instant public URL (rename it from the dashboard if you want).

### Option C · Vercel

1. `npm i -g vercel`
2. From inside the folder: `vercel --prod`

## Editing content

All content is plain HTML in `index.html`:

| Section          | Where to edit                          |
| ---------------- | -------------------------------------- |
| Hero / About     | `<section class="hero">`, `#about`     |
| Working Paper    | `#research` → second `paper-card`      |
| Publication      | `#research` → first `paper-card`       |
| Projects         | `#projects` → `.project-grid`          |
| Experience       | `#experience` → `.timeline`            |
| Education        | `#education`                           |
| Honors           | `.honors-list`                         |
| Contact          | `#contact`                             |

To add a new project card, copy any `<article class="project-card">` block,
then edit the title, description, tags, dates, and links. Use the
`data-tags="..."` attribute (`llm`, `causal`, `stats`, `optim`, `viz`)
so the filter buttons pick it up.

## Customizing the look

All colors, fonts, spacing, and shadows live as CSS custom properties
at the top of `styles.css` (`:root` for light, `[data-theme="dark"]`
for dark). Tweak those tokens to re-skin the whole site.

---

© Yuan Shan
