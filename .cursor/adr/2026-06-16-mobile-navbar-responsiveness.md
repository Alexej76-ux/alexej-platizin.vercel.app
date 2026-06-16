# ADR: Mobile Navbar Responsiveness

- Status: Accepted
- Date: 2026-06-16
- Owners: Portfolio maintenance

## Context
The fixed top navbar was desktop-oriented and could become cramped on smaller screens, reducing readability and tap comfort.

## Decision
- Add a dedicated mobile breakpoint at `@media (max-width: 900px)` to:
  - stack navbar content vertically,
  - allow wrapped navigation links with reduced spacing and font size,
  - preserve fixed-header behavior.
- Increase `body` top padding at mobile breakpoints so content is not obscured by the taller wrapped navbar.

## Consequences
### Positive
- Better nav readability and interaction on tablets/phones.
- Less risk of clipped or overlapping menu links.
- Predictable behavior without introducing JavaScript complexity.

### Trade-offs
- Slightly taller header on small screens.
- Additional responsive CSS rules to maintain.

## Alternatives Considered
- Add hamburger menu with JavaScript toggle (rejected for current scope).
- Keep single-line nav and only reduce font size (rejected: still fragile at narrow widths).
