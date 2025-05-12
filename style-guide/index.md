---
layout: styleguide
title: Style Guide
permalink: /style-guide/
---

# Style Guide

## Components
{% for comp in site.components %}
  {% include style-guide/component.html %}
{% endfor %}

## Basics
{% for basic in site.basics %}
  {% include style-guide/basic.html %}
{% endfor %}
