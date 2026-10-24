# NXT GEN ENGLISH MEDIUM SCHOOL — Liquid Glass Concept 1

A freshly built, mobile-first school website inspired by the selected **cinematic Apple-style liquid glass** direction. Public school details must be verified.

## Live demo
https://koinkarsairaj74-droid.github.io/nxtgen/

## Deployment
The GitHub Actions workflow in .github/workflows/deploy.yml deploys the static contents of `site/` directly to GitHub Pages. In Settings > Pages, choose GitHub Actions as the build source.

## Active website source
- `site/index.html` — accessible navigation, identity and linked sections
- `site/glass.css` — layout, glass cards, desktop/mobile styling
- `site/first-choice.css` — selected cinematic glass look with translucent dark navigation and campus hero
- `site/glass.js` — English/Marathi public copy, all public routes, search, notices, filterable gallery, calendar and four-role login demo
- `site/assets` — generated **illustrative** school campus and student images, and a crest

Older Next.js files and previous prototype styles remain in repository history but are **not deployed** by the Pages workflow.

## What is demo-only
The school building and student images are **AI-generated concept visuals, not authentic campus photographs**. Official contact details, verified faculty identities, school achievements and events have not been provided. Example notices and calendar dates are labeled as demos.

The role-selector school portal is a UI preview. No credentials are transmitted or saved, and real management-system integration remains pending. The separate secured content management system requires Supabase/server-side authorization and is locked pending configuration. Do not put student records, passwords or private data in this public static site.

## Local preview
Open `site/index.html` in a browser. Google Fonts may require internet access. No npm or build step is required.

## Validation
The source was tested in headless Chromium at 1440px and 390px widths: basic routes and Marathi switching passed without JavaScript page errors or horizontal overflow. GitHub Pages deployment status must be verified separately.
