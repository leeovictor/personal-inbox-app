---
description: "Use when building UI with React components. Covers Button and Card components, their variants, sizes, composition patterns, dark-mode styling, and accessibility best practices for this project's design system."
applyTo: "src/**/*.tsx"
name: "Design System Components"
---

# Design System Instructions

This project uses a custom design system with `Button` and `Card` components, built with **Tailwind v4** in a **dark-first theme**. Always compose UI using these components for consistency.

---

## Button Component

### Import
```tsx
import { Button } from '@/components';
```

### Variants
Each variant serves a distinct purpose. Choose based on action prominence:

| Variant | Use Case | Class |
|---------|----------|-------|
| `primary` | Main CTA, high emphasis | `bg-indigo-600 hover:bg-indigo-500` |
| `secondary` | Secondary actions, medium emphasis | `bg-gray-700 hover:bg-gray-600` |
| `ghost` | Low-emphasis actions, inline text | `bg-transparent text-gray-300 hover:bg-gray-700/50` |
| `outline` | Alternative to ghost, bordered | `border border-gray-600 bg-transparent hover:bg-gray-700/50` |
| `destructive` | Delete/remove actions, warning | `bg-red-600 hover:bg-red-500` |

### Sizes
```tsx
<Button variant="primary" size="sm">Small</Button>      {/* px-3 py-1.5 text-xs */}
<Button variant="primary" size="md">Medium</Button>    {/* px-4 py-2 text-sm (default) */}
<Button variant="primary" size="lg">Large</Button>     {/* px-5 py-2.5 text-base */}
```

### Props & State
```tsx
// Native HTML attributes are forwarded
<Button
  variant="primary"
  size="md"
  disabled={isLoading}
  onClick={handleSubmit}
  className="custom-class"  // Appends to base classes
>
  Submit
</Button>

// Disabled state (all variants)
<Button disabled>Disabled Action</Button>  {/* opacity-50, pointer-events-none */}
```

### Common Patterns

**Button Group (horizontal actions)**
```tsx
<div className="flex items-center gap-3">
  <Button variant="primary" size="sm">Save</Button>
  <Button variant="ghost" size="sm">Cancel</Button>
</div>
```

**Icon + Text**
```tsx
<Button variant="primary">
  <svg className="w-4 h-4" {...} />
  Create New
</Button>
```

**Full-width Button**
```tsx
<Button className="w-full">Submit Form</Button>
```

---

## Card Component

### Import
```tsx
import { Card } from '@/components';
```

### Structure
Card is a wrapper with composable sub-components: `Header`, `Content`, `Footer`. Each section is optional.

### Basic Usage

**Minimal Card**
```tsx
<Card>
  <Card.Content>
    Content goes here
  </Card.Content>
</Card>
```

**Full Structure**
```tsx
<Card>
  <Card.Header
    title="Card Title"
    description="Optional subtitle or description"
  />
  <Card.Content>
    Main content area
  </Card.Content>
  <Card.Footer>
    Footer actions or info
  </Card.Footer>
</Card>
```

### Header Props
```tsx
<Card.Header
  title="Heading"              // Optional h3 text-base font-semibold
  description="Subheading"    // Optional p text-sm text-gray-400
  className="custom-class"    // Override/extend base styles
>
  {/* Or use children instead of title/description */}
  Custom header content
</Card.Header>
```

### Sub-component Styles
- **Header**: `px-6 py-5 border-b border-gray-700`
- **Content**: `px-6 py-5 space-y-4` (default gap between children)
- **Footer**: `px-6 py-4 border-t border-gray-700 flex items-center gap-3`

All sub-components accept `className` to append custom Tailwind classes.

### Common Patterns

**Card with Actions**
```tsx
<Card>
  <Card.Header title="Confirm Action" />
  <Card.Content>
    <p className="text-gray-300">Are you sure?</p>
  </Card.Content>
  <Card.Footer>
    <Button variant="destructive" size="sm">Delete</Button>
    <Button variant="ghost" size="sm">Cancel</Button>
  </Card.Footer>
</Card>
```

**Card Grid (responsive)**
```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  <Card>
    <Card.Header title="Card 1" />
    <Card.Content>...</Card.Content>
  </Card>
  {/* more cards */}
</div>
```

**Card with Form**
```tsx
<Card>
  <Card.Header title="Edit Profile" />
  <Card.Content>
    <form className="space-y-4">
      <input className="..." />
      {/* form fields */}
    </form>
  </Card.Content>
  <Card.Footer>
    <Button variant="primary" size="sm">Save</Button>
  </Card.Footer>
</Card>
```

---

## Styling Conventions

### Dark-First Theme
The app uses a **dark color scheme** (no light mode). Never use light backgrounds or text unless explicitly needed.

| Element | Color | Tailwind |
|---------|-------|----------|
| Page background | Dark gray | `bg-gray-900` |
| Card background | Card gray | `bg-gray-800` |
| Primary text | White | `text-white` |
| Secondary text | Light gray | `text-gray-300` or `text-gray-400` |
| Borders | Dark gray | `border-gray-700` |

### Spacing & Layout
```tsx
// Use Tailwind spacing scale (px, not rem)
<div className="space-y-4 px-6 py-5">     {/* consistent padding */}
  <p>Content</p>
</div>

// Responsive padding (mobile-first)
<div className="px-4 sm:px-6 lg:px-8">   {/* scales on breakpoints */}
  Content
</div>

// Width constraints
<div className="max-w-md">               {/* card-sized containers */}
  Content
</div>
```

### Focus States
All interactive elements (buttons, inputs, links) **must** have visible focus indicators for keyboard navigation:

```tsx
<Button className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
  Action
</Button>

<input className="focus-visible:ring-1 focus-visible:ring-indigo-500" />
```

---

## Accessibility & State

### Disabled State
- Use the `disabled` attribute on Button to show reduced opacity and disable pointer events.
- Always provide feedback when action is unavailable.

```tsx
<Button disabled>Loading...</Button>
```

### Semantic HTML
- Use `<button type="button">` for actions (Button component handles this).
- Use `<a>` for navigation—don't use a Button styled as a link.
- Use `<form>` wrapping Buttons for form submission.

### Color Contrast
- All text meets WCAG AA contrast ratios on dark backgrounds.
- Never rely on color alone to convey meaning (use icons + text).

---

## Composition Checklist

When building a new screen or component, ensure:

- [ ] **Import**: `import { Button, Card } from '@/components'`
- [ ] **Layout**: Use Card for grouped content, Button for actions
- [ ] **Variants**: Primary for CTA, secondary/ghost for alternatives
- [ ] **Spacing**: `space-y-4` or `gap-3` for consistent vertical/horizontal rhythm
- [ ] **Dark theme**: No light colors unless justified (use Figma or design spec)
- [ ] **Focus**: Interactive elements have visible focus states
- [ ] **Disabled**: Buttons show proper disabled appearance
- [ ] **Responsive**: Use `sm:`, `md:`, `lg:` breakpoints for mobile-first design

