---
layout: styleguide
title: Breakpoints
permalink: /style-guide/basics/breakpoints/
---

Our responsive breakpoints help you target mobile, tablet, and desktop layouts.

<table>
  <thead>
    <tr>
      <th>Device</th>
      <th>Variable</th>
      <th>Value</th>
      <th>Example Use</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>📱 Mobile</td>
      <td><code>--bp-sm</code></td>
      <td>480px</td>
      <td><code>@media (min-width: var(--bp-sm))</code></td>
    </tr>
    <tr>
      <td>📱 Tablet</td>
      <td><code>--bp-md</code></td>
      <td>768px</td>
      <td><code>@media (min-width: var(--bp-md))</code></td>
    </tr>
    <tr>
      <td>🖥️ Desktop</td>
      <td><code>--bp-lg</code></td>
      <td>1024px</td>
      <td><code>@media (min-width: var(--bp-lg))</code></td>
    </tr>
    <tr>
      <td>📋 Nav</td>
      <td><code>--bp-nav</code></td>
      <td>700px</td>
      <td><code>@media (max-width: var(--bp-nav))</code></td>
    </tr>
    <tr>
      <td>📊 Table</td>
      <td><code>--bp-table</code></td>
      <td>600px</td>
      <td><code>@media (max-width: var(--bp-table))</code></td>
    </tr>
  </tbody>
</table>

**Usage Example:**
```css
@media (min-width: var(--bp-md)) {
  .card {
    display: flex;
    gap: 1.5rem;
  }
}
```