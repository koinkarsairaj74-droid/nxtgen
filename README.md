# NXT GEN English Medium School

## Final visual choice: Template 1 — Modern Premium (Balanced & Professional)

This repository's **GitHub Pages website** now uses the user-selected Template 1 direction.

### Demo website

https://koinkarsairaj74-droid.github.io/nxtgen/

The address becomes available after GitHub Pages has successfully deployed the `main` branch's `site/` directory through **Settings → Pages → GitHub Actions**.

### Source files for the selected design

- `site/index.html` — new Template 1 layout and complete public information pages.
- `site/template-one.css` — self-contained responsive visual design.
- `site/app.js` — navigation, search, dynamic demo notices, gallery filters, faculty listings, calendars, role-selector login UI.
- `site/favicon.svg` — custom school crest.
- `.github/workflows/deploy.yml` — publishes `site/` directly, with **no Next.js build**.

Older Next.js prototype files and unused old stylesheets remain for source history but are **not linked from this website**.

### Design

Template 1 includes a large photographic hero with navy gradient, formal white school masthead, navy navigation, restrained gold CTAs, four-value highlight strip, welcome/principal section, academics, faculty, notices & calendar, school-life gallery, and admissions.

### Accuracy / production readiness

**Visual demonstration only, not the live school management platform.** Stock images are not actual school photographs. All faculty names and profiles, facilities, event notices, school contact details and school history require verification before publication. Academic years 2026–27 and 2027–28 are illustrative. The public website does not collect admissions applications, as requested.

The Admin/Teacher/Student/Parent login tabs are non-functional demonstration UI; no credentials are transmitted or stored. A separate secure content-management admin panel, Supabase configuration, bilingual Marathi content, and integration to the existing management software remain outstanding and require server-side authentication and permissions. GitHub Pages is static hosting, so these require a separate secure backend.

### Development and deployment

Open `site/index.html` locally to preview (internet is required for fonts and illustrative Unsplash photos). Use **GitHub → Settings → Pages → Source: GitHub Actions** to publish. View the Actions tab for a successful deployment; committing code alone does not confirm a live site.

Do not upload real student data or credentials into a public repository.
