---
layout: styleguide
title: Core Wrappers & Content Width
permalink: /style-guide/basics/wrappers/
---

# Core Wrappers & Content Width

Defines the main page container so content is never too wide and always centered.

```css
.wrapper {
  max-width: 1100px;
  margin: 0 auto;       /* center horizontally */
  padding: 0 1.5rem;    /* gutter space on mobile */
}

**Usage**
<div class="wrapper">
  <!-- page content here -->
</div>
