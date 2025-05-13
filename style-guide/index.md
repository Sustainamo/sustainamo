---
layout: styleguide
title: Style Guide
permalink: /style-guide/
---

## Basics
{% for basic in site.pages %}
  {% if basic.path contains 'style-guide/basics/' %}
e3    <section id="{{ basic.title | slugify }}" class="guide-basic">
      {% include style-guide/basic.html basic=basic %}
    </section>
  {% endif %}= 
{% endfor %}

<hr>

## Components
{% for comp in site.pages %}
  {% if comp.path contains 'style-guide/components/' %}
    {% include style-guide/component.html comp=comp %}
  {% endif %}
{% endfor %}
