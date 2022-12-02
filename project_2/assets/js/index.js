$('.slider').slick({
  infinite:true
})



$(document).ready(function () {
  $('.single-item').slick({
      dots: true,
      vertical: true,
      verticalSwiping: true,
      adaptiveHeight: true,
      arrows: false,
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
});