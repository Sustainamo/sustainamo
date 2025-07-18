document.addEventListener("DOMContentLoaded", function () {
  const navTrigger = document.getElementById("nav-trigger");
  const snowflakeIcon = document.querySelector(".nav-icon-open");
  const nav = document.querySelector(".site-nav");

  // Close nav when snowflake icon is clicked
  if (navTrigger && snowflakeIcon) {
    snowflakeIcon.addEventListener("click", function () {
      navTrigger.checked = false;
    });
  }

  // Close nav when clicking outside
  document.addEventListener("click", function(event) {
    if (
      navTrigger &&
      navTrigger.checked &&
      nav &&
      !nav.contains(event.target)
    ) {
      navTrigger.checked = false;
    }
  });
});