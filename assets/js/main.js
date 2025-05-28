(function ($) {
  $(document).ready(function () {
    //========== HEADER ACTIVE STRATS ============= //
    if ($("#header").length > 0) {
      $(window).on("scroll", function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 1) {
          $(".header-area").removeClass("sticky");
        } else {
          $(".header-area").addClass("sticky");
        }
      });
    }
    //========== HEADER ACTIVE ENDS ============= //

    //========== VIDEO POPUP STARTS ============= //

    $(".gallery-popup-link").magnificPopup({
      type: "image",
    });

    $(".popup-video").magnificPopup({
      type: "iframe",
    });

    //========== VIDEO POPUP ENDS ============= //
    AOS.init();
    AOS.init({ disable: "mobile" });

    //========== NICE SELECT ============= //
    $("select").niceSelect();
  });

  //========== Slider 01 ============= //

  $(".slider-active-1").slick({
    draggable: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    fade: true,
    speed: 500,
    infinite: true,
    cssEase: "ease-in-out",
    touchThreshold: 100,
    arrows: true,
    dots: false,
    prevArrow: $(".prev-arow"),
    nextArrow: $(".next-arow"),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  //========== Testimonial 01 ============= //
  $("#testimoni1").owlCarousel({
    loop: true,
    margin: 30,
    responsiveClass: true,
    items: 3,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    navText: [
      '<img src="assets/img/icons/vl-arrow-left-1.1.svg" alt="">',
      '<img src="assets/img/icons/vl-angle-right-1.2.svg" alt="">',
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  //========== Team 01 ============= //
  $("#team1").owlCarousel({
    loop: true,
    margin: 30,
    responsiveClass: true,
    items: 4,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    navText: [
      '<img src="assets/img/icons/vl-tem-left-arrow-1.1.svg" alt="">',
      '<img src="assets/img/icons/vl-team-right-1.2.svg" alt="">',
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });

  // Home 2 Testimonial Active
  $("#vl-testimonial-active2").owlCarousel({
    loop: true,
    margin: 30,
    responsiveClass: true,
    items: 3,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    navText: [
      '<i class="fa-solid fa-angle-left"></i>',
      '<i class="fa-solid fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  // Home 2 Testimonial Active
  $("#vl-brand-active2").owlCarousel({
    loop: true,
    margin: 30,
    responsiveClass: true,
    items: 3,
    nav: false,
    dots: false,
    autoplay: true,
    slideTransition: "linear",
    autoplayTimeout: 3000,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,

    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });

  // Home 3 Testimonial (swiper)

  // Home 4 Hero Slider Active
  //========== Slider 01 ============= //

  $(".test").slick({
    draggable: true,
    autoplay: true,
    autoplaySpeed: 6000,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    fade: true,
    speed: 500,
    infinite: true,
    cssEase: "ease-in-out",
    touchThreshold: 100,
    arrows: true,
    dots: false,
    prevArrow: $(".prev-arow"),
    nextArrow: $(".next-arow"),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // Home 4 Testimonial Active
  $("#vl-brand-active4").owlCarousel({
    loop: true,
    margin: 30,
    responsiveClass: true,
    items: 3,
    nav: false,
    dots: false,
    autoplay: true,
    slideTransition: "linear",
    autoplayTimeout: 3000,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,

    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });

  // Home 4 Testimonial Active
  $("#vl-active4").owlCarousel({
    loop: true,
    margin: 30,
    responsiveClass: true,
    items: 3,
    nav: false,
    dots: false,
    autoplay: true,
    slideTransition: "linear",
    autoplayTimeout: 3000,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,

    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 1,
      },
    },
  });

  $(".banner-slick").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
  });

  // new banner
  $(".baner4-active").slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  });

  // Home 4 testimonial slider
  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav",
  });

  $(".slider-nav").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: true,
    arrows: true,
    focusOnSelect: true,
    prevArrow:
      '<span class="smarrow abarow arrow-right"><i class="fa-solid fa-angle-right"></i></span>',
    nextArrow:
      '<span class="smarrow abarow arrow-lft"><i class="fa-solid fa-angle-left"></i></span>',
  });

  // About testimonial slider
  $(".slider-for1").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav1",
  });

  $(".slider-nav1").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".slider-for1",
    dots: true,
    arrows: true,
    focusOnSelect: true,
    prevArrow:
      '<span class="smarrow smarrow2 abarow arrow-right"><i class="fa-solid fa-angle-right"></i></span>',
    nextArrow:
      '<span class="smarrow smarrow2 abarow arrow-lft"><i class="fa-solid fa-angle-left"></i></span>',
  });

  // testimonial 3
  $(".testimonial-nav").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: ".slider-testimonial",
    dots: false,
    loop: true,
    centerMode: true,
    focusOnSelect: true,
    arrows: false,
  });

  $(".slider-testimonial").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $(".testimonial-prev-arrow"),
    nextArrow: $(".testimonial-next-arrow"),
    fade: true,
    loop: true,
    asNavFor: ".testimonial-nav",
  });

  // Home 2 service Active Remove
  $(".vl-single-service-box").on("mouseenter", function () {
    $(this)
      .addClass("active")
      .parent()
      .siblings()
      .find(".vl-single-service-box")
      .removeClass("active");
  });

  // Home 2 service Active Remove
  $(".single-service-box").on("mouseenter", function () {
    $(this)
      .addClass("active")
      .parent()
      .siblings()
      .find(".single-service-box")
      .removeClass("active");
  });

  // Contact Inner Active Remove
  $(".iconbox").on("mouseenter", function () {
    $(this)
      .addClass("active")
      .parent()
      .siblings()
      .find(".iconbox")
      .removeClass("active");
  });

  // Home 4 Counter Box Active Remove
  $(".icon-box-bg").on("mouseenter", function () {
    $(this)
      .addClass("active")
      .parent()
      .siblings()
      .find(".icon-box-bg")
      .removeClass("active");
  });

  // Home 5 Counter Box Active Remove
  $(".single-counter-box").on("mouseenter", function () {
    $(this)
      .addClass("active")
      .parent()
      .siblings()
      .find(".single-counter-box")
      .removeClass("active");
  });

  $(".vl-single-work-box").on("mouseenter", function () {
    $(this)
      .addClass("active")
      .parent()
      .siblings()
      .find(".vl-single-work-box")
      .removeClass("active");
  });

  // Home 5 Blog Box
  $(".single-blog-box").on("mouseenter", function () {
    $(this)
      .addClass("active")
      .parent()
      .siblings()
      .find(".single-blog-box")
      .removeClass("active");
  });

  // Event Box Active/Remove
  $(".event-bg-flex").on("mouseenter", function () {
    $(this)
      .addClass("active")
      .parent()
      .siblings()
      .find(".event-bg-flex")
      .removeClass("active");
  });

  // lightbox
  lightbox.option({
    //'resizeDuration': 200,
    wrapAround: true,
    alwaysShowNavOnTouchDevices: false,
    disableScrolling: false,
    fadeDuration: 600,
    maxWidth: 500,
    resizeDuration: 700,
    positionFromTop: 250,
    showImageNumberLabel: false,
  });

  // Home 4 TeamMember Active
  $("#team4").owlCarousel({
    loop: true,
    margin: 30,
    responsiveClass: true,
    items: 3,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    navText: [
      '<i class="fa-solid fa-angle-left"></i>',
      '<i class="fa-solid fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });

  // Home 4 Event Active
  $("#event4").owlCarousel({
    loop: true,
    margin: 30,
    responsiveClass: true,
    items: 3,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    navText: [
      '<i class="fa-solid fa-angle-left"></i>',
      '<i class="fa-solid fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  $("#vl-team-active4").owlCarousel({
    loop: true,
    margin: 30,
    responsiveClass: true,
    items: 4,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    navText: [
      '<i class="fa-solid fa-angle-left"></i>',
      '<i class="fa-solid fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });

  // Brand Active Home 5
  $("#brandactive5").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    autoplay: true,
    slideTransition: "linear",
    autoplayTimeout: 3000,
    autoplaySpeed: 3000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });

  var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 5,
    freeMode: true,
    centeredSlides: true,
    watchSlidesProgress: true,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
    },
  });
  var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    centeredSlides: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".custom-next",
      prevEl: ".custom-prev",
    },
    thumbs: {
      swiper: swiper2,
    },
  });

  // counter up
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });

  //========== PROGRESS BAR AREA ============= //

  // page progress
  var progressPath = document.querySelector(".progress-wrap path");
  var pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition = "none";
  progressPath.style.strokeDasharray = pathLength + " " + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition =
    "stroke-dashoffset 10ms linear";
  var updateProgress = function () {
    var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var progress = pathLength - (scroll * pathLength) / height;
    progressPath.style.strokeDashoffset = progress;
  };
  updateProgress();
  $(window).scroll(updateProgress);
  var offset = 50;
  var duration = 550;
  jQuery(window).on("scroll", function () {
    if (jQuery(this).scrollTop() > offset) {
      jQuery(".progress-wrap").addClass("active-progress");
    } else {
      jQuery(".progress-wrap").removeClass("active-progress");
    }
  });
  jQuery(".progress-wrap").on("click", function (event) {
    event.preventDefault();
    jQuery("html, body").animate({ scrollTop: 0 }, duration);
    return false;
  });

  $(window).on("load", function (event) {
    setTimeout(function () {
      $(".preloader").fadeOut(500, function () {
        $(this).remove();
      });
    }, 500);
  });
})(jQuery);

