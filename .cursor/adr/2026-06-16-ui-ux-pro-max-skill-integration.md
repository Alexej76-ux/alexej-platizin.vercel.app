# ADR: UI UX Pro Max Skill Integration

- Status: Accepted
- Date: 2026-06-16
- Owners: Portfolio maintenance

## Context
The portfolio needed a repeatable, professional UI/UX workflow with design-system guidance instead of ad-hoc styling decisions.

## Decision
- Install [UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) into this project using:
  ```bash
  npm install -g uipro-cli
  uipro init --ai cursor
  ```
- Generate a persisted design system for this portfolio:
  ```bash
  python3 .cursor/skills/ui-ux-pro-max/scripts/search.py "QA engineer portfolio professional dark mode trustworthy" --design-system --persist -p "Alexej Platizin Portfolio"
  ```
- Apply selected recommendations to the static site:
  - Typography: Archivo + Space Grotesk
  - Palette tokens: monochrome + blue CTA (`#2563EB`)
  - Mobile hamburger navigation
  - Skill checklist fixes (no emoji icons, reduced motion, overflow guardrails)

## Consequences
### Positive
- Shared design intelligence available in-project for future UI tasks.
- Clear source of truth in `design-system/alexej-platizin-portfolio/MASTER.md`.
- Better mobile navigation and accessibility baseline.

### Trade-offs
- Additional project files (skill assets + design-system docs).
- Small inline script required for nav toggle on static HTML.

## Alternatives Considered
- Continue manual styling without a skill (rejected: less consistent and harder to maintain).
- Adopt full cyberpunk style from initial match (rejected: poor fit for professional QA portfolio; used minimal dark portfolio palette instead).
