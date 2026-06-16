# ADR: Contact and Footer Polish

- Status: Accepted
- Date: 2026-06-16
- Owners: Portfolio maintenance

## Context
The contact area looked visually flat and dense, and footer styling hooks existed in CSS but were not connected in markup.

## Decision
- Convert the contact section into a structured card layout by using `.contact-box` and `.contact-lead`.
- Improve contact-line readability with icon alignment and accent coloring.
- Connect footer markup to the existing style system by adding `class="site-footer"` and introducing `.footer-legal`.
- Add selector-level tests for contact/footer styling hooks in `style-uiux.test.js`.

## Consequences
### Positive
- Better readability and visual hierarchy in the contact section.
- Footer now uses intended visual styling consistently.
- Improved maintainability through explicit class hooks and no ad-hoc styling.

### Trade-offs
- Additional CSS selectors and minor complexity increase.
- Tests assert hook existence, not visual pixel quality.

## Alternatives Considered
- Keep plain text footer and only tweak colors (rejected: weak structure).
- Build a fully multi-column footer immediately (rejected: unnecessary scope for this iteration).
