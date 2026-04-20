# CSS Interview Essentials (CSS, Sass, Less, CSS-in-JS)

## Practical Sections

- `animations/` - CSS animation examples with docs, snippets, and live showcase.

## Most crucial things to understand

1. CSS fundamentals and browser model
- Cascade, specificity, inheritance, and source order.
- Box model, formatting contexts, and stacking context basics.

2. Layout systems
- Flexbox for 1D alignment and Grid for 2D layouts.
- Positioning, responsive units, and media/container queries.

3. Scalable styling architecture
- Naming strategy (BEM or utility-first), component boundaries.
- Design tokens (spacing, colors, typography, z-index scale).

4. Performance and maintainability
- Critical CSS, render-blocking styles, and avoiding deep selectors.
- Avoiding style regressions with predictable composition rules.

5. Preprocessors (Sass/Less)
- Variables, mixins, nesting, and partials/modules.
- Know when preprocessor power creates complexity.

6. CSS-in-JS approach
- Runtime vs build-time styles, theming, and co-location.
- SSR/hydration and style injection order concerns.

7. Accessibility and UX details
- Focus states, reduced motion support, contrast, and readable spacing.
- Consistent interaction states (hover, active, disabled, loading).

8. Cross-browser and debugging workflow
- DevTools workflow, source maps, and compatibility checks.
- Progressive enhancement for new CSS features.

## Top interview questions — Middle

1. Explain cascade, specificity, and how conflicts are resolved.
2. When should you choose Grid vs Flexbox?
3. How do you build responsive layouts beyond simple media queries?
4. How do you avoid CSS conflicts in large component libraries?
5. What are practical pros/cons of Sass or Less in modern projects?
6. How do you decide between CSS Modules, utility CSS, and CSS-in-JS?
7. How do you optimize CSS performance for initial page load?
8. How do you manage theming (light/dark/brand) safely?
9. How do you debug z-index and stacking context bugs?
10. How do you design accessible focus and state styles?

## Top interview questions — Senior

1. How do you design a scalable styling architecture for multi-team products?
2. How do you standardize design tokens across apps and platforms?
3. How do you choose between Sass/Less and CSS-in-JS for a large codebase?
4. How do you migrate from legacy global CSS to component-scoped styling?
5. How do you prevent runtime CSS-in-JS performance issues at scale?
6. How do you design SSR-safe styling strategy in React/Next applications?
7. How do you enforce CSS quality and prevent regressions in CI/CD?
8. How do you support white-label theming without exploding complexity?
9. How do you handle browser support strategy for modern CSS features?
10. How do you mentor teams to keep CSS readable and maintainable?

## Quick guide answers for most asked questions

### 1) Sass vs Less vs plain CSS — what to choose?
- Use plain CSS (+ PostCSS) when your team mainly needs modern native features.
- Use Sass when you need mature module/mixin patterns and existing ecosystem support.
- Use Less mostly for legacy codebases already built around it.
- Decision rule: prefer the simplest tool that keeps styles consistent and easy to review.

### 2) CSS-in-JS vs Sass/Less
- CSS-in-JS is strong for component co-location, typed themes, and dynamic styling from props.
- Sass/Less is strong for static styling with predictable compile-time output.
- Watchouts for CSS-in-JS: runtime overhead, SSR setup complexity, injection order bugs.
- Watchouts for preprocessors: global leakage, over-nesting, and mixin abuse.

### 3) How to answer “Grid or Flexbox?”
- Flexbox: one-dimensional layout (row or column), alignment and distribution.
- Grid: two-dimensional page/section layout, explicit rows + columns.
- In real systems, use both: Grid for macro layout, Flexbox inside components.

### 4) How to avoid specificity wars
- Keep selectors short and component-scoped.
- Avoid IDs and deep descendant chains.
- Prefer composition patterns (utilities, variants, tokens) over `!important`.
- Define a clear layering strategy (base, components, utilities, overrides).

### 5) How to structure scalable CSS
- Start with design tokens and naming conventions.
- Keep component styles near component code (or a mirrored folder structure).
- Add linting/style checks and visual regression tests.
- Document state variants and responsive behavior per component.

### 6) How to talk about CSS performance in interviews
- Reduce unused CSS and avoid shipping large global bundles.
- Inline/extract critical CSS for above-the-fold rendering when needed.
- Minimize expensive selectors and layout thrashing patterns.
- Measure with Lighthouse and browser performance tools, not assumptions.

### 7) How to discuss theming
- Put color/spacing/typography in semantic tokens (`--color-bg-surface`, etc.).
- Toggle themes with a root class or data attribute and CSS variables.
- Keep component code token-driven; avoid hardcoded color values.
- Validate contrast and interaction states for accessibility.

### 8) Senior-level migration answer pattern
- Audit current style sources and identify highest-risk areas first.
- Introduce target architecture gradually (tokens + scoped components).
- Migrate by feature slice, not by random files.
- Protect with visual regression tests and rollout checkpoints.
