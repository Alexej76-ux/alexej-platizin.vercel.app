# ADR: Mouse Trail and Pointer UX Enhancement

- Status: Accepted
- Date: 2026-06-16
- Owners: Portfolio maintenance

## Context
The page needed richer desktop interaction feedback while keeping accessibility and performance safeguards.

## Decision
- Add a subtle cursor-trail tracing effect for fine-pointer devices only.
- Disable the effect when `prefers-reduced-motion` is enabled.
- Extend `cursor: pointer` to key interactive elements not previously covered.

## Consequences
### Positive
- More dynamic and modern feel on desktop.
- Clearer interactive affordances across links/cards/buttons.

### Trade-offs
- Additional JS work per frame for trail animation (limited to desktop and lightweight dots).

## Alternatives Considered
- Global custom cursor replacement (rejected: too intrusive).
- Always-on trail on all devices (rejected: poor UX/performance on touch devices).
