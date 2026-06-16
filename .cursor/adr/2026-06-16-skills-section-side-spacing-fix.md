# ADR: Skills Section Side Spacing Fix

- Status: Accepted
- Date: 2026-06-16
- Owners: Portfolio maintenance

## Context
The skills section (`#skills`) lacked the same side padding as other sections because shared spacing styles targeted `.skills-section`, while markup used `id="skills"` without that class.

## Decision
- Update shared section padding selectors to target `#skills` directly (desktop and mobile blocks).
- Keep section spacing behavior centralized rather than adding one-off overrides.

## Consequences
### Positive
- Skills section now aligns with global page gutters.
- Consistent horizontal rhythm across all sections.

### Trade-offs
- Slightly more explicit selector list in CSS.

## Alternatives Considered
- Add `class="skills-section"` in HTML (valid but deferred).
- Add local `#skills` padding override only once (rejected for maintainability).
