# Yuan Shan — Resume / CV (LaTeX sources)

Two LaTeX documents:

- `resume.tex` → 1-page focused resume (`resume.pdf`)
- `cv.tex`    → multi-page full CV (`cv.pdf`)

The compiled PDFs live at the **site root** (`../resume.pdf` and `../cv.pdf`)
so they are served at:

- https://cedricshan.github.io/resume.pdf
- https://cedricshan.github.io/cv.pdf

## Recompile

Both files compile with [Tectonic](https://tectonic-typesetting.github.io/),
which auto-fetches any LaTeX packages it needs:

```bash
cd cv

tectonic resume.tex && cp resume.pdf ../resume.pdf
tectonic cv.tex     && cp cv.pdf     ../cv.pdf
```

Install Tectonic with Homebrew if you don't have it:

```bash
brew install tectonic
```

You can also use any standard LaTeX engine (`pdflatex`, `xelatex`,
`lualatex`); the documents only use widely-available packages
(`geometry`, `xcolor`, `enumitem`, `titlesec`, `hyperref`, `fancyhdr`).

## Style

- Sans-serif body (Latin Modern Sans), serif emphasis where useful
- Burgundy accent color `#8A3324` matching the website
- Section headers in small uppercase with thin rule underneath
- Right-aligned dates, italic subtitles, accent-colored bullets