//========== GSAP AREA ============= //

if ($(".text-anime-style-1").length) {
  let staggerAmount = 0.05,
    translateXValue = 0,
    delayValue = 0.5,
    animatedTextElements = document.querySelectorAll(".text-anime-style-1");

  animatedTextElements.forEach((element) => {
    let animationSplitText = new SplitText(element, { type: "chars, words" });
    gsap.from(animationSplitText.words, {
      duration: 1,
      delay: delayValue,
      x: 20,
      autoAlpha: 0,
      stagger: staggerAmount,
      scrollTrigger: { trigger: element, start: "top 85%" },
    });
  });
}

if ($(".text-anime-style-2").length) {
  let staggerAmount = 0.05,
    translateXValue = 20,
    delayValue = 0.5,
    easeType = "power2.out",
    animatedTextElements = document.querySelectorAll(".text-anime-style-2");

  animatedTextElements.forEach((element) => {
    let animationSplitText = new SplitText(element, { type: "chars, words" });
    gsap.from(animationSplitText.chars, {
      duration: 1,
      delay: delayValue,
      x: translateXValue,
      autoAlpha: 0,
      stagger: staggerAmount,
      ease: easeType,
      scrollTrigger: { trigger: element, start: "top 85%" },
    });
  });
}

if ($(".text-anime-style-3").length) {
  let animatedTextElements = document.querySelectorAll(".text-anime-style-3");

  animatedTextElements.forEach((element) => {
    //Reset if needed
    if (element.animation) {
      element.animation.progress(1).kill();
      element.split.revert();
    }

    element.split = new SplitText(element, {
      type: "lines,words,chars",
      linesClass: "split-line",
    });
    gsap.set(element, { perspective: 400 });

    gsap.set(element.split.chars, {
      opacity: 0,
      x: "50",
    });

    element.animation = gsap.to(element.split.chars, {
      scrollTrigger: { trigger: element, start: "top 90%" },
      x: "0",
      y: "0",
      rotateX: "0",
      opacity: 1,
      duration: 1,
      ease: Back.easeOut,
      stagger: 0.02,
    });
  });
}

if ($(".reveal").length) {
  gsap.registerPlugin(ScrollTrigger);
  let revealContainers = document.querySelectorAll(".reveal");
  revealContainers.forEach((container) => {
    let image = container.querySelector("img");
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        toggleActions: "play none none none",
      },
    });
    tl.set(container, { autoAlpha: 1 });
    tl.from(container, 1.5, { xPercent: -100, ease: Power2.out });
    tl.from(image, 1.5, {
      xPercent: 100,
      scale: 1.3,
      delay: -1.5,
      ease: Power2.out,
    });
  });
}

// donation amount
let selectedButton = null;

// Function to select predefined amounts
function selectAmount(button, amount) {
  if (selectedButton) {
    selectedButton.classList.remove("selected");
  }
  selectedButton = button;
  button.classList.add("selected");
  document.getElementById("displayAmount").textContent = `$${amount}`;
}
