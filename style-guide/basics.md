---
layout: styleguide
title: Style Guide Basics
permalink: /style-guide/basics
---

# Basics
{% for basic in site.basics %}
  <section id="{{ basic.title | slugify }}" class="guide-basic">
    {% include style-guide/basic.html basic=basic %}
  </section>
  <hr class="short-hr">
{% endfor %}