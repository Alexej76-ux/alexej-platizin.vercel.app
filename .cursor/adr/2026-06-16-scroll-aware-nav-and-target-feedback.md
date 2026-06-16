# ADR: Scroll-Aware Navigation and Target Feedback

- Status: Accepted
- Date: 2026-06-16
- Owners: Portfolio maintenance

## Context
Anchor links and click-based active nav state were improved, but active section indication did not update when users scrolled manually.

## Decision
- Add IntersectionObserver-based section tracking to update active navbar link while scrolling.
- Add `section:target` visual feedback and `scroll-padding-top` for cleaner anchor landings below fixed navbar.
- Reduce mobile hover shadow intensity for card interactions to keep effects smooth and less heavy.

## Consequences
### Positive
- Better navigation orientation during scroll.
- Improved anchor behavior with fixed header.
- Cleaner perceived performance on smaller devices.

### Trade-offs
- Slightly more script and CSS complexity.

## Alternatives Considered
- Keep hash-only active nav updates (rejected: does not reflect manual scrolling).
- Use scroll event listeners for all sections (rejected: noisier and less efficient than IntersectionObserver).
