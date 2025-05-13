---
layout: styleguide
title: Typography
permalink: /style-guide/basics/typography/
---

## Typography

A guide to Sustainamo’s core type styles, font stacks, and usage.

### Font Families

<table class="responsive-table">
  <thead>
    <tr>
      <th>Sample</th>
      <th>Class/Selector</th>
      <th>Font Stack</th>
      <th>Usage</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">The quick brown fox</td>
      <td><code>body, p, ul, ol</code></td>
      <td><code>system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif</code></td>
      <td>Body text, lists</td>
    </tr>
    <tr>
      <td style="font-family: 'alkaline', cursive;">Sustainamo</td>
      <td><code>.sustainamo-script</code></td>
      <td><code>"alkaline", cursive</code></td>
      <td>Brand accent, headings, highlights</td>
    </tr>
  </tbody>
</table>

---

### Heading Styles

<table class="responsive-table">
  <thead>
    <tr>
      <th>Sample</th>
      <th>Selector</th>
      <th>Font Size</th>
      <th>Weight</th>
      <th>Color</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><h1 style="font-size:1.8rem; font-weight:300; color:#204312;">Heading 1</h1></td>
      <td><code>h1</code></td>
      <td>1.8rem<br>(2.2rem ≥768px)</td>
      <td>300</td>
      <td><span style="color:#204312;">#204312</span></td>
    </tr>
    <tr>
      <td><h2 style="font-size:1.5rem; color:#204312;">Heading 2</h2></td>
      <td><code>h2</code></td>
      <td>1.5rem</td>
      <td>400</td>
      <td><span style="color:#204312;">#204312</span></td>
    </tr>
    <tr>
      <td><h3 style="font-size:1.25rem; color:#204312;">Heading 3</h3></td>
      <td><code>h3</code></td>
      <td>1.25rem</td>
      <td>400</td>
      <td><span style="color:#204312;">#204312</span></td>
    </tr>
    <tr>
      <td><h4 style="font-size:1.1rem; color:#204312;">Heading 4</h4></td>
      <td><code>h4</code></td>
      <td>1.1rem</td>
      <td>400</td>
      <td><span style="color:#204312;">#204312</span></td>
    </tr>
  </tbody>
</table>

---

### Body Text & Lists

<table class="responsive-table">
  <thead>
    <tr>
      <th>Sample</th>
      <th>Selector</th>
      <th>Line Height</th>
      <th>Color</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="font-size:1rem; color:#333;">The quick brown fox jumps over the lazy dog.</td>
      <td><code>p, ul, ol</code></td>
      <td>1.6</td>
      <td><span style="color:#333;">#333</span></td>
    </tr>
  </tbody>
</table>

---

### Usage Example

```css
body, p, ul, ol {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  line-height: 1.6;
  color: #333;
}

.sustainamo-script {
  font-family: "alkaline", cursive;
  font-size: 1.1rem;
}

h1 { font-size: 1.8rem; font-weight: 300; color: #204312; }
h2 { font-size: 1.5rem; color: #204312; }
h3 { font-size: 1.25rem; color: #204312; }
h4 { font-size: 1.1rem; color: #204312; }

@media (min-width: 768px) {
  h1 { font-size: 2.2rem; }
}
