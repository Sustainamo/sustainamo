document.addEventListener("DOMContentLoaded", function () {
  const sectionNav = document.querySelector(".section-nav");
  if (!sectionNav) return;

  const originalOffset = sectionNav.offsetTop;
  const placeholder = document.createElement("div");
  placeholder.style.height = sectionNav.offsetHeight + "px";
  placeholder.style.display = "none";
  let isSticky = false;

  function handleScroll() {
    const scrollY = window.pageYOffset;

    if (scrollY > originalOffset && !isSticky) {
      sectionNav.classList.add("fixed-nav");
      sectionNav.removeAttribute("open");
      placeholder.style.display = "block";
      if (!sectionNav.previousElementSibling || sectionNav.previousElementSibling !== placeholder) {
        sectionNav.parentNode.insertBefore(placeholder, sectionNav);
      }
      isSticky = true;
    } else if (scrollY <= originalOffset && isSticky) {
      sectionNav.classList.remove("fixed-nav");
      sectionNav.setAttribute("open", "true");
      if (placeholder.parentNode) {
        placeholder.parentNode.removeChild(placeholder);
      }
      placeholder.style.display = "none";
      isSticky = false;
    }
  }

  window.addEventListener("scroll", handleScroll);
});