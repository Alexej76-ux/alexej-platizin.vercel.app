# ADR: Project Cards Proportional Layout

- Status: Accepted
- Date: 2026-06-16
- Owners: Portfolio maintenance

## Context
The projects section visually stretched all cards to match the tallest card, which created large empty areas and made cards look non-proportional.

## Decision
- Keep shared card styling for consistency.
- Override project grid behavior to content-based heights:
  - `.projects-grid { align-items: start; }`
  - `.project-card { min-height: 0; }`
- Add regression checks in `style-uiux.test.js` to keep this behavior stable.

## Consequences
### Positive
- Cards now appear proportionate to their content.
- Reduced visual dead space in shorter cards.
- Better scanability in the projects section.

### Trade-offs
- Card bottoms no longer align perfectly in one row when content length differs.

## Alternatives Considered
- Keep equal-height stretched cards (rejected: looked visually imbalanced with current content).
- Trim middle-card content to force equal height (rejected: loses useful information).
