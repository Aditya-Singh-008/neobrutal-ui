---
description: "Project-specific instructions for NeoBrutal UI development."
applyTo: "**"
---

## Quick summary

This repo is a Next.js (app router) TypeScript site that also contains a small CLI and a registry generator. Focus areas for code edits:

- The web UI lives in the `app/` directory (Next 16 app-router) and the presentational components live under `components/` and `components/ui`.
- Reusable primitives and helpers live in `lib/` (example: `lib/utils.ts` exports `cn` that wraps `clsx` + `tailwind-merge`).
- Component registry JSON files are generated into `public/r/` by `scripts/build-registry.ts` using `registry.json` as the source.
- A small command-line tool is in `packages/cli/` (see `packages/cli/src`) used via `npx neobrutal-ui`.

## Architecture notes & why things are organized this way

- Next.js app-router (`app/`) is used for documentation pages under `app/docs` and site pages at top-level `app/page.tsx`.
- Presentational UI components are implemented under `components/` and consumed by docs pages. `components/docs/component-preview.tsx` and `components/docs/code-block.tsx` show the pattern for rendering examples + source.
- There's a separate `packages/cli` package so the repository can produce a tiny, installable CLI that reads the registry (`public/r/*.json`) to scaffold components into other projects.
- `scripts/build-registry.ts` reads `registry.json` (root) and produces a machine-friendly registry in `public/r/` — editing `registry.json` is how new items are added to the published registry output.

## Integration points & external dependencies

- Major frontend deps: `next` (v16 app router), `react` 19, `tailwindcss`, `@base-ui/react` primitives.
- Registry schema follows the output expected by the CLI and public JSON under `public/r/` (see `scripts/build-registry.ts` for exact shape).
- The `cn` utility wraps `clsx` + `tailwind-merge` to resolve class conflicts — prefer it over manual string concatenation.
- **No Config File:** Do NOT look for or create `tailwind.config.ts` or `tailwind.config.js`.

### Neobrutalism — Definition & Best Practices

Neobrutalism is an evolution of brutalist visual design that keeps raw, blocky, and unpolished aesthetics but balances them with order, nostalgia, and usability. 

- Key characteristics:
  - High-contrast, saturated colors (limit to 2–3 primary accents).
  - Thick strokes and geometric shapes; borders should read as structure, not decoration.
  - Hard, single-color shadows (e.g., `box-shadow: 4px 4px 0 rgba(0,0,0,1)`).
  - Large, bold headline typography paired with neutral body fonts for readability.

- Practical rules (do):
  - Keep palette small: pick 2–3 bold colors plus black/white for contrast.
  - Prioritize readable contrast ratios for all text and UI elements (check with a contrast tool).
  - Use whitespace (24–32px) to offset heavy borders and dense shapes.
  - Maintain clear hierarchy: size, weight, and color should indicate importance.
  - Provide clear interaction affordances: distinct hover/active states, immediate toggle effects, and visible focus via `.focus-brutal`.
  - Use bold shadows and borders as structural cues — not as the only signal for state (also change color/position where appropriate).

