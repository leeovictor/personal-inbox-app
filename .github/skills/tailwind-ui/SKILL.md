---
name: tailwind-ui
description: 'Build UI components with Tailwind CSS. Use when: styling React/JSX components; converting CSS to Tailwind classes; creating cards, buttons, forms, navbars, layouts; adding dark mode or responsive design; setting up Tailwind in a project; extending the Tailwind theme with custom colors or utilities; generating component templates.'
argument-hint: 'Component or UI task to build (e.g. "card with dark mode", "responsive navbar", "form inputs")'
---

# Tailwind UI Builder

## When to Use
- Converting existing CSS to Tailwind utility classes
- Building new UI components (buttons, cards, forms, navbars, modals)
- Adding responsive breakpoints or dark mode to components
- Setting up or extending Tailwind configuration
- Generating consistent, reusable component patterns

---

## Setup

### Install Tailwind (React/Vite)

```bash
npm install -D tailwindcss autoprefixer postcss
npx tailwindcss init -p
```

**`tailwind.config.js`**
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',          // or 'media'
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**`src/index.css`** (import in `main.tsx`/`main.jsx`)
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## Core Conventions

### Modifier Prefix System
Apply any utility conditionally using a prefix:

| Prefix | Trigger |
|--------|---------|
| `hover:` | Mouse hover |
| `focus:` / `focus-visible:` | Focus / keyboard focus |
| `disabled:` | Disabled state |
| `sm:` | ≥640px |
| `md:` | ≥768px |
| `lg:` | ≥1024px |
| `xl:` | ≥1280px |
| `dark:` | Dark mode active |

**Example:** `hover:bg-blue-700 dark:bg-gray-800 sm:px-6`

### Arbitrary Values
When a value isn't in Tailwind's scale, use bracket notation:
- `w-[420px]`, `top-[117px]`, `bg-[#1da1f2]`, `min-h-[80px]`

---

## Layout Patterns

### Flexbox
```html
<div class="flex items-center justify-between gap-4">
  <div class="flex-1">...</div>
  <div class="shrink-0">...</div>
</div>
```

### Grid
```html
<!-- 3-col responsive grid -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  ...
</div>
```

### Container
```html
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  ...
</div>
```

---

## Component Templates

### Button
```html
<button class="inline-flex items-center justify-center rounded-md text-sm font-medium
  transition-colors
  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
  disabled:pointer-events-none disabled:opacity-50
  bg-blue-600 text-white shadow hover:bg-blue-700
  px-4 py-2
  dark:bg-blue-600 dark:hover:bg-blue-700
  sm:px-6 sm:py-3 sm:text-base">
  Click me
</button>
```

### Card
```html
<div class="rounded-lg border bg-white shadow-sm p-6
  border-gray-100
  dark:bg-gray-800 dark:border-gray-700
  sm:p-8">
  <div class="flex flex-col space-y-1.5 pb-6">
    <h3 class="text-2xl font-semibold leading-none tracking-tight">Title</h3>
    <p class="text-sm text-gray-500 dark:text-gray-400">Description</p>
  </div>
  <div class="space-y-4"><!-- content --></div>
  <div class="flex items-center pt-6">
    <button class="inline-flex items-center justify-center rounded-md text-sm font-medium
      bg-blue-600 text-white hover:bg-blue-700 px-4 py-2">
      Action
    </button>
  </div>
</div>
```

### Form Input
```html
<div class="space-y-2">
  <label for="field" class="text-sm font-medium leading-none
    peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
    Label
  </label>
  <input
    id="field" type="text" placeholder="Placeholder"
    class="flex h-9 w-full rounded-md border px-3 py-1 text-sm shadow-sm
      transition-colors
      placeholder:text-gray-400
      focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500
      disabled:cursor-not-allowed disabled:opacity-50
      border-gray-200 bg-transparent
      dark:border-gray-600 dark:bg-gray-700"
  />
</div>
```

