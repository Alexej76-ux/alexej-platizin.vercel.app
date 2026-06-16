# ADR: Complete-Page Color System

- Status: Accepted
- Date: 2026-06-16
- Owners: Portfolio maintenance

## Context
The page used mostly a single dark-blue surface with isolated accent styling. Visual hierarchy and section identity could be improved by a consistent tokenized color system.

## Decision
- Introduce a global color-token layer in CSS `:root` for:
  - base backgrounds and surfaces,
  - primary/secondary text,
  - primary/secondary/tertiary accents.
- Apply gradients and token-based colors to body, navbar, key sections, cards, buttons, and links.
- Keep accessibility-aware focus-visible states while enhancing visual personality.
- Extend existing Bun style tests to include color-token and gradient checks.

## Consequences
### Positive
- Stronger visual identity across the whole page.
- Better maintainability through reusable tokens instead of repeated literals.
- Reduced risk of accidental style drift via selector-level automated tests.

### Trade-offs
- Slightly increased design complexity in CSS.
- Token presence tests do not verify exact visual rendering quality.

## Alternatives Considered
- Keep hardcoded colors and only tweak one section (rejected: inconsistent at page level).
- Add random per-section colors without tokenization (rejected: maintenance and cohesion risk).
