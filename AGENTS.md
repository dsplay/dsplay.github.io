# DSPLAY docs — dsplay.github.io

Public documentation site for DSPLAY, published with GitHub Pages. Jekyll with the `just-the-docs` remote theme; the pages live in `docs/` and each one sets `parent` and `nav_order` in its front matter.

## Writing docs

This is a repo for developers. Write succinctly and practically: say what a thing is and how to use it, skip introductions and filler.

For `dsplay_media` (and the other objects a template receives), document each field in a code sample, one variable per line with a comment explaining it. The Android player (`../dsplay-players/apps/android`, `player/*/*PlayerExecution.kt`) is the source of truth for which fields exist.

## Languages

The site is published in English (`index.md`, `docs/`) and Portuguese (`_pt/`, served under `/pt`).

- **Keep both in sync:** every change to a page is made in both versions, in the same commit. Adding, moving or removing a page applies to both.
- **Portuguese version:** `_pt/` mirrors the English tree. Each page has `permalink: /pt<english url>` and an explicit `title:` (collections don't get titles from the `#` heading). `parent` and `grand_parent` use the Portuguese titles (`Templates HTML`, `Serviços JSON`, `Parceiros`). Keep `nav_order` equal to the English page.
- **What gets translated:** prose and code comments. Identifiers, keys, protocol values (`'landscape'`, `'wpa'`, ...) and URLs stay as they are. Sample values in code may be in either language.
- **Menu and switcher:** the sidebar shows only the current language (`_includes/components/site_nav.html`, `sidebar.html`), and `aux_nav.html` adds the language link. These are copies of the theme's files: check them when the theme changes.

## Running locally

`docker compose up` serves the site at http://localhost:4000 (Ruby 3.3, `github-pages` gem, live regeneration). `PAGES_REPO_NWO` is set in `docker-compose.yml`; without it the build fails with "No repo name found". Without Docker, see `README.md`.

## Related repos

- `../dsplay-templates`: monorepo with the templates, boilerplates and SDK packages this site documents. Links to template source point at `https://github.com/dsplay/dsplay-templates/tree/main/...`; check the folder exists there before adding one.

## Git

- Commit titles lead with one fitting emoji, then `type(scope): …` (e.g. `🐛 fix(docs): …`).
- Everything written to the repo (docs, commits, PR bodies) is in English, except the Portuguese docs in `_pt/`; replies to the user are in Portuguese.
- Stage files by path, never `git add -A`, and never `git stash`: several sessions can share one checkout, and either one takes another session's uncommitted work with it. If `git status` shows changes you did not make, leave them alone.
- Delete merged branches with `git branch -d` (never `-D`), locally and on `origin`.
