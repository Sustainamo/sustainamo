---
layout: styleguide
title: Style Guide
permalink: /style-guide/
---

## Basics
{% for basic in site.basics %}
  {% include style-guide/_basics.html %}
{% endfor %}

<hr>

## Components
{% for comp in site.components %}
  {% include style-guide/_components.html %}
{% endfor %}

