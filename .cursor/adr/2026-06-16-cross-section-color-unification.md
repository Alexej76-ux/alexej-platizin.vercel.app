# ADR: Cross-Section Color Unification

- Status: Accepted
- Date: 2026-06-16
- Owners: Portfolio maintenance

## Context
Different section background gradients created visible color shifts and horizontal banding between adjacent sections.

## Decision
- Use one shared background gradient for all major content sections:
  `.hero-section, .about-section, #skills, .experience-section, .projects-section, .contact-section`.
- Keep card-level contrast for hierarchy instead of section-by-section palette variation.

## Consequences
### Positive
- Smoother visual flow while scrolling.
- More cohesive and professional look.

### Trade-offs
- Less per-section visual identity.

## Alternatives Considered
- Keep unique gradients per section (rejected: looked inconsistent).
- Flat single color per section with hard borders (rejected: too rigid/dated).
