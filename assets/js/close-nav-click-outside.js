document.addEventListener('click', function(event) {
  const navTrigger = document.getElementById('nav-trigger');
  const nav = document.querySelector('.site-nav');

  if (
    navTrigger.checked &&
    !nav.contains(event.target)
  ) {
    navTrigger.checked = false;
  }
});