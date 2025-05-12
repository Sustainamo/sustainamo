---
layout: styleguide
title: Style Guide
permalink: /style-guide/
---

## Components
{% for comp in site.pages %}
  {% if comp.path contains 'style-guide/components/' %}
    {% include style-guide/component.html comp=comp %}
  {% endif %}
{% endfor %}

## Basics
{% for basic in site.pages %}
  {% if basic.path contains 'style-guide/basics/' %}
    {% include style-guide/basic.html basic=basic %}
  {% endif %}
{% endfor %}
