---
layout: styleguide
title: Style Guide
permalink: /style-guide/
---

## Basics
{% for basic in site.pages %}
  {% if basic.path contains 'style-guide/basics/' %}
    {% include style-guide/basic.html basic=basic %}
  {% endif %}
{% endfor %}

<hr>

## Components
{% for comp in site.pages %}
  {% if comp.path contains 'style-guide/components/' %}
    {% include style-guide/component.html comp=comp %}
  {% endif %}
{% endfor %}
