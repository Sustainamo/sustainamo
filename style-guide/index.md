---
layout: styleguide
title: Style Guide
permalink: /style-guide/
---

## Basics
{% for basic in site.basics %}
  {% include style-guide/basic.html %}
{% endfor %}

<hr>

## Components
{% for comp in site.components %}
  {% include style-guide/component.html %}
{% endfor %}

