---
layout: styleguide
title: Colour Palette
permalink: /style-guide/basics/colour-palette/
---

# Colour Palette

Our brand palette with CSS variables, usage notes, and minimum contrast ratios.

<details>
<summary>Show code</summary>

```css
:root {
  /* Primary brand */
  --color-primary:   #204312; /* headings, CTAs */
  --color-secondary: #6A8A56; /* accents, links */
  --color-accent:    #F4A261; /* highlights */

  /* Neutral greys */
  --color-grey-100: #f9f9f9;
  --color-grey-500: #666666;
  --color-grey-900: #222222;
}

/* Example usage */
h1 { color: var(--color-primary); }
a  { color: var(--color-secondary); }
button.btn-accent { background: var(--color-accent); }

<details>
h1 { color: var(--color-primary); }
a  { color: var(--color-secondary); }
button.btn-accent { background: var(--color-accent); }
</details>

**Accessibility:**

* #204312 on white: 7.2:1 (AA+ for body, AAA for headings)
* #6A8A56 on white: 4.5:1 (AA for body)
