# Learning Log

Quick-reference notes I can come back to when I forget how/why something works

---

## Next.js App Router

**What it is:** File-based routing — folder structure under `/app` = a site's URL structure

**Key rules:**
- `page.tsx` = the actual content for a route
- `layout.tsx` = wraps pages, holds shared UI (fonts, Footer, Navbar) that persists across page changes
- A folder like `app/about/` → becomes the `/about` route automatically

**Note:** layout = shell, page = content inside the shell

---

## Dynamic Routes — `[slug]`

**What it is:** A folder named with square brackets (e.g. `app/projects/[slug]/page.tsx`) matches *any* URL segment in that position, instead of one fixed route

**Why I used it:** Instead of building 4 separate files for 4 projects, one `[slug]` page handles all of them

**How it works:**
```tsx
type ProjectPageProps = {
  params: { slug: string };
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound(); // shows Next's built-in 404
  // ...render project
}
```
Visiting `/projects/morph` → `params.slug` = `"morph"` → looked up in my `projects` array

**Note:** The data (`projects` array) needs a `slug` field per item that matches the URL segment exactly, I moved this into `src/data/projects.ts` as one shared source instead of duplicating it in the grid page and the detail page

---

## Data-Driven Components (the `.map()` pattern)

**What it is:** Storing repeated content as an array of objects, then using `.map()` to render one element per item, instead of hand-writing each one

**Used in:** `Navbar` (`navLinks`), `Board` (`notes`), `Projects` grid (`projects`), `Footer` (`socialLinks`)

**Core shape:**
```tsx
{items.map((item) => (
  <div key={item.id}>{item.label}</div>
))}
```

**Why `key` matters:** React needs a unique identifier per item to track which DOM element belongs to which array entry across re-renders, using something guaranteed-unique (like `slug` or `href`) is safer than `title`, in case two items ever share a name

**Note:** `.map()`'s arrow function must `return` one single JSX element, if it needs multiple things (image + text), wrap them in one parent `<div>`, not two siblings

---

## Component Reusability via Props

**What it is:** One component, multiple behaviors, controlled by a prop

**Example — `Navbar`'s `variant` and `layout` props:**
```tsx
type NavbarProps = {
  variant?: "overlay" | "default"; // controls positioning
  layout?: "centered" | "split";   // controls title+links arrangement
};
```
- `variant="overlay"` → absolute positioned, sits on top of the hero image
- `variant="default"` → normal document flow
- `layout="split"` → title left, links right (About page)
- `layout="centered"` → links only, centered (Home page)

**Why:** Avoids building a separate `Navbar` component per page — one component adapts

---

## Tailwind CSS + Custom Design Tokens (v4)

**What it is:** CSS variables in `:root`, exposed to Tailwind via `@theme` so they become usable utility classes

```css
:root {
  --powder-blue: #87accc;
}

@theme {
  --color-powder-blue: var(--powder-blue);
}
```
Now `bg-powder-blue`, `text-powder-blue`, `hover:text-powder-blue` all work as Tailwind utilities

**Note:** If I use a class like `bg-mist-100` but never defined `--mist-100` in `:root` *and* `@theme`, the class silently does nothing — no error, just no style

**Custom utility classes** (`@layer utilities`) — for patterns I reuse a lot, e.g.:
```css
.font-dm-mono {
  font-family: var(--font-dm-mono);
}
```

---

## Fonts via `next/font/google`

**What it is:** Next.js self-hosts Google Fonts at build time (better performance, no external request at runtime) and exposes them as CSS variables

```tsx
const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});
```

**Static vs. variable weight:**
- Static (`weight: ["300", "400", "500"]`) → only those exact weights are loaded; `font-bold`/`font-semibold` will fake-bold if not included
- Variable (`weight: "variable"`) → the whole weight range is available in one file; any Tailwind weight utility works

**Note:** `font-medium` only renders correctly if the weight (500) was actually loaded for that font

---

## Framer Motion — Draggable Elements

**What it is:** The `motion.div` component with a `drag` prop makes any element draggable with physics-based interaction, no custom mouse-event code needed

**Used in:** `Board.tsx`, for the scattered sticky notes

```tsx
<motion.div
  drag
  dragMomentum={false}
  dragElastic={0.15}
  whileDrag={{ scale: 1.08, zIndex: 50 }}
  initial={{ rotate: note.rotate }}
>
```

- `dragMomentum={false}` — feels more like picking up a physical object
- `dragElastic` — how much resistance/bounce there is at drag boundaries
- `whileDrag` — temporary style changes only while actively dragging (bumped z-index so the active note renders above others)

---

## Framer Motion — Mouse-Follow Effects

**What it is:** `useMotionValue` + `useSpring` track raw mouse position, then smooth it into an eased "catch-up" motion instead of an instant 1:1 follow

**Used in:** `SparkleCursor.tsx`

```tsx
const cursorX = useMotionValue(0);
const trailX = useSpring(cursorX, { damping: 25, stiffness: 200, mass: 0.5 });
```

**Spawning + cleanup pattern:** each sparkle is added to state on `mousemove`, then removed via `setTimeout` after its animation finishes — avoids memory buildup from infinite un-removed elements

**Opt-out zones:** used `element.closest("[data-no-sparkle]")` inside the mousemove handler to skip spawning sparkles over specific elements (like the draggable notes board), so competing interactions don't clash

---

## Reusable Link Hover Animation (text-slide)

**What it is:** A two-copy-stacked-text trick — hovering slides a duplicate label into view, replacing the original

```tsx
<a className="group relative block h-[1.4em] overflow-hidden">
  <span className="flex flex-col leading-none transition-transform duration-300 group-hover:-translate-y-1/2">
    <span>{label}</span>
    <span aria-hidden="true">{label}</span>
  </span>
</a>
```

**Key pieces:**
- `overflow-hidden` + fixed height clips to one line
- `group` on the wrapper + `group-hover` on the inner span ties the hover state together
- Two duplicate `<span>` labels stacked — hover translates the stack up by 50%, revealing the second copy
- `aria-hidden="true"` on the duplicate so screen readers don't read the label twice

**Note:** `group` has to be on the *direct* hoverable ancestor — if it's on the wrong element, `group-hover` silently does nothing

---

## Key Takeaways

- Thinking in reusable components + data-driven patterns (`.map()`, shared data files) scales much better than hardcoding
- Centralizing design tokens (colors, fonts) in one place keeps consistency and makes site-wide changes fast
- Small architecture decisions (props like `variant`, folder structure like `[slug]`) pay off as the project grows