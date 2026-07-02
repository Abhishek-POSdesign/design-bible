---
name: abhishek-sikka-personal-os
description: Use this skill to generate well-branded interfaces and assets for Abhishek Sikka's Personal OS ecosystem. Contains essential design guidelines, colors, typography, spacing, interaction physics, and UI kit components for prototyping the Personal OS (pos.abhisheksikka.com) — a multi-module PWA for Finance, Health, Research, and Writing.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can read the rules here to become an expert in designing with this brand.

Key design rules to apply immediately:
- Canvas background: one Unified Base Canvas #f5f4f1 everywhere — never split by module/category
- Cards always surface on white #ffffff with the elevated shadow token
- Display font (H1 only): Inter Black 900, -0.05em tracking, 1.05 line-height
- Distinction font (H2 only): Source Serif 4, 600–700 — never for body, tables, or metrics
- Body/UI font (H3 + everything else): Instrument Sans
- Border radius: 12px everywhere; 6px for badges/tags; 8px for nav item hover/active pills
- Button hover: translateY(-3px) scale(1.015) at 150ms cubic-bezier(0.16, 1, 0.3, 1); press deflects at 100ms
- Icons: Lucide outline only, 1.5px stroke, 16px inline / 20px headers, always with text label
- Labels: UPPERCASE with 0.06em letter-spacing
- Inputs: 12px radius, focus = accent-color border + 3px accent glow; amount fields use Indian digit grouping; date fields use a custom picker, never native
- Every zero-item view gets an EmptyState (icon + message + action) — never "No data found"
- No pastel full-fills on metric cards, no zebra rows, no backdrop-filter, no emoji

If the user invokes this skill without any other guidance, ask them what they want to build or design (a Finance dashboard screen, a Health tracker, a Writing log, a PWA prototype, etc.), ask a few focused questions about scope and interactivity, and then act as an expert designer who outputs an HTML artifact or production-ready component code, depending on the need.
