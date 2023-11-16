document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('toggle-theme');
  const menuToggle = document.getElementById('menu-toggle');
  const mobileNav = document.querySelector('.respmenu nav');

  themeToggle.addEventListener('click', function () {

    document.body.classList.toggle('dark-mode');


  });

  document.querySelectorAll('.respmenu nav a').forEach(function (link) {
    link.addEventListener('click', function () {
      menuToggle.checked = false;
    });
  });
});
