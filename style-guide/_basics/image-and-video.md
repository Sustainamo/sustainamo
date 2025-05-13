---
layout: styleguide
title: Images & Video
permalink: /style-guide/basics/images-video/
---

# Images & Video

This section covers best practices and utility classes for handling images and embedding responsive videos.

---

## Responsive Images

Use the `.responsive-img` class to ensure images scale to fit their container and remain sharp on all devices.

### Example

<img src="/assets/images/example.jpg" alt="Descriptive alt text" class="responsive-img" style="max-width:200px; border:1px solid #ccc;">

### Usage

```html
<img src="/assets/images/example.jpg" alt="Descriptive alt text" class="responsive-img">
```

- Always provide descriptive `alt` text for accessibility.
- `.responsive-img` sets `max-width: 100%; height: auto;` for flexible sizing.

---

## Image Grid

Use the `.image-grid` class to display multiple images in a responsive grid layout.

### Example

<div class="image-grid" style="max-width: 500px;">
  <img src="/assets/images/example1.jpg" alt="Alt 1">
  <img src="/assets/images/example2.jpg" alt="Alt 2">
  <img src="/assets/images/example3.jpg" alt="Alt 3">
</div>

### Usage

```html
<div class="image-grid">
  <img src="/assets/images/example1.jpg" alt="Alt 1">
  <img src="/assets/images/example2.jpg" alt="Alt 2">
  <img src="/assets/images/example3.jpg" alt="Alt 3">
</div>
```

- Images will wrap and resize automatically.
- Use for galleries or sets of related images.

---

## Responsive Video Embeds

Wrap embedded videos (e.g., YouTube, Vimeo) in a `.video-wrapper` to maintain aspect ratio and responsiveness.

### Example

<div class="video-wrapper" style="max-width:400px;">
  <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Example video" allowfullscreen></iframe>
</div>

### Usage

```html
<div class="video-wrapper">
  <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Example video" allowfullscreen></iframe>
</div>
```

- `.video-wrapper` keeps the video at a 16:9 aspect ratio and scales to fit the container.
- Always set a descriptive `title` on the `<iframe>` for accessibility.

---

## Accessibility Notes

- Use meaningful `alt` text for all images.
- Use descriptive `title` attributes for embedded videos.
- Ensure images and videos have sufficient contrast and are not essential for understanding content unless described elsewhere.
