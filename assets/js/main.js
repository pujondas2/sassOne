(function ($) {
  "use strict";

  // main menu
  const mainMenu = document.querySelector(".main-menu"),
    mobileMenu = document.querySelector(".mobile-menu"),
    closeNav = document.querySelector(".close-nav");

  mobileMenu.addEventListener("click", toggleNav);
  closeNav.addEventListener("click", toggleNav);

  function toggleNav() {
    mainMenu.classList.toggle("active");
  }

  /* Sticky Header */
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 1) {
      $(".header-area").addClass("sticky");
    } else {
      $(".header-area").removeClass("sticky");
    }
  });

  // one page nav for scrolling
  $("#nav").onePageNav();

  // project gallery
  $(".popup-image").magnificPopup({
    type: "image",
    titleSrc: "title",
    gallery: {
      enabled: true,
    },
  });

  // counter up
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });

  // testimonial slider
  $(".testimonial-active").slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
  });

  // cta video
  $(".cta-popup").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false,
  });
})(jQuery);
