---
layout: styleguide
title: Colour Palette
permalink: /style-guide/basics/colour-palette/
---

## Colour palette

Our brand palette with CSS variables, usage notes, and minimum contrast ratios.

### Primary Brand

These colours are central to our brand identity.

<table class="responsive-table">
  <thead>
    <tr>
      <th>Swatch</th>
      <th>Usage</th>
      <th>CSS Variable</th>
      <th>Hex</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="width: 50px; height: 30px; background-color: var(--color-primary);"></td>
      <td>Primary colour, used for text and main elements of diagrams requiring colour</td>
      <td><code>var(--color-primary)</code></td>
      <td><code>#204312</code></td>
    </tr>
    <tr>
      <td style="width: 50px; height: 30px; background-color: var(--color-secondary);"></td>
      <td>Secondary colour, for accents and links</td>
      <td><code>var(--color-secondary)</code></td>
      <td><code>#BDC7B9</code></td>
    </tr>
    <tr>
      <td style="width: 50px; height: 30px; background-color: var(--color-tertiary);"></td>
      <td>Tertiary colour, for supporting accents and diagrams</td>
      <td><code>var(--color-tertiary)</code></td>
      <td><code>#607956</code></td>
    </tr>
    <tr>
      <td style="width: 50px; height: 30px; background-color: var(--color-accent);"></td>
      <td>Accent colour, used for highlights</td>
      <td><code>var(--color-accent)</code></td>
      <td><code>#F4A261</code></td>
    </tr>
    <tr>
      <td style="width: 50px; height: 30px; background-color: var(--color-background); border: 1px solid #ccc;"></td>
      <td>Background colour, used for page backgrounds</td>
      <td><code>var(--color-background)</code></td>
      <td><code>#FBFBFB</code></td>
    </tr>
  </tbody>
</table>

### Link colours

<table class="responsive-table">
  <thead>
    <tr>
      <th>Swatch</th>
      <th>Usage</th>
      <th>CSS Variable</th>
      <th>Hex</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="width: 50px; height: 30px; background-color: var(--color-link);"></td>
      <td>Link colour (default, unvisited)</td>
      <td><code>var(--color-link)</code></td>
      <td><code>#175076</code></td>
    </tr>
    <tr>
      <td style="width: 50px; height: 30px; background-color: var(--color-link-hover);"></td>
      <td>Link hover colour</td>
      <td><code>var(--color-link-hover)</code></td>
      <td><code>#1565a5</code></td>
    </tr>
    <tr>
      <td style="width: 50px; height: 30px; background-color: var(--color-link-clicked);"></td>
      <td>Link clicked/active colour</td>
      <td><code>var(--color-link-clicked)</code></td>
      <td><code>#4b3b6b</code></td>
    </tr>
  </tbody>
</table>

### Neutral Greys (for tables, nav etc)

<table class="responsive-table">
  <thead>
    <tr>
      <th>Swatch</th>
      <th>Usage</th>
      <th>CSS Variable</th>
      <th>Hex</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="width: 50px; height: 30px; background-color: var(--color-grey-100);"></td>
      <td>Grey 100</td>
      <td><code>var(--color-grey-100)</code></td>
      <td><code>#f9f9f9</code></td>
    </tr>
    <tr>
      <td style="width: 50px; height: 30px; background-color: var(--color-grey-500);"></td>
      <td>Grey 500</td>
      <td><code>var(--color-grey-500)</code></td>
      <td><code>#666666</code></td>
    </tr>
    <tr>
      <td style="width: 50px; height: 30px; background-color: var(--color-grey-900);"></td>
      <td>Grey 900</td>
      <td><code>var(--color-grey-900)</code></td>
      <td><code>#222222</code></td>
    </tr>
    <tr>
      <td style="width: 50px; height: 30px; background-color: var(--color-grey-border);"></td>
      <td>Border colour for tables and other UI elements</td>
      <td><code>var(--color-grey-border)</code></td>
      <td><code>#ddd</code></td>
    </tr>
    <tr>
      <td style="width: 50px; height: 30px; background-color: var(--color-grey-light);"></td>
      <td>Light grey for subtle dividers and backgrounds</td>
      <td><code>var(--color-grey-light)</code></td>
      <td><code>#eee</code></td>
    </tr>
    <tr>
      <td style="width: 50px; height: 30px; background-color: var(--color-grey-separator);"></td>
      <td>Colour for separators, like in breadcrumbs</td>
      <td><code>var(--color-grey-separator)</code></td>
      <td><code>#aaa</code></td>
    </tr>
  </tbody>
</table>

#### Accessibility Notes

* **Primary on Background (#204312 on #FBFBFB):** Contrast ratio of 12.4:1 — exceeds both WCAG AA and AAA for all text sizes.
* **Secondary on Background (#BDC7B9 on #FBFBFB):** Contrast ratio of 4.54:1 — meets WCAG AA for normal text but not AAA. Suitable for most UI text and accents.
* **Tertiary on Background (#607956 on #FBFBFB):** Contrast ratio of 5.26:1 — meets WCAG AA for normal text and AAA for large text. Good for headings or secondary elements.
* **Accent on Background (#F4A261 on #FBFBFB):** Contrast ratio of 2.61:1 — fails WCAG AA. Only use for visual accents or large display text.
* **Grey 900 on Grey 100 (#222222 on #f9f9f9):** Contrast ratio of 17.4:1 — excellent. Exceeds AAA for all text.
* **Grey 500 on Grey 100 (#666666 on #f9f9f9):** Contrast ratio of 7.5:1 — exceeds AA and AAA. Suitable for body text and icons.
* **Grey 100 on Grey 900 (#f9f9f9 on #222222):** Contrast ratio of 17.4:1 — excellent. Use freely on dark backgrounds.
* **Grey 100 on Grey 500 (#f9f9f9 on #666666):** Contrast ratio of 2.7:1 — fails AA for body text. Avoid for long passages or critical information.
