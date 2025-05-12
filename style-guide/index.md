---
layout: styleguide
title: Style Guide
permalink: /style-guide/
---

## Basics
{% assign basics = site.pages 
    | where_exp: "p", p.path =~ "^style-guide/basics/" %}
{% for basic in basics %}
  {% include style-guide/basic.html basic=basic %}
{% endfor %}

<hr>

## Components
{% assign comps = site.pages 
    | where_exp: "p", p.path =~ "^style-guide/components/" %}
{% for comp in comps %}
  {% include style-guide/component.html comp=comp %}
{% endfor %}

