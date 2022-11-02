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
 $(document).ready(function(){
 $(".navbar").hover(function(){
   $('#brand').css({"opacity": "0.5", "transition-duration": "1s"})
   }, function(){
   $('#brand').css("opacity", "1");
 });
});

 $(document).ready(function(){
 $(".nav-item").hover(function(){
   $('#brand').css({"opacity": "0.3", "transition-duration": "1s"})
   $(".navbar-brand").css({"color": "rgba(115, 134, 120,1)", "transition-duration": "0.5s"})
   }, function(){
   $('#brand').css("opacity", "1");
   $(".navbar-brand").css({"color": "rgba(169, 195, 182,1)", "transition-duration": "0.5s"})
 });
});



 $(document).ready(function(){
 $("img").hover(function(){
   $('.row').addClass("a");
   $("#portfolio").css({"backgroundColor": "rgba(115, 134, 120,1)", "transition-duration": "0.5s"})
   $(".navbar-brand").css({"color": "rgba(115, 134, 120,1)", "transition-duration": "0.5s"})
   $("#brand").css({"color": "rgba(115, 134, 120,1)", "transition-duration": "0.5s"})
   }, function(){
   $('.row').removeClass("a")
     $("#portfolio").css({"backgroundColor": "rgba(169, 195, 182,1)", "transition-duration": "0.5s"})
     $(".navbar-brand").css({"color": "rgba(169, 195, 182,1)", "transition-duration": "0.5s"})
 });
});

$(document).ready(function(){
$(".btn").hover(function(){
 $(".navbar-brand").css({"color": "rgba(115, 134, 120,1)", "transition-duration": "0.5s"})
 }, function(){
   $(".navbar-brand").css({"color": "rgba(169, 195, 182,1)", "transition-duration": "0.5s"})
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
