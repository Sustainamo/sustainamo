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