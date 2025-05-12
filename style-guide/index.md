---
layout: styleguide
title: Style Guide
permalink: /style-guide/
---

# Style Guide

## Components
{% for comp in site.components %}
  {% include component.html %}
{% endfor %}

## Basics
{% for basic in site.basics %}
  {% include basic.html %}
{% endfor %}
