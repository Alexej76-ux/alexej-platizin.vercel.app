# ADR: About Section Spacing and UX Refresh

- Status: Accepted
- Date: 2026-06-16
- Owners: Portfolio maintenance

## Context
The About section (`section#about`) had dense vertical rhythm and low-emphasis document links, reducing readability and scanability.

## Decision
- Increase section spacing and set a constrained content width for better line length.
- Improve heading and paragraph rhythm for faster reading.
- Style the quote area as a distinct informational container.
- Replace inline document-link styling with a reusable class and interactive states (`hover`, `focus-visible`).
- Add mobile adjustments to preserve usability on smaller screens.

## Consequences
### Positive
- Better visual hierarchy and whitespace balance.
- Improved clarity of important action links.
- More maintainable CSS by removing inline styles from the About links.

### Trade-offs
- Slightly larger CSS surface area.
- Manual UI verification still required due to no automated visual testing setup.

## Alternatives Considered
- Keep current styling and only tweak padding (rejected: insufficient UX improvement).
- Convert links to full-width buttons everywhere (rejected: too heavy for desktop layout).
