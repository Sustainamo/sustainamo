---
layout: styleguide
title: Navigation
permalink: /style-guide/basics/navigation/
---

# Navigation

This section covers two key navigation patterns: **breadcrumbs** (for showing page hierarchy) and **content navigation** (for previous/next links within a section).

## Breadcrumbs

Breadcrumbs help users understand their location within the site structure and provide quick navigation to parent pages.

### Example

<nav class="breadcrumbs" aria-label="Breadcrumb">
  <a href="/">Home</a>
  <span class="breadcrumb-separator">/</span>
  <a href="/style-guide/">Style Guide</a>
  <span class="breadcrumb-separator">/</span>
  <span aria-current="page">Navigation</span>
</nav>

### Usage

```html
<nav class="breadcrumbs" aria-label="Breadcrumb">
  <a href="/">Home</a>
  <span class="breadcrumb-separator">/</span>
  <a href="/style-guide/">Style Guide</a>
  <span class="breadcrumb-separator">/</span>
  <span aria-current="page">Navigation</span>
</nav>
```

- Use `<span aria-current="page">` for the current page.
- Use `.breadcrumb-separator` for visual separators (e.g., `/` or `>`).

---

## Content Navigation (Prev/Next)

Content navigation helps users move between related pages, such as sections of a guide.

### Example

<nav class="content_navi">
  <a class="content_navi-item nav_prev" href="/style-guide/basics/wrappers/">
    <span class="content_navi-arrow" aria-hidden="true">←</span>
    <span class="content_navi-label">Previous: Wrappers</span>
  </a>
  <a class="content_navi-item nav_next" href="/style-guide/basics/typography/">
    <span class="content_navi-label">Next: Typography</span>
    <span class="content_navi-arrow" aria-hidden="true">→</span>
  </a>
</nav>

### Usage

```html
<nav class="content_navi">
  <a class="content_navi-item nav_prev" href="/style-guide/basics/wrappers/">
    <span class="content_navi-arrow" aria-hidden="true">←</span>
    <span class="content_navi-label">Previous: Wrappers</span>
  </a>
  <a class="content_navi-item nav_next" href="/style-guide/basics/typography/">
    <span class="content_navi-label">Next: Typography</span>
    <span class="content_navi-arrow" aria-hidden="true">→</span>
  </a>
</nav>
```

- Use `.nav_prev` and `.nav_next` for previous/next links.
- Use `.content_navi-label` for the link text.
- Use `.content_navi-arrow` for directional arrows.

---

## Accessibility Notes

- Use `aria-label="Breadcrumb"` for breadcrumbs navigation.
- Use clear, descriptive link text for previous/next navigation.
- Ensure keyboard and screen reader users can easily navigate.

---

## Customisation

- Change separator character in `.breadcrumb-separator` as needed.
- Style `.content_navi` for horizontal or vertical layouts.
