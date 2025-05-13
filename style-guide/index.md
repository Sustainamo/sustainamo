---
layout: styleguide
title: Style Guide
permalink: /style-guide/
---

# Basics
{% for basic in site.basics %}
  <section id="{{ basic.title | slugify }}" class="guide-basic">
    {% include style-guide/basic.html basic=basic %}
  </section>
  <hr class="short-hr">
{% endfor %}

# Components
{% for comp in site.components %}
  <section id="{{ comp.title | slugify }}" class="guide-component">
    {% include style-guide/component.html component=comp %}
  </section>
  <hr class="short-hr">
{% endfor %}
