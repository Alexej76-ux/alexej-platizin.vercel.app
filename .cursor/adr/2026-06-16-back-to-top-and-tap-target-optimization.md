# ADR: Back-to-Top and Tap Target Optimization

- Status: Accepted
- Date: 2026-06-16
- Owners: Portfolio maintenance

## Context
The page is long and interaction targets on mobile could be improved for easier tapping and navigation efficiency.

## Decision
- Add a floating back-to-top button that appears after scrolling (`scrollY > 420`).
- Keep button visually lightweight and consistent with existing palette.
- Ensure key interactive controls meet recommended touch size by adding `min-height: 44px` to buttons and mobile nav links.

## Consequences
### Positive
- Faster navigation on long pages.
- Better mobile ergonomics and usability.

### Trade-offs
- Adds one floating UI element and minor script/CSS complexity.

## Alternatives Considered
- No back-to-top control (rejected: slower navigation on long content).
- Always-visible back-to-top control (rejected: unnecessary visual noise).
