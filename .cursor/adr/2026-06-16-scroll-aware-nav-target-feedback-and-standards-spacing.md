# ADR: Scroll-Aware Nav, Target Feedback, and Standards Spacing

- Status: Accepted
- Date: 2026-06-16
- Owners: Portfolio maintenance

## Context
The page needed better orientation during manual scrolling, clearer anchor landing feedback, and improved readability in the project standards list where icon/text wrapping looked uneven.

## Decision
- Add IntersectionObserver-based active nav updates while scrolling.
- Add `section:target` feedback and `scroll-padding-top` for fixed-header anchor jumps.
- Tune mobile card hover shadow depth to reduce heavy paint feel.
- Refine standards list spacing with icon absolute positioning and left text padding for cleaner multiline wrapping.

## Consequences
### Positive
- Better navigation context and smoother anchor UX.
- Improved readability in dense project card list items.
- Cleaner perceived performance on mobile.

### Trade-offs
- Increased CSS/script complexity and additional selector/test surface area.

## Alternatives Considered
- Keep click/hash-only active nav (rejected: weak while manual scrolling).
- Keep flex-based standards list rows (rejected: awkward wraps with bold labels).
