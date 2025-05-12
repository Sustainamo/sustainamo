---
layout: styleguide
title: Typography
permalink: /style-guide/basics/typography/
---

# Typography

Our core heading and body styles, plus the Sustainamo Script font.

## Font Families & Classes

We use a neutral system font for body text and the custom “alkaline” script for accents.

<details>
  <summary>Show CSS</summary>

```css
/* Body text */
body, p, ul, ol {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

/* Sustainamo Script */
.sustainamo-script {
  font-family: "alkaline", sans-serif;
  font-weight: normal;
  font-style: normal;
  font-size: 1.1rem;
}
```

</details>

## Heading Styles

<details>
  <summary>Show CSS</summary>

```css
h1 { font-size: 1.8rem; margin: 1.5rem 0 1rem;  font-weight: 300; color: #204312; }
h2 { font-size: 1.5rem; margin: 1.25rem 0 .75rem; color: #204312; }
h3 { font-size: 1.25rem; margin: 1rem 0 .5rem;   color: #204312; }
h4 { font-size: 1.1rem;  margin: .75rem 0 .5rem;  color: #204312; }
```

</details>

## Paragraphs & Lists

<details>
  <summary>Show CSS</summary>

```css
p, ul, ol {
  line-height: 1.6;
  color: #333;
  margin-bottom: 1rem;
}
```

</details>

## Responsive Adjustment

<details>
  <summary>Show CSS</summary>

```css
@media (min-width: 768px) {
  h1 { font-size: 2.2rem; }
}
```

</details>
