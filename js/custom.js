/******************************************
    File Name: custom.js
    Template Name: Landigoo
    Created By: MelodyThemes
    Envato Profile: http://themeforest.net/user/melodythemes
    Website: https://melodythemes.com
    Version: 1.0
/****************************************** */

/* ==============================================
			SMOOTH SCROLL 
		=============================================== */

const loader = document.querySelector("#loader");
document.addEventListener("DOMContentLoaded", () => {
  loader.style.display = "none";
});

const navbarToggle = document.querySelector(".nav-button");
const sideMenu = document.querySelector(".side-nav");
console.log(sideMenu);
navbarToggle.addEventListener("click", () => {
  sideMenu.classList.toggle("display");
});

/* =========================
            SCROLL MENU
        =========================*/
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 50) {
    $(".header-block-top").addClass("fixed-menu");
  } else {
    $(".header-block-top").removeClass("fixed-menu");
  }
});

/* =========================
            NAV MENU
        =========================*/
$(".navbar-nav li a").on("click", function (e) {
  $(".navbar-nav li").removeClass("active");
  var $parent = $(this).parent();
  if (!$parent.hasClass("active")) {
    $parent.addClass("active");
  }
});

/* =========================
            CAROUSEL 
        =========================*/

$(document).ready(function () {
  $("#owl-demo").owlCarousel({
    autoPlay: 3000, //Set AutoPlay to 3 seconds
    items: 3,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 2],
    pagination: false,
  });
});

/* ========================
			SLIDER - TAB 
		=============================*/

$(".slider-single").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
  adaptiveHeight: true,
  infinite: false,
  useTransform: true,
  speed: 400,
  cssEase: "cubic-bezier(0.77, 0, 0.18, 1)",
});

$(".slider-nav")
  .on("init", function (event, slick) {
    $(".slider-nav .slick-slide.slick-current").addClass("is-active");
  })
  .slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: false,

    focusOnSelect: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          arrows: false,
        },
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          arrows: true,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: true,
        },
      },
    ],
  });

$(".slider-single").on("afterChange", function (event, slick, currentSlide) {
  $(".slider-nav").slick("slickGoTo", currentSlide);
  var currrentNavSlideElem =
    '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
  $(".slider-nav .slick-slide.is-active").removeClass("is-active");
  $(currrentNavSlideElem).addClass("is-active");
});

$(".slider-nav").on("click", ".slick-slide", function (event) {
  event.preventDefault();
  var goToSingleSlide = $(this).data("slick-index");

  $(".slider-single").slick("slickGoTo", goToSingleSlide);
});

/* ========================
			WOW ANIMATION
		=============================*/

new WOW().init();

/* ==============================================
			SELECTPICKER
		=============================================== */

/* ==============================================
			PRELOADER
		=============================================== */

/* ==============================================
			SCROLL UP
		=============================================== */

$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $(".scrollup").fadeIn();
  } else {
    $(".scrollup").fadeOut();
  }
});

$(".scrollup").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 600);
  return false;
});

/* ==============================================
			PARALLAX
		=============================================== */
