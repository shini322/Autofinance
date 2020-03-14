   $(".review_slider .row").slick({
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
  $(".header_slider").slick({
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
  $(".icon.nav-icon-5").click(function() {
    $(this).toggleClass("open");
    $(this).toggleClass("clickMenuFive");
    $(".header_burger_menu").slideToggle();
});
$(".header_burger_button_close button").click(function() {
  $(this).toggleClass("close");
  $(this).toggleClass("clickMenuFive");
  $(".header_burger_menu").slideToggle();
});
var num = 30;
$(window).bind('scroll', function() {
  if ($(window).scrollTop() > num) {
    $('.wrapper .header').addClass('fixed').addClass('slideDown'); 
    $('.wrapper .header').addClass('header_fixed').addClass('slideDown');   
     
  } else {
    $('.wrapper .header').removeClass('fixed').removeClass('slideDown');
    $('.wrapper .header').removeClass('header_fixed').addClass('slideDown');    
  }
});
$(window).bind('scroll', function() {
  if ($(window).scrollTop() > num) {
    $('.wrapper_catalog_auto .header').addClass('fixed').addClass('slideDown'); 
    $('.wrapper_catalog_auto .header').addClass('header_fixed').addClass('slideDown');   
     
  } else {
    $('.wrapper_catalog_auto .header').removeClass('fixed').removeClass('slideDown');
    $('.wrapper_catalog_auto .header').removeClass('header_fixed').addClass('slideDown');    
  }
});
$(window).bind('scroll', function() {
  if ($(window).scrollTop() > num) {
    $('.wrapper_contacs_auto .header').addClass('fixed').addClass('slideDown'); 
    $('.wrapper_contacs_auto .header').addClass('header_fixed').addClass('slideDown');   
     
  } else {
    $('.wrapper_contacs_auto .header').removeClass('fixed').removeClass('slideDown');
    $('.wrapper_contacs_auto .header').removeClass('header_fixed').addClass('slideDown');    
  }
});
$(window).bind('scroll', function() {
  if ($(window).scrollTop() > num) {
    $('.wrapper_services_auto .header').addClass('fixed').addClass('slideDown'); 
    $('.wrapper_services_auto .header').addClass('header_fixed').addClass('slideDown');   
     
  } else {
    $('.wrapper_services_auto .header').removeClass('fixed').removeClass('slideDown');
    $('.wrapper_services_auto .header').removeClass('header_fixed').addClass('slideDown');    
  }
});
$( function() {
  var handle = $( "#price" );
  $( ".calculator_slider_prise").slider({
    range: "max",
    min: 1,
    max: 1000,
    value: 700,
    slide: function( event, ui ) {
      $( "#price" ).val( ui.value + " 000 руб.");
    }     
  });
  $( "#price" ).val( $( ".calculator_slider_prise" ).slider( "value" ) +" 000 руб." );
} );

$( function() {
  var handle = $( "#days" );
  $( ".calculator_slider_days").slider({
    range: "max",
    min: 1,
    max: 60,
    value: 25,
    slide: function( event, ui ) {
      $( "#days" ).val( ui.value + " дней");
    }     
  });
  $( "#days" ).val( $( ".calculator_slider_days" ) .slider( "value" ) +" дней");
} );

$(".town").ready(function() {
  $('select').niceSelect();
});

$(".header_burger_menu.town").ready(function() {
  $('select').niceSelect();
});
$(".catalog_auto.filters_item_select").ready(function() {
  $('select').niceSelect();
});


  