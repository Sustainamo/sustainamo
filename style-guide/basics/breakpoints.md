---
layout: styleguide
title: Breakpoints
permalink: /style-guide/basics/breakpoints/
---

# Breakpoints

Our responsive breakpoints—use these to adjust layouts or typography.

```css
:root {
  --bp-sm:  480px;
  --bp-md:  768px;
  --bp-lg: 1024px;
}

@media (min-width: var(--bp-sm)) {
  /* small+ styles */
}

@media (min-width: var(--bp-md)) {
  /* medium+ styles */
}

@media (min-width: var(--bp-lg)) {
  /* large+ styles */
}

**Usage example:**
.card {
  padding: 1rem;
}

@media (min-width: var(--bp-md)) {
  .card {
    display: flex;
    gap: 1.5rem;
  }
}
