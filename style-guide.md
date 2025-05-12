---
layout: default
title: Style Guide
permalink: /style-guide/
---

<h1>Style Guide</h1>

{% assign groups = site.components | group_by: "section" %}
{% for grp in groups %}
  <h2>{{ grp.name }}</h2>
  {% for comp in grp.items %}
    <section class="sg-component">
      <h3>{{ comp.title }}</h3>
      <div class="sg-example">
        {{ comp.content | markdownify }}
      </div>
      <pre><code>{{ comp.content | escape }}</code></pre>
    </section>
  {% endfor %}
{% endfor %}
