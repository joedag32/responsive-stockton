$(document).ready(function() {
  // toggle hamburger button for mobile main nav
  $("#mobile-nav-btn").click(function() {
    $("#rsc-nav-secondary, #nav").toggle();
  });
  // toggle hamburger button for sidebar
  $("#sidebar-nav-btn").click(function() {
    $("#sidebar").toggle();
  });
});
