$(document).ready(function () {

  $(document).ready(function () {


  // $(window).scroll(function () {
  //     if ($(this).scrollTop() > 20) {
          //change yes to no
          // $(".masthead2").hide(0).delay(500).slideDown(3000);
          // $(".masthead").delay(1000).hide(3000);
    // $(".navbar-brand").hide(0).delay(1000).fadeIn(1000);



    });


$(function(){
     var navMain = $(".navbar-collapse"); // avoid dependency on #id
     // "a:not([data-toggle])" - to avoid issues caused
     // when you have dropdown inside navbar
     navMain.on("click", "a:not([data-toggle])", null, function () {
         navMain.collapse('hide');
     });
 });




 $(document).ready(function() {
     var previousScroll = 0;

     $(window).scroll(function(){
        var currentScroll = $(this).scrollTop();
        if (currentScroll > previousScroll) {
     	   //Direction: Down
     	   $(".navbar").fadeOut();
         $(".navbar-brand").fadeOut();
        } else {
     	   //Direction: Up
     	   $(".navbar").fadeIn();
         $(".navbar-brand").fadeIn();
        }

        previousScroll = currentScroll;

        if (currentScroll == 0) {
     	   $(".navbar").css("position", "inherit");
        } else {
     	   $(".navbar").css("position", "fixed");
        }
     });
 });


// $('#btn1').click(function(){
// if ($(window).scrollTop() > 75 && $('.navbar').hasClass('scrolled') === true){
//
//   $('navbar-toggler').addClass('collapsed');
//
// $(".navbar").toggleClass('navbar-expand-lg');
// $(".navbar").removeClass('scrolled');
// $("#navbarSupportedContent").toggleClass(".navbar-collapse");
// $(".nav-item").show();
// $("#nav3").hide();
// $("#nav3").show();
// $(".navbar-brand").html("<img src='assets/img/logo1.svg'/>");
//
// }
//
// });
// var $img = "none"
// var $img1 = "assets/img/logo1.svg"
//
// $(window).scroll(function() {
//    var value = $(this).scrollTop();
//    if (value > 75){
//      $(".navbar-brand img:last-child").remove();
//    }
//
//    else if (value < 75){
//      $(".navbar-brand").html("<img src='assets/img/logo1.svg'/>");
//    }
//
// });
});
