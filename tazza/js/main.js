let swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  slidesPerView: 3,
  loop:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
let swiper1 = new Swiper(".mySwiper-1", {
  slidesPerView: 2,
  spaceBetween: 0,
  loop:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var swiper2 = new Swiper(".mySwiper2", {
  watchSlidesProgress: true,
  spaceBetween: 10,
  loop:true,
  slidesPerView: 2,
});

$(document).ready(function () {
  $(".sk-circle").fadeOut(3500, ()=> {
    $("#spin").fadeOut(2900, () => {
      $('body').css("overflow",'auto');
    })
  })
});