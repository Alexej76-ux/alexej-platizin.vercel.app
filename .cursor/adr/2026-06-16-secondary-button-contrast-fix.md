# ADR: Secondary Button Contrast Fix

- Status: Accepted
- Date: 2026-06-16
- Owners: Portfolio maintenance

## Context
The `Contact Me` button (`.btn.btn-secondary`) had low contrast against the hero background, making the label difficult to read.

## Decision
- Change secondary button to high-contrast styling:
  - dark translucent background for base state
  - light text (`var(--text-primary)`)
  - clearer border and focus ring
  - stronger hover background using primary accent

## Consequences
### Positive
- Better readability and accessibility for call-to-action text.
- More obvious interactive state changes.

### Trade-offs
- Slightly less visual subtlety than transparent-outline style.

## Alternatives Considered
- Keep transparent background and only brighten text (rejected: still weak on bright/gradient areas).
- Use full primary button style (rejected: needed visual distinction from primary actions).
