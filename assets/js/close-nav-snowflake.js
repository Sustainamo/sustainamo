document.addEventListener("DOMContentLoaded", function () {
  const navTrigger = document.getElementById("nav-trigger");
  const snowflakeIcon = document.querySelector(".nav-icon-open");

  if (navTrigger && snowflakeIcon) {
    snowflakeIcon.addEventListener("click", function () {
      navTrigger.checked = false;
    });
  }
});