# Learning Notes

## Key Concepts I Learned

### 1. Next.js App Router

* Understood how routing is file-based using the `/app` directory
* Learned the difference between `layout.tsx` and `page.tsx`
* Used layouts to share global UI (e.g., Footer)

### 2. Component-Based Architecture

* Built reusable components like `Navbar` and `Footer`
* Used props (e.g., `variant`) to control component behavior
* Followed separation of concerns for better scalability

### 3. Styling with Tailwind CSS

* Applied responsive design using utility classes (`sm:`, `md:`)
* Used Tailwind layers (`@layer base`, `@layer utilities`)
* Implemented a design system using CSS variables + Tailwind v4 `@theme`

### 4. Design Systems & Theming

* Created design tokens (colors, fonts) using CSS variables
* Connected tokens to Tailwind utilities for consistency
* Implemented dark mode using `prefers-color-scheme`

---

## Technical Decisions

### Navbar Variants

* Used a `variant` prop to control positioning:

  * `overlay`: absolute positioning for hero section
  * `default`: normal document flow for other pages
* This keeps the component reusable across different layouts

### Layout Structure

* `layout.tsx` handles global concerns:

  * Fonts (via `next/font/google`)
  * Shared UI (Footer)
* Pages focus only on their own content

### Background Images

* Used inline `backgroundImage` for hero section
* Reason: Tailwind cannot detect dynamic image paths

---

## Challenges & How I Solved Them

### 1. Understanding App Router Structure

**Challenge:** Confusion between `layout.tsx` and `page.tsx`
**Solution:** Learned that:

* `layout.tsx` wraps pages
* `page.tsx` defines route content

---

### 2. Managing Component Positioning

**Challenge:** Navbar needed different behavior on different pages
**Solution:**

* Introduced a `variant` prop
* Used conditional Tailwind classes

---

### 3. Tailwind + CSS Variables Integration

**Challenge:** Custom colors (e.g., `camel`) were not working
**Solution:**

* Used Tailwind v4 `@theme` to expose CSS variables as utilities

---

## Next Steps

### Backend Integration

* Build a FastAPI backend
* Create API endpoints for projects

### Fullstack Features

* Fetch project data dynamically
* Replace hardcoded data with API responses

### UI Improvements

* Add project detail pages (`/projects/[id]`)
* Improve animations and interactions

---

## Key Takeaways

* Writing scalable code requires thinking in components and systems
* Separating design tokens from implementation improves consistency
* Small architectural decisions (like props and layout structure) make a big difference as the project grows
