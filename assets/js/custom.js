(function ($) {
  $(".main-menu, .scroll-to-section").on("click", "a", function (e) {
    if ($(e.target).hasClass("external")) {
      return;
    }
    e.preventDefault();
    $("#menu").removeClass("active");
    showSection($(this).attr("href"), true);
  });

  $(document).ready(function () {
    $("body").addClass("js");
    var $menu = $("#menu"),
      $menulink = $(".menu-link");

    $menulink.click(function () {
      $menulink.toggleClass("active");
      $menu.toggleClass("active");
      return false;
    });
  });

  $(".Modern-Slider").slick({
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    dots: true,
    pauseOnDotsHover: true,
    cssEase: "fade",
    // fade:true,
    draggable: false,
    prevArrow: '<button class="PrevArrow"></button>',
    nextArrow: '<button class="NextArrow"></button>',
  });

  $("#tabs").tabs();
})(jQuery);
