/* $('.slider').slick({
  infinite:true
})

$(document).ready(function () {
  $('.single-item').slick({
      dots: true,
      vertical: true,
      verticalSwiping: true,
      adaptiveHeight: true,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 7000,
  });
  $('.multiple-items').slick({
      dots: true,
      infinite: true,
      variableWidth: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 7000,
  });
}); */

/* const swiper = new Swiper('.slider', {
  // Optional parameters
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
}); */

$(document).ready(function(){
  $('.slider').slick({
    arrows:true,
    dots:true,
  
  });
});
