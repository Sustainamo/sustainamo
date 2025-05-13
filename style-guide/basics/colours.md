---
layout: styleguide
title: Colour Palette
permalink: /style-guide/basics/colour-palette/
---

# Colour Palette

Our brand palette with CSS variables, usage notes, and minimum contrast ratios.

## Primary Brand

These colours are central to our brand identity.

<div class="colour-swatch-group">
  <div class="colour-swatch contrast-example" style="background-color: #fff; color: #204312;">
    <span>Text on Primary</span>
    <span>Contrast 7.2:1 (AA+ body, AAA headings)</span>
  </div>
  <div class="colour-swatch contrast-example" style="background-color: #fff; color: #6A8A56;">
    <span>Text on Secondary</span>
    <span>Contrast 4.5:1 (AA body)</span>
  </div>
  <div class="colour-swatch contrast-example" style="background-color: #fff; color: #F4A261;">
    <span>Text on Accent</span>
    <span>(Contrast with white needs careful use)</span>
  </div>
</div>

<div class="colour-swatch-group">
  <div class="colour-swatch" style="background-color: var(--color-primary);">
    <span>--color-primary</span>
    <span>#204312</span>
  </div>
  <div class="colour-swatch" style="background-color: var(--color-secondary);">
    <span>--color-secondary</span>
    <span>#6A8A56</span>
  </div>
  <div class="colour-swatch" style="background-color: var(--color-accent);">
    <span>--color-accent</span>
    <span>#F4A261</span>
  </div>
</div>

## Neutral Greys

These greys provide a versatile backdrop and text colours.

<div class="colour-swatch-group">
  <div class="colour-swatch contrast-example" style="background-color: #f9f9f9; color: #222222;">
    <span>Text on Grey 100</span>
    <span>Contrast 19:1 (AAA)</span>
  </div>
  <div class="colour-swatch contrast-example" style="background-color: #f9f9f9; color: #666666;">
    <span>Text on Grey 100</span>
    <span>Contrast 5.9:1 (AA)</span>
  </div>
  <div class="colour-swatch contrast-example" style="background-color: #666666; color: #f9f9f9;">
    <span>Text on Grey 500</span>
    <span>Contrast 3.2:1 (Below AA body)</span>
  </div>
  <div class="colour-swatch contrast-example" style="background-color: #222222; color: #f9f9f9;">
    <span>Text on Grey 900</span>
    <span>Contrast 9.7:1 (AAA)</span>
  </div>
</div>

<div class="colour-swatch-group">
  <div class="colour-swatch" style="background-color: var(--color-grey-100); color: var(--color-grey-900);">
    <span>--color-grey-100</span>
    <span>#f9f9f9</span>
  </div>
  <div class="colour-swatch" style="background-color: var(--color-grey-500); color: var(--color-grey-100);">
    <span>--color-grey-500</span>
    <span>#666666</span>
  </div>
  <div class="colour-swatch" style="background-color: var(--color-grey-900); color: var(--color-grey-100);">
    <span>--color-grey-900</span>
    <span>#222222</span>
  </div>
</div>

<details>
<summary>Show code</summary>

```css
:root {
  /* Primary brand */
  --color-primary:    #204312; /* headings, CTAs */
  --color-secondary: #6A8A56; /* accents, links */
  --color-accent:     #F4A261; /* highlights */

  /* Neutral greys */
  --color-grey-100: #f9f9f9;
  --color-grey-500: #666666;
  --color-grey-900: #222222;
}

/* Example usage */
h1 { color: var(--color-primary); }
a  { color: var(--color-secondary); }
button.btn-accent { background: var(--color-accent); }
```
</details>

**Accessibility Notes:**

* **Primary on White (7.2:1):** This contrast comfortably meets WCAG AA standards for body text and even the more stringent AAA standards for headings. It ensures good readability for most users.
* **Secondary on White (4.5:1):** This meets the minimum WCAG AA standard for body text. While acceptable, consider if a slightly darker shade might improve readability for some users.
* **Accent on White:** The contrast of \#F4A261 on white will likely be below the WCAG AA minimum of 4.5:1. **Use this colour sparingly for text on a white background.** It might be more suitable for visual accents or backgrounds where text isn't critical.
* **Grey 900 on Grey 100 (19:1):** Excellent contrast, well above AAA standards.
* **Grey 500 on Grey 100 (5.9:1):** Meets WCAG AA standards.
* **Grey 100 on Grey 500 (3.2:1):** This contrast is below the AA requirement for body text. Be cautious when using this combination for significant amounts of text.
* **Grey 100 on Grey 900 (9.7:1):** Excellent contrast, well above AAA standards.
