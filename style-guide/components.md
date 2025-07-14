<section class="phase-blocks accent solid">
  <a class="phase-block" href="#">
    <h2>Accent Block 1</h2>
    <p>Description for accent block one.</p>
  </a>
  <a class="phase-block" href="#">
    <h2>Accent Block 2</h2>
    <p>Description for accent block two.</p>
  </a>
  <a class="phase-block" href="#">
    <h2>Accent Block 3</h2>
    <p>Description for accent block three.</p>
  </a>
</section>
<hr class="short-hr">
---
layout: styleguide
title: Style Guide Components
permalink: /style-guide/components
---

# Components
{% for component in site.components %}
  <section id="{{ component.title | slugify }}" class="guide-component">
    {% include style-guide/component.html component=comp %}
  </section>
  <hr class="short-hr">
{% endfor %}