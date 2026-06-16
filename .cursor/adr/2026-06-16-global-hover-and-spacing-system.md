# ADR: Global Hover and Spacing System

- Status: Accepted
- Date: 2026-06-16
- Owners: Portfolio maintenance

## Context
The page had inconsistent interaction feedback and uneven section rhythm, which reduced perceived quality and readability.

## Decision
- Introduce consistent hover and focus-visible treatments for key interactive elements:
  - navigation links,
  - buttons,
  - skill and project cards,
  - timeline entries,
  - contact links.
- Introduce global spacing rhythm across sections and mobile adjustments for tighter, clearer layouts.
- Add a Bun test file to validate that core UI/UX selector rules remain present.

## Consequences
### Positive
- More cohesive UI interactions and improved perceived responsiveness.
- Better readability via consistent vertical spacing.
- Basic regression guardrails for styling rules through automated tests.

### Trade-offs
- Slightly larger stylesheet.
- Tests validate selector presence, not pixel-perfect rendering.

## Alternatives Considered
- Keep component-level ad hoc hover styles (rejected: inconsistent and harder to maintain).
- Add only manual QA checks with no test file (rejected: weaker protection against accidental style regressions).
