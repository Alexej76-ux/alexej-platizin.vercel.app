# Project Single Source of Truth

## Project
- Name: `alexej-platizin.vercel.app`
- Type: Static portfolio website
- Stack: HTML5, CSS3, Font Awesome

## UI/UX Pro Max Skill (Installed)
- Source: [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)
- Project skill path: `.cursor/skills/ui-ux-pro-max/`
- Design system master: `design-system/alexej-platizin-portfolio/MASTER.md`
- Generate/update design system:
  ```bash
  python3 .cursor/skills/ui-ux-pro-max/scripts/search.py "<query>" --design-system --persist -p "Alexej Platizin Portfolio"
  ```

## Current Structure
- `index.html`: Main portfolio page with all primary sections and mobile nav toggle.
- `style.css`: Global styles, design tokens, responsive behavior, and interaction states.
- `anschreiben.html` and `anschreiben.css`: Cover letter page and styles.
- `style-uiux.test.js`: Selector-level UI regression tests.
- `*.pdf`, `foto.jpg`: Portfolio assets and downloadable documents.

## Active UX Focus
- Follow UI UX Pro Max design system for portfolio polish (typography, color tokens, accessibility checklist).
- Keep visual feedback patterns consistent for navigation, cards, buttons, timeline blocks, links, project cards, contact/footer, and mobile navbar.

## Recent Change (2026-06-16)
- Installed UI UX Pro Max skill for Cursor via `uipro init --ai cursor`.
- Generated and persisted design system for this portfolio.
- Applied design-system typography (Archivo + Space Grotesk) and CTA color token (`--color-cta: #2563EB`).
- Added mobile hamburger navigation with accessible toggle behavior.
- Replaced emoji list markers with Font Awesome icons (skill pre-delivery rule).
- Added `prefers-reduced-motion`, `overflow-x: hidden`, and removed crosshair cursor.
- Prior UX passes: about/projects/contact spacing, global color system, hover states, project cards, footer polish.
- Adjusted project grid so cards keep proportional heights by content (removed forced stretch in `#projects`).
- Simplified contact section palette to reduce color noise and keep accents consistent.
- Unified all major section backgrounds to one consistent gradient to remove visible color banding between sections.
- Fixed `#skills` side spacing to match other sections by applying the same section padding selectors.
- Increased contrast for `.btn-secondary` (Contact Me) to ensure readable text on hero background.
- Added mouse-trail tracing effect for desktop/fine-pointer devices.
- Expanded pointer cursor behavior for key interactive elements (buttons, links, timeline items, doc links).
- Added global UI/UX polish pass for consistent content width across skills/projects/experience sections.
- Improved card and timeline readability with better heading/paragraph line-height tuning.
- Added premium polish: subtle section separators, blurred fixed navbar, and active nav link state.
- Added global anchor/button focus-visible styling for clearer keyboard accessibility.
- Added back-to-top floating control for long-page usability.
- Improved mobile tap target sizing (`min-height: 44px`) for nav links and buttons.
- Added scroll-aware active navbar highlighting using section intersection tracking.
- Added section target feedback and tuned mobile hover shadow intensity for smoother performance.
- Added scroll-aware nav activation with IntersectionObserver and hash sync improvements.
- Added section target highlighting, scroll-padding-top, and mobile effect tuning for smoother UX.
- Refined project standards bullet/icon spacing for better readability in the Game Testing card.
