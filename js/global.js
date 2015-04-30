$(document).ready(function() {
  // toggle hamburger button for mobile main nav
  $("#mobile-nav-btn").click(function() {
    $("#rsc-nav-secondary, #nav").toggle();
  });
  // toggle hamburger button for sidebar
  $("#sidebar-nav-btn").click(function() {
    $("#sidebar").toggle();
  });
  // toggle hamburger button for footer nav
  $("#footer-nav-btn").click(function() {
    $(".footer-links").toggle();
  });
  // reset on window resize
  $(window).resize(function() {
    var browserWidth = $(window).width();
    if (browserWidth > 570) {
      //alert('hello! window has been resized! Width is '+browserWidth);
    }
});
});
