---
layout: styleguide
title: Tables
permalink: /style-guide/components/tables/
---

# Tables

Tables are used to display tabular data in a clear, accessible, and responsive way.

---

## Example Table

<table class="responsive-table centre-ticks">
  <thead>
    <tr>
      <th>Feature</th>
      <th>Supported</th>
      <th>Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Responsive layout</td>
      <td>✔️</td>
      <td>Collapses to mobile-friendly blocks</td>
    </tr>
    <tr>
      <td>Column centering</td>
      <td>✔️</td>
      <td>Use <code>.centre-ticks</code> on table</td>
    </tr>
    <tr>
      <td>Custom cell labels</td>
      <td>✔️</td>
      <td>Set <code>data-label</code> on <code>&lt;td&gt;</code> for mobile</td>
    </tr>
  </tbody>
</table>

---

## Usage

```html
<table class="responsive-table centre-ticks">
  <thead>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Header 1">Cell 1</td>
      <td data-label="Header 2">Cell 2</td>
    </tr>
  </tbody>
</table>
```

## Variants
- **Striped rows**  
- **Centered ticks**

## Responsive Behaviour
- Mobile stacking rules  
- Horizontal scroll on narrow viewports
