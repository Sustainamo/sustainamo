
---
layout: styleguide
title: Icons & Imagery
permalink: /style-guide/basics/icons-and-imagery/
---

# Icons & Imagery

How to include, size and optimize SVGs and images for responsiveness.

```html
<!-- Inline SVG icon -->
<svg class="icon icon-search" aria-hidden="true" focusable="false">
  <use xlink:href="/assets/icons.svg#search"></use>
</svg>

<!-- Responsive image -->
<img src="/assets/images/photo.jpg"
     alt="Descriptive alt text"
     class="responsive-img"
     loading="lazy">

/* Icon sizing */
.icon {
  width: 1.5rem;
  height: 1.5rem;
  fill: currentColor;
}

/* Img helper (already in your CSS) */
.responsive-img {
  max-width: 100%;
  height: auto;
}

/* Aspect ratio for video or media cards */
.media-card {
  aspect-ratio: 3 / 2;
}

Lazy-load non-critical images with loading="lazy".

SVG sprites allow single-request icons and styling via currentColor.
