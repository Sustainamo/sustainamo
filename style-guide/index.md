---
layout: styleguide
title: Style Guide
permalink: /style-guide/
---

# Style Guide

## Components
{% comment %} collect every page under style-guide/components/ {% endcomment %}

{% assign comps = site.pages | where: "dir", "/style-guide/components/" %}
{% for comp in comps %}
  {% include style-guide/component.html comp=comp %}
{% endfor %}

## Basics
{% comment %} collect every page under style-guide/basics/ {% endcomment %}

{% assign basics = site.pages | where: "dir", "/style-guide/basics/" %}
{% for basic in basics %}
  {% include style-guide/basic.html basic=basic %}
{% endfor %}
