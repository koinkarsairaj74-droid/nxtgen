# NXT GEN English Medium School

A contemporary 2026 Indian school website concept (HTML + CSS + JavaScript), combining modern editorial design with a credible school identity. Built for a Maharashtra State Board English-medium school, Nursery to Class XII.

## Website demo

**https://koinkarsairaj74-droid.github.io/nxtgen/**

The demo is live only after GitHub Pages has been enabled in repository **Settings → Pages → GitHub Actions** and the workflow succeeds.

## Current website source
- `site/index.html` — homepage plus nine informational sections
- `site/style.css` — original structural styles and responsive foundation\n- `site/modern.css` — 2026 contemporary design layer: responsive editorial homepage, modern navigation, warm navy-and-gold palette, restrained interactions
- `site/app.js` — navigation, notice/gallery filters, calendar, school search, portal demo
- `site/favicon.svg` — school crest icon

The GitHub Actions workflow deploys `site/` directly, without Next.js or npm. An older Next.js prototype remains in the repository but is **not used** by GitHub Pages.

### Current sections
Home, About Us, Academics, Admission Information, Notices & Events, Our Faculty, Gallery, Results & Achievements, Contact, School Portal.

### Important accuracy and security notes
This is a frontend demonstration, **not an official publication of verified school information**. Photos are generic education-related sample images and are explicitly labeled as such. No actual faculty names/photos, school address, contact numbers, exam results, or school-specific achievements are represented as verified facts. No student information is stored.

The login design is a demonstration only; it does not authenticate or transmit credentials. The existing school management software and the secure Supabase CMS are not connected. The English/Marathi button is a placeholder until approved translations are written. The search indexes static demonstration content, not live data. Calendar events and notices are illustrative.

### Launch preparation
1. Replace stock images with actual school/campus/classroom photos and obtain school approval.
2. Add verified address, principal/chairman message, teachers, events, and official contact links.
3. Implement approved Marathi content and school management integration.
4. Host any CMS or management authentication on a secure backend; do not store credentials in this public GitHub Pages repository.
5. Verify mobile and desktop rendering, accessibility and live deployment before public launch.
