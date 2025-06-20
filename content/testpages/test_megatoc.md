---
title: "Tic toc, tic toc"
layout: content
permalink: /tictoc/
---

{% for section in site.data.navigation %}
  <h2><a href="{{ section.url }}">{{ section.title }}</a></h2>
  {% if section.children %}
    <ul>
      {% for sub in section.children %}
        <li>
          <a href="{{ sub.url }}">{{ sub.title }}</a>
          <div class="sub-toc" data-url="{{ sub.url }}"></div>
        </li>
      {% endfor %}
    </ul>
  {% endif %}
{% endfor %}

<script>
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".sub-toc").forEach(async div => {
      const url = div.dataset.url;
      try {
        const res = await fetch(url);
        const html = await res.text();
        const doc = new DOMParser().parseFromString(html, "text/html");
        const content = doc.querySelector(".page-content");
        if (content) {
          const headings = content.querySelectorAll("h2, h3");
          if (headings.length > 0) {
            const ul = document.createElement("ul");
            headings.forEach(h => {
              const li = document.createElement("li");
              const a = document.createElement("a");
              a.href = url + "#" + h.id;
              a.textContent = h.textContent;
              li.appendChild(a);
              ul.appendChild(li);
            });
            div.appendChild(ul);
          }
        }
      } catch (err) {
        console.warn("TOC fetch failed for", url, err);
      }
    });
  });
</script>