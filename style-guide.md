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

      <!-- LIVE PREVIEW: output raw HTML so your real CSS applies -->
      <div class="sg-example">
        {{ comp.content }}
      </div>

      <!-- MARKUP SNIPPET: escape the same HTML for copy/paste -->
      <pre><code>{{ comp.content | escape }}</code></pre>
    </section>
  {% endfor %}
{% endfor %}
