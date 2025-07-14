---
layout: styleguide
title: Diagrams
permalink: /style-guide/components/diagrams/
---

# Diagrams

The `.phase-blocks` component displays a set of visually grouped blocks, ideal for illustrating steps, phases, or categories in a process.

---

## Example

<div class="phase-blocks green solid">
  <a class="phase-block" href="#">
    <h2>Discover</h2>
    <p>Initial research and exploration phase.</p>
  </a>
  <a class="phase-block" href="#">
    <h2>Design</h2>
    <p>Ideation, prototyping, and visual design.</p>
  </a>
  <a class="phase-block" href="#">
    <h2>Deliver</h2>
    <p>Implementation and launch of the solution.</p>
  </a>
</div>

<details>
  <summary><strong>Show usage code</strong></summary>

  {% highlight html %}
  <div class="phase-blocks green solid">
    <a class="phase-block" href="#">
      <h2>Discover</h2>
      <p>Initial research and exploration phase.</p>
    </a>
    <a class="phase-block" href="#">
      <h2>Design</h2>
      <p>Ideation, prototyping, and visual design.</p>
    </a>
    <a class="phase-block" href="#">
      <h2>Deliver</h2>
      <p>Implementation and launch of the solution.</p>
    </a>
  </div>
  {% endhighlight %}
</details>

## Outlined Variant

An alternate visual style using `.phase-blocks.outlined.green`. This version features a white background, a coloured border, and a coloured header bar for each block.

<div class="phase-blocks outlined green">
  <a class="phase-block" href="#">
    <h2>Plan</h2>
    <p>Define your approach, stakeholders, and baseline.</p>
  </a>
  <a class="phase-block" href="#">
    <h2>Do</h2>
    <p>Implement your strategy and engage delivery teams.</p>
  </a>
  <a class="phase-block" href="#">
    <h2>Review</h2>
    <p>Evaluate performance, outcomes, and lessons learned.</p>
  </a>
</div>

---

## Variants

| Modifier Classes         | Effect                                 |
|-------------------------|----------------------------------------|
| `.green` / `.blue`      | Sets the color theme                   |
| `.accent`               | Uses accent (#F4A261) colour styling   |
| `.solid`                | Solid background blocks                |
| `.outlined`             | Outlined blocks with colored headers   |

---


## CTA box

<div class="cta-block">
  <h2>Want this content sooner?</h2>
  <p>This is a community project – if you'd like to see more content sooner, please <a href="/about/join-the-project/">get involved here</a>.</p>
</div>

<details>
  <summary><strong>Show usage code</strong></summary>

  {% highlight html %}
  <div class="cta-block">
    <h2>Want this content sooner?</h2>
    <p>This is a community project – if you'd like to see more content sooner, please <a href="/about/join-the-project/">get involved here</a>.</p>
  </div>
  {% endhighlight %}
</details>

---

## Responsive Behaviour

- Blocks display in a row on desktop, and stack vertically on screens ≤768px.
- Each block is flexible and adapts to available space.

---

## Customisation

- Add or remove blocks as needed.
- Use different color and style modifiers for visual distinction.
- Each block can contain a heading, text, and a link.

---

## Accessibility

- Use clear, descriptive headings for each phase.
- Ensure sufficient color contrast for text and backgrounds.
