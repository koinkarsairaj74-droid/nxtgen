# NXT GEN ENGLISH MEDIUM SCHOOL ✳

### Premium new-generation school website

> Nurturing Today's Learners, Building Tomorrow's Leaders.

**[OPEN WEBSITE DEMO](https://koinkarsairaj74-droid.github.io/nxtgen/)** — opens once GitHub Pages has been enabled and deployed.

## ⭐ New website: built from scratch

The complete visual website is now in the **`site/`** folder, separate from the older Next.js prototype. GitHub Pages publishes the contents of that folder directly. No package install, compilation or server is required for the public-facing demonstration.

- `site/index.html`: All public pages, semantic structure and responsive navigation.
- `site/style.css`: Custom fluid layouts, premium type, mobile styling, page animation.
- `site/app.js`: Single-page navigation, faculty cards, event and notice filters, bilingual-switch placeholder, calendar, gallery, search, demo portal interactions.
- `site/favicon.svg`: Custom school crest-inspired favicon.
- `.github/workflows/deploy.yml`: Static GitHub Pages publishing action.

A fallback `index.html` at repository root redirects to `site/` for sites configured to publish from the main branch rather than from GitHub Actions.

## 🚀 See the demo using GitHub Pages

1. Go to **Settings → Pages** in GitHub for this repository.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Open the **Actions** tab and select **Deploy NXT GEN Premium School Website**.
4. A successful deployment serves the site at **https://koinkarsairaj74-droid.github.io/nxtgen/**.

If the site is not shown yet, inspect the Actions deployment status. A GitHub README preview is not the website.

## Public sections

Home, Our Story, Academics (Nursery to Class XII), Faculty, Notices & Events (filters + calendar), Gallery (filters + sample imagery), Admission Information, Achievements, Contact, and a four-role login-interface preview.

## Demo vs. production

**This is a design and interaction demo, not a production management system.**

- Stock photos and sample educator portraits are **not photos of NXT GEN or its faculty**. Verified school photography should replace them.
- Sample notices, event dates, facilities and academic information are labeled illustrative.
- Phone, address, email and social links remain unconfigured until official details are supplied.
- The language button indicates planned Marathi support; complete Marathi content is not yet authored.
- The calendar is navigable with explicitly labeled sample activities.
- The search function indexes static demo pages and sample notice data, not a future CMS database.
- The student/parent/teacher/admin portal is a safe no-op demo; **no credentials are sent or stored**.
- The previously planned Supabase-backed website CMS remains unconnected. No secret keys, student data or live school administrative actions should be published on GitHub Pages.
- The previous `app/` and `components/` Next.js prototype files remain in the repository but **are no longer deployed**.

## Development

Open `site/index.html` in a browser to inspect the frontend locally. The sample stock images and Google Fonts need an internet connection.

**Important:** The repository was public when development began. Keep all confidential records and access credentials out of Git.
