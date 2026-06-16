# ADR: Project Cards UX Refinement

- Status: Accepted
- Date: 2026-06-16
- Owners: Portfolio maintenance

## Context
The projects section cards had inconsistent internal spacing and mixed inline styles, making the visual hierarchy weaker and maintenance harder.

## Decision
- Introduce dedicated class-based project card styles for:
  - body copy (`.project-card p`),
  - standards heading (`.project-meta-title`),
  - standards list (`.project-standards`),
  - CTA button (`.project-link-btn`).
- Keep card heights visually balanced using flex layout and `margin-top: auto` for CTA alignment.
- Remove inline styles from project markup and move styling fully into `style.css`.
- Add selector-level regression checks to `style-uiux.test.js`.

## Consequences
### Positive
- Cleaner visual hierarchy and readability inside cards.
- Consistent CTA placement and stronger scanability.
- Better maintainability by eliminating inline styling.

### Trade-offs
- Additional CSS selectors and minor increase in stylesheet size.
- Tests verify selector presence, not pixel-perfect visual composition.

## Alternatives Considered
- Keep inline styles and only tweak paddings (rejected: poor maintainability).
- Rebuild cards as fully custom components with JS (rejected: unnecessary complexity for static site).
