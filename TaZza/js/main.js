
 //window in scroll
 window.onscroll = _ => {
  scrollTop()
}

//make all a scroll slower
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 2000, function(){
        window.location.hash = hash;
      });
    }
  });
});

// home carousel
$('.home .owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  autoplay:true,
  items:1
})

// carousel section
$('.carousel-1 .owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  autoplayTimeout:2000,
  autoplay:true,
  responsive:{
      0:{
          items:1
      },
      600:{
        items:2
      },
      1000:{
        items:4
      }
  }
})

// partners section
$('.partners .owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  autoplayTimeout:2000,
  nav:true,
  autoplay:true,
  responsive:{
      0:{
          items:2
      },
      1000:{
        items:4
      }
  }
})
// testimonial section
$('.testimonial .owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  autoplayTimeout:4000,
  dots:false,
  autoplay:true,
  items:1
})

//scroll top btn
function scrollTop() {
  if(window.scrollY >= 600){
    document.querySelector(".scrollToTop").classList.add("show")
  }else {
    document.querySelector(".scrollToTop").classList.remove("show")
  }
}

