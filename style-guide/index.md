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
{% endfor %}

<hr>

# Components
{% for comp in site.components %}
  <section id="{{ comp.title | slugify }}" class="guide-component">
    {% include style-guide/component.html comp=comp %}
  </section>
{% endfor %}
