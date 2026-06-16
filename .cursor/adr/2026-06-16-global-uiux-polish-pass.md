# ADR: Global UI/UX Polish Pass

- Status: Accepted
- Date: 2026-06-16
- Owners: Portfolio maintenance

## Context
After iterative fixes, the page still needed a cohesive polish for content width consistency and text readability across key sections.

## Decision
- Add shared max-width and centering for internal content blocks in skills, projects, and experience sections.
- Improve heading and paragraph readability in cards and timeline descriptions.
- Keep visual style unchanged while improving scanability and rhythm.

## Consequences
### Positive
- More consistent horizontal composition across sections.
- Better readability for dense timeline and card content.

### Trade-offs
- Additional CSS selectors for section-internal layout constraints.

## Alternatives Considered
- Leave each section with independent widths (rejected: uneven visual rhythm).
- Increase global font size everywhere (rejected: would over-amplify already readable areas).
