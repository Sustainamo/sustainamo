---
layout: styleguide
title: Core Wrappers & Content Width
permalink: /style-guide/basics/wrappers/
---

# Core Wrappers & Content Width

The `.wrapper` class defines the main content container. It keeps content centered and prevents it from becoming too wide on large screens, while adding horizontal padding on smaller devices.

---

## Example

<div class="wrapper" style="background: #f7f7f7; border: 1px dashed #ccc; padding: 1rem; text-align: center;">
  This is a <code>.wrapper</code> container.  
  Content stays centered and never exceeds the max width.
</div>

---

## Usage

```html
<div class="wrapper">
  <!-- page content here -->
</div>
```

---

## CSS

```css
.wrapper {
  max-width: 1100px;
  margin: 0 auto;       /* center horizontally */
  padding: 0 1.5rem;    /* gutter space on mobile */
}
```

---

## Key Points

- **Max width:** Prevents content from stretching too wide for readability.
- **Centered:** Uses `margin: 0 auto` to center on the page.
- **Responsive padding:** Adds horizontal space on small screens.
- **Reusable:** Use `.wrapper` on any block that should be centered and constrained.

---

## Accessibility

- Ensures content is not too wide, improving readability for all users.