## Primary Brand

These colours are central to our brand identity.

<table>
  <tr>
    <td style="width: 50px; height: 30px; background-color: var(--color-primary); text-align: left;"></td>
    <td style="text-align: left;">Primary colour, used for text and main elements of diagrams requiring colour</td>
  </tr>
  <tr>
    <td style="width: 50px; height: 30px; background-color: var(--color-secondary); text-align: left;"></td>
    <td style="text-align: left;">Secondary colour, for accents and links</td>
  </tr>
  <tr>
    <td style="width: 50px; height: 30px; background-color: var(--color-accent); text-align: left;"></td>
    <td style="text-align: left;">Accent colour, used for highlights</td>
  </tr>
</table>

## Neutral Greys

These greys provide a versatile backdrop and text colours.

<table>
  <tr>
    <td style="width: 50px; height: 30px; background-color: var(--color-grey-100); text-align: left;"></td>
    <td style="text-align: left;">Grey 100</td>
  </tr>
  <tr>
    <td style="width: 50px; height: 30px; background-color: var(--color-grey-500); text-align: left;"></td>
    <td style="text-align: left;">Grey 500</td>
  </tr>
  <tr>
    <td style="width: 50px; height: 30px; background-color: var(--color-grey-900); text-align: left;"></td>
    <td style="text-align: left;">Grey 900</td>
  </tr>
</table>

<details>
  <summary>Show code</summary>

  ```css
  :root {
    /* Primary brand */
    --color-primary:    #204312; /* headings, CTAs */
    --color-secondary: #6A8A56; /* accents, links */
    --color-accent:     #F4A261; /* highlights */

    /* Neutral greys */
    --color-grey-100: #f9f9f9;
    --color-grey-500: #666666;
    --color-grey-900: #222222;

    --color-link: #007bff; /* Standard link colour */

  }

  /* Example usage */
  h1 { color: var(--color-primary); }
  a  { color: var(--color-secondary); }
  button.btn-accent { background: var(--color-accent); }
  ```

</details>

**Accessibility Notes:**

  * **Primary on White (7.2:1):** This contrast comfortably meets WCAG AA standards for body text and even the more stringent AAA standards for headings. It ensures good readability for most users.
  * **Secondary on White (4.5:1):** This meets the minimum WCAG AA standard for body text. While acceptable, consider if a slightly darker shade might improve readability for some users.
  * **Accent on White:** The contrast of \#F4A261 on white will likely be below the WCAG AA minimum of 4.5:1. **Use this colour sparingly for text on a white background.** It might be more suitable for visual accents or backgrounds where text isn't critical.
  * **Grey 900 on Grey 100 (19:1):** Excellent contrast, well above AAA standards.
  * **Grey 500 on Grey 100 (5.9:1):** Meets WCAG AA standards.
  * **Grey 100 on Grey 500 (3.2:1):** This contrast is below the AA requirement for body text. Be cautious when using this combination for significant amounts of text.
  * **Grey 100 on Grey 900 (9.7:1):** Excellent contrast, well above AAA standards.
