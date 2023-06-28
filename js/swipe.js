var swiper1 = new Swiper(".swiper1", {
  // speed: 100, //500
  // spaceBetween: 30,
  direction: "horizontal",
  loop: true,
  slidesPerView: 2,
  breakpoints: {
    1066: {
        slidesPerView: 4,
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
},


// And if we need scrollbar
scrollbar: {
    el: ".swiper-scrollbar",
},
  // pagination: {
  //   clickable: true,
  //   el: '.site-hero__swiper-pagination',
  // },
  autoplay: {
    delay: 1000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
});


var swiper2 = new Swiper(".swiper2", {
  // speed: 500,
  // spaceBetween: 10,
  // pagination: {
  //   clickable: true,
  //   el: '.site-hero__swiper-pagination',
  // },

  direction: "horizontal",
  loop: true,
  slidesPerView: 1.53,
  // autoplay: {
  //   delay: 1000,
  //   stopOnLastSlide: false,
  //   disableOnInteraction: false,
  // },
});
