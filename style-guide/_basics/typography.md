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
      <th>Label</th>
      <th>Sample</th>
      <th>Class/Selector</th>
      <th>Font Stack</th>
      <th>Usage</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Body Font</td>
      <td style="font-family: 'Manrope', sans-serif;">The quick brown fox</td>
      <td><code>body, p, ul, ol</code></td>
      <td><code>'Manrope', 'Segoe UI', Roboto, sans-serif</code></td>
      <td>Primary text for content and lists</td>
    </tr>
    <tr>
      <td>Headline Font</td>
      <td style="font-family: 'Montserrat', sans-serif; font-weight: 600;">The quick brown fox</td>
      <td><code>h1, h2, h3, h4</code></td>
      <td><code>'Montserrat', 'Segoe UI', Roboto, sans-serif</code></td>
      <td>Used for section headings and emphasis</td>
    </tr>
    <tr>
      <td>Brand Font</td>
      <td style="font-family: 'alkaline', cursive;">Sustainamo</td>
      <td><code>.sustainamo-script</code></td>
      <td><code>'alkaline', cursive</code></td>
      <td>Logo, brand accent, or decorative emphasis</td>
    </tr>
  </tbody>
</table>

<hr class="short-hr">

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
      <td><h1 style="font-family:'Montserrat',sans-serif; font-size:2rem; font-weight:600; color:#204312;">Heading 1</h1></td>
      <td><code>h1</code></td>
      <td>2rem</td>
      <td>600</td>
      <td><span style="color:#204312;">#204312</span></td>
    </tr>
    <tr>
      <td><h2 style="font-family:'Montserrat',sans-serif; font-size:1.5rem; font-weight:600; color:#204312;">Heading 2</h2></td>
      <td><code>h2</code></td>
      <td>1.5rem</td>
      <td>600</td>
      <td><span style="color:#204312;">#204312</span></td>
    </tr>
    <tr>
      <td><h3 style="font-family:'Montserrat',sans-serif; font-size:1.2rem; font-weight:600; color:#204312;">Heading 3</h3></td>
      <td><code>h3</code></td>
      <td>1.2rem</td>
      <td>600</td>
      <td><span style="color:#204312;">#204312</span></td>
    </tr>
    <tr>
      <td><h4 style="font-family:'Montserrat',sans-serif; font-size:1rem; font-weight:600; color:#204312;">Heading 4</h4></td>
      <td><code>h4</code></td>
      <td>1rem</td>
      <td>600</td>
      <td><span style="color:#204312;">#204312</span></td>
    </tr>
  </tbody>
</table>

<br>
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
      <td style="font-family: 'Manrope', sans-serif; font-size:0.95rem; color:#222;">The quick brown fox jumps over the lazy dog.</td>
      <td><code>p, ul, ol</code></td>
      <td>1.6</td>
      <td><span style="color:#222;">#222</span></td>
    </tr>
  </tbody>
</table>

### Links

Links use the brand blue for clarity and accessibility. Visited links use a slightly different shade for distinction.

<p>
  <a href="#" style="color: #175076; text-decoration: underline;">This is a link</a>
  &nbsp;|&nbsp;
  <a href="#" style="color: #1565a5; text-decoration: underline;">This is a visited link</a>
</p>

```css
a {
  color: var(--color-link); /* #175076 */
  text-decoration: underline;
}
a:visited {
  color: var(--color-link-visited); /* #1565a5 */
}
a:hover,
a:focus {
  text-decoration: underline;
  opacity: 0.85;
}
```