### Navbar
```html
<nav class="border-b border-gray-100 bg-white/75 backdrop-blur
  dark:bg-gray-900/75 dark:border-gray-800">
  <div class="flex h-14 items-center px-4 sm:px-6 lg:px-8">
    <a href="/" class="mr-6 flex items-center space-x-2 font-bold text-xl">Logo</a>
    <div class="hidden md:flex items-center space-x-6 text-sm font-medium">
      <a href="/" class="transition-colors hover:text-gray-900 text-gray-500
        dark:hover:text-white dark:text-gray-400">Home</a>
    </div>
    <div class="flex flex-1 items-center justify-end">
      <button class="inline-flex items-center justify-center rounded-md text-sm font-medium
        bg-blue-600 text-white hover:bg-blue-700 px-4 py-2">
        Get Started
      </button>
    </div>
  </div>
</nav>
```

---

## Typography Scale

| Class | Size | Use |
|-------|------|-----|
| `text-xs` | 12px | Captions, labels |
| `text-sm` | 14px | Body small, UI text |
| `text-base` | 16px | Default body |
| `text-lg` | 18px | Lead text |
| `text-xl` – `text-3xl` | 20–30px | Headings (h3–h1) |
| `text-4xl` + | 36px+ | Display / hero |

Combine with: `font-medium`, `font-semibold`, `font-bold`, `leading-tight`, `tracking-tight`

---

## Color System

Tailwind's palette follows a `{color}-{shade}` pattern (`50`–`950`):

```
text-gray-900    bg-gray-50     border-gray-200
text-blue-600    bg-blue-500    hover:bg-blue-700
text-red-500     bg-red-50      border-red-200
```

### Custom Color Palette (extend theme)
```js
// tailwind.config.js
theme: {
  extend: {
    colors: {
      brand: {
        50:  '#6bebff',
        100: '#65e0ff',
        500: '#3b82f6',   // base
        600: '#326dcf',
        700: '#2858a7',
        900: '#152f59',
      }
    }
  }
}
```
Use as: `bg-brand-500`, `text-brand-700`, `hover:bg-brand-600`

---

## Dark Mode

Enable via `darkMode: 'class'` in config; toggle by adding/removing `dark` on `<html>`.

Pattern: pair each light utility with `dark:` variant:
```html
<div class="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
  <p class="text-gray-600 dark:text-gray-400">Secondary text</p>
</div>
```

---

## CSS-to-Tailwind Conversion Procedure

1. Read the existing CSS to identify properties and values
2. Map each property to the closest Tailwind utility (see [Tailwind docs](https://tailwindcss.com/docs))
3. For values outside the default scale, use arbitrary values: `w-[420px]`, `bg-[#hex]`
4. Replace pseudo-classes (`:hover`, `:focus`) with prefixed variants
5. Replace media queries with responsive prefixes (`sm:`, `md:`, `lg:`)
6. For repeated patterns, consider `@apply` inside a CSS class or extract a component

### Common Mappings
| CSS | Tailwind |
|-----|---------|
| `display: flex` | `flex` |
| `flex-direction: column` | `flex-col` |
| `gap: 1rem` | `gap-4` |
| `padding: 1.5rem` | `p-6` |
| `border-radius: 0.5rem` | `rounded-lg` |
| `box-shadow: 0 4px 6px ...` | `shadow-md` |
| `transition: all 0.2s` | `transition-all duration-200` |
| `cursor: pointer` | `cursor-pointer` |
| `max-width: 80rem` | `max-w-7xl` |
| `margin: auto` | `mx-auto` |
| `grid-template-columns: repeat(3,1fr)` | `grid-cols-3` |

---

## Spacing Scale Reference

Tailwind uses a `4px` base unit. `p-1` = 4px, `p-4` = 16px, `p-6` = 24px, `p-8` = 32px.

| Value | px |
|-------|----|
| `1` | 4px |
| `2` | 8px |
| `3` | 12px |
| `4` | 16px |
| `6` | 24px |
| `8` | 32px |
| `10` | 40px |
| `12` | 48px |
| `16` | 64px |

---

## Quality Checklist

Before finalising a component:
- [ ] Mobile-first: base styles are for small screens, `sm:`/`md:`/`lg:` override upward
- [ ] Dark mode: every `bg-*`, `text-*`, `border-*` has a `dark:` counterpart
- [ ] Focus states: interactive elements have `focus-visible:ring-*` or `focus:outline-*`
- [ ] Disabled states: buttons/inputs include `disabled:opacity-50 disabled:pointer-events-none`
- [ ] Semantic HTML: correct tags (`button`, `nav`, `label[for]`, `input[id]`)
- [ ] No inline styles: all styling via utility classes or `tailwind.config.js`
