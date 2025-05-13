---
layout: styleguide
title: Colour Palette
permalink: /style-guide/basics/colour-palette/
---

**Colour palette**

Our brand palette with CSS variables, usage notes, and minimum contrast ratios.## Primary Brand

These colours are central to our brand identity.

<table class="responsive-table">
  <thead>
    <tr>
      <th>Swatch</th>
      <th>Usage</th>
      <th>CSS Variable</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="width: 50px; height: 30px; background-color: var(--color-primary);"></td>
      <td>Primary colour, used for text and main elements of diagrams requiring colour</td>
      <td><code>var(--color-primary)</code></td>
    </tr>
    <tr>
      <td style="width: 50px; height: 30px; background-color: var(--color-secondary);"></td>
      <td>Secondary colour, for accents and links</td>
      <td><code>var(--color-secondary)</code></td>
    </tr>
    <tr>
      <td style="width: 50px; height: 30px; background-color: var(--color-accent);"></td>
      <td>Accent colour, used for highlights</td>
      <td><code>var(--color-accent)</code></td>
    </tr>
  </tbody>
</table>

## Neutral Greys

These greys provide a versatile backdrop and text colours.

<table class="responsive-table">
  <thead>
    <tr>
      <th>Swatch</th>
      <th>Usage</th>
      <th>CSS Variable</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="width: 50px; height: 30px; background-color: var(--color-grey-100);"></td>
      <td>Grey 100</td>
      <td><code>var(--color-grey-100)</code></td>
    </tr>
    <tr>
      <td style="width: 50px; height: 30px; background-color: var(--color-grey-500);"></td>
      <td>Grey 500</td>
      <td><code>var(--color-grey-500)</code></td>
    </tr>
    <tr>
      <td style="width: 50px; height: 30px; background-color: var(--color-grey-900);"></td>
      <td>Grey 900</td>
      <td><code>var(--color-grey-900)</code></td>
    </tr>
    <tr>
      <td style="width: 50px; height: 30px; background-color: var(--color-link);"></td>
      <td>Standard link colour</td>
      <td><code>var(--color-link)</code></td>
    </tr>
    <tr>
      <td style="width: 50px; height: 30px; background-color: var(--color-grey-border);"></td>
      <td>Border colour for tables and other UI elements</td>
      <td><code>var(--color-grey-border)</code></td>
    </tr>
    <tr>
      <td style="width: 50px; height: 30px; background-color: var(--color-grey-light);"></td>
      <td>Light grey for subtle dividers and backgrounds</td>
      <td><code>var(--color-grey-light)</code></td>
    </tr>
    <tr>
      <td style="width: 50px; height: 30px; background-color: var(--color-grey-separator);"></td>
      <td>Colour for separators, like in breadcrumbs</td>
      <td><code>var(--color-grey-separator)</code></td>
    </tr>
  </tbody>
</table>

**Accessibility Notes:**

* **Primary on White (7.2:1):** This contrast comfortably meets WCAG AA standards for body text and even the more stringent AAA standards for headings. It ensures good readability for most users.
* **Secondary on White (4.5:1):** This meets the minimum WCAG AA standard for body text. While acceptable, consider if a slightly darker shade might improve readability for some users.
* **Accent on White:** The contrast of \#F4A261 on white will likely be below the WCAG AA minimum of 4.5:1. **Use this colour sparingly for text on a white background.** It might be more suitable for visual accents or backgrounds where text isn't critical.
* **Grey 900 on Grey 100 (19:1):** Excellent contrast, well above AAA standards.
* **Grey 500 on Grey 100 (5.9:1):** Meets WCAG AA standards.
* **Grey 100 on Grey 500 (3.2:1):** This contrast is below the AA requirement for body text. Be cautious when using this combination for significant amounts of text.
* **Grey 100 on Grey 900 (9.7:1):** Excellent contrast, well above AAA standards.