- Practical rules (don't):
  - Don’t overload interfaces with too many bright colors or competing accents.
  - Don’t use neobrutalism for dense, data-heavy dashboards or critical enterprise UIs without strong usability testing.
  - Don’t rely on raw aesthetics at the expense of accessibility (contrast, hit targets, keyboard access).

## Code Style and Structure

- Write concise, technical TypeScript code with accurate examples.
- Use functional and declarative programming patterns; avoid classes.
- Prefer iteration and modularization over code duplication.
- Use descriptive variable names with auxiliary verbs (e.g., isLoading, hasError).
- Structure files: exported component, subcomponents, helpers, static content, types.
- Use console.log({ value }) instead of console.log(value)
- Use onCallback instead of handleCallback
- Use flex and gap instead of space-x-n and space-y-n
- Use cn to compose class names
- Just pass ref directly to the component because of react 19
- Use lowercase with dashes for directories (e.g., components/auth-wizard).
- Favor named exports for components.
- Use TypeScript for all code; prefer interfaces over types.
- Avoid enums; use maps instead.
- Use functional components with TypeScript interfaces.
- Use the "function" keyword for pure functions.
- Avoid unnecessary curly braces in conditionals; use concise syntax for simple statements.
- Use declarative JSX.

## Performance Optimization

- Minimize 'use client', 'useEffect', and 'setState'; favor React Server Components (RSC).
- Wrap client components in Suspense with fallback.
- Use dynamic loading for non-critical components.
- Animate cheap properties: Only animate transform and opacity where possible (composite-only).
- Hardware acceleration: Use will-change: transform (sparingly) or translateZ(0) only where necessary — test memory/VRAM impact.
- Prefer CSS/WAAPI for heavy scenes: Offload animations to GPU via CSS or Web Animations API instead of JS frame loops when main thread may be busy.
- Test low-end devices: Validate animations on target low-end hardware; measure frame drops.
- Limit will-change: Apply it only for the duration of the animation to avoid long-term memory pressure.
- Follow Next.js docs for Data Fetching, Rendering, and Routing.

## Always

- Write clean, modern, and self-explanatory code.
- Use descriptive, meaningful names for variables, functions, and components.
- Follow up-to-date best practices for each language or framework (e.g., ES modules over CommonJS, async/await over callbacks, PEP8 formatting in Python).
- Outline your plan or reasoning steps **before** writing code.
- Provide concise explanations when multiple valid solutions exist, noting which is preferred and why.
Natural Motion: Use springs or easing that mimic real-world acceleration/deceleration so elements feel organic (not instantaneous).
Purposeful: Animate to clarify change or add information — don’t animate just to decorate.
Fast & Snappy: Keep UI animations short and responsive (generally <300ms; interaction responses often 100–200ms).
Interruptible: Allow animations to be interrupted and smoothly transition to new states.
Performant: Prefer transform and opacity; avoid animating layout-triggering properties (width/height/margin).
Respect Preferences: Honor prefers-reduced-motion and provide reduced/disabled alternatives.
Cohesive: Match easing, timing, and style to the overall product tone so motion feels intentional.
Easing: Default to ease-out for most UI entry animations; use ease or custom cubic-beziers for nuanced feel. Prefer custom curves for stronger personality.
Springs: Use spring-based motion for natural, lively interactions (e.g., small drags, micro-interactions).
No scale(0): Avoid animating from scale(0); use a higher initial scale (e.g., 0.9–0.95) for more natural emergence.
Action-driven motion: Differentiate enter vs leave (enter snappy, exit slightly slower or quicker depending on context).
Frequency guardrails: Don’t animate actions users do many times (keyboard actions, repetitive clicks) — these should be instant.
Tooltip behavior: Add initial delay for first tooltip, then open subsequent tooltips instantly (use a data-instant flag).
Delay for stability: Use small transition-delays to prevent accidental closures (menus/dropdowns) and to avoid doom-flicker.
Separate trigger & effect: Keep the interactive hit target stationary; animate a child element for visual motion to avoid hover flicker.
- Consider performance, security, and accessibility implications when relevant.
- Write code that is directly related to the task at hand.
- Follow the project's established coding style and conventions.
- Ensure code is well-tested and handles edge cases when relevant.
- Keep functions and components focused on a single responsibility.
- Refactor repetitive or redundant code into reusable functions or components.
- Validate inputs and handle errors gracefully.
- Document complex logic or decisions that are not immediately obvious.
- Write modular code that is easy to maintain and extend.
- Use version control best practices, including clear commit messages and branching strategies.
- Stay updated with the latest developments in the languages and frameworks you are using.
- Prioritize user experience and usability in your code design.
- Visible focus rings (`:focus-visible`; group with `:focus-within`)
- Hit target ≥24px (mobile ≥44px). If visual <24px, expand hit area
- `touch-action: manipulation` to prevent double-tap zoom; 
- set `-webkit-tap-highlight-color` to match design
- Clicking the input label focuses the input field
- Inputs are wrapped in a `<form>` to allow Enter submission
- Inputs use appropriate `type` (password, email, etc.)
- Use HTML form validation (`required`, etc.)
- Input prefix/suffix icons are absolutely positioned and trigger input focus
- Hydration-safe inputs (no lost focus/value)
- Loading buttons show spinner and keep original label
- Enter submits focused text input; in `<textarea>`, ⌘/Ctrl+Enter submits, Enter adds newline
- Keep submit enabled until request starts; then disable, show spinner, use idempotency key
- Don’t block typing; accept free text and validate after
- Allow submitting incomplete forms to surface validation
- Errors inline next to fields; on submit, focus first error
- `autocomplete` + meaningful `name`; correct `type` and `inputmode`
- Warn on unsaved changes before navigation
- Compatible with password managers & 2FA; allow pasting one-time codes
- Trim values to handle trailing spaces
- No dead zones on checkboxes/radios; label+control share one generous hit target
- URL reflects state (deep-link filters/tabs/pagination/expanded panels)
- Back/Forward restores scroll
- Links are links—use `<a>/<Link>` for navigation (support Cmd/Ctrl/middle-click)
- Confirm destructive actions or provide Undo window
- Use polite `aria-live` for toasts/inline validation
- Design forgiving interactions (generous targets, clear affordances; avoid finickiness)
- Delay first tooltip in a group; subsequent peers no delay
- Intentional `overscroll-behavior: contain` in modals/drawers
- During drag, disable text selection and set `inert` on dragged element/containers
- No “dead-looking” interactive zones—if it looks clickable, it is
- Use `-webkit-font-smoothing: antialiased` and `text-rendering: optimizeLegibility` for legibility
- Use tabular figures (`font-variant-numeric: tabular-nums`) for tables, timers, etc.
- Prevent text resizing unexpectedly in landscape mode on iOS with `-webkit-text-size-adjust: 100%`
- Honor `prefers-reduced-motion` (provide reduced variant)
- Animate compositor-friendly props (`transform`, `opacity`); avoid layout/repaint props (`top/left/width/height`)
- Animation duration ≤200ms for interactions to feel immediate
- Animations are interruptible and input-driven (avoid autoplay)
- Correct `transform-origin` (motion starts where it “physically” should)
- Switching themes should not trigger transitions/animations on elements
- Measure reliably (disable extensions that skew runtime)
- Track and minimize re-renders (React DevTools/React Scan)
- Profile with CPU/network throttling
- Batch layout reads/writes; avoid unnecessary reflows/repaints
- Mutations (`POST/PATCH/DELETE`) target <500 ms
- Virtualize large lists
- Preload only above-the-fold images; lazy-load the rest
- Prevent CLS from images (explicit dimensions or reserved space)
- Detect and adapt to hardware/network capabilities
- Pause or unmount off-screen videos
- Disabled buttons do not have tooltips (not accessible)
- Use box-shadow for focus rings, not outline (outline may not respect border radius)
- Focusable elements in a list are navigable with ↑ ↓ and deletable with ⌘ Backspace
- Dropdown menus open on mousedown, not click
- Use SVG favicon with system theme support
- Icon-only interactive elements have explicit `aria-label`
- Tooltips triggered by hover do not contain interactive content
- Redundant status cues (not color-only); icons have text labels
- Prefer native semantics (`button`, `a`, `label`, `table`) before ARIA
- Accurate names (`aria-label`), decorative elements `aria-hidden`, verify in the Accessibility Tree
- Icon-only buttons have descriptive `aria-label`
- Use `scroll-margin-top` on headings for anchored links; include a “Skip to content” link; hierarchical `<h1–h6>`
- Resilient to user-generated content (short/avg/very long)
- Locale-aware dates/times/numbers/currency
- Accessible charts (color-blind-friendly palettes)
- Meet contrast—prefer [APCA](https://apcacontrast.com/) over WCAG 2
- Increase contrast on `:hover/:active/:focus`
- Disable spellcheck and autocomplete unless needed
- Placeholders end with ellipsis and show example pattern (e.g., `+1 (123) 456-7890`, `sk-012345…`)
- Optimistic UI; reconcile on response; on failure show error and rollback or offer Undo
- Ellipsis (`…`) for options that open follow-ups (e.g., "Rename…") and loading states (e.g., "Loading…")
- Autofocus on desktop when there’s a single primary input; rarely on mobile (to avoid layout shift)
- Subset fonts based on content/language
- Medium headings use font weight 500–600
- Use CSS `clamp()` for fluid font sizes
- Animate only to clarify cause/effect or add delight
- Prefer CSS > Web Animations API > JS libraries
- Looping animations pause when not visible
- Prefer uncontrolled inputs; make controlled loops cheap (keystroke cost)
- Enable GPU rendering (`transform: translateZ(0)`) sparingly
- Toggle `will-change` only for the duration of unperformant scroll/animations
- Manipulate DOM directly for real-time values when needed (e.g., wheel events)
- Layered shadows (ambient + direct)
- Crisp edges via semi-transparent borders + shadows
- Nested radii: child ≤ parent; concentric
- Hue consistency: tint borders/shadows/text toward bg hue
- Match browser UI to bg
- Avoid gradient banding (use masks when needed)

## Never

- Use outdated syntax, deprecated APIs, or legacy patterns.
- Skip the reasoning or explanation step before providing an answer.
- Over-engineer or add unnecessary abstraction.
- Assume intent — clarify when context is unclear.
- Produce repetitive or filler text.
- Ignore performance, security, or accessibility implications if relevant.
- Add comments that restate what the code already makes clear.
- Use hard-coded values when a variable or constant would be more appropriate.
- Write code that is not directly related to the task at hand.
- Use emojis in code or comments.

## Commenting Guidelines

Good code explains itself. Comments should only be used when necessary.  
Copilot should avoid writing comments unless they provide context that the code cannot convey on its own.

**Use comments when:**

- The logic is not immediately obvious or requires background context.
  **Avoid comments when:**

- The line is self-explanatory (e.g., `total = price * quantity;`).
  **Example:**

```js
// BAD: Obvious comment
let count = 0; // set count to zero

// GOOD: Context comment
// Retry up to three times because the API occasionally times out
for (let i = 0; i < 3; i++) {
  const result = await fetchData();
  if (result.ok) break;
}
```