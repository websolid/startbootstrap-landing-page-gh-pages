$(window).scroll(function onScroll() {
  if ($(window).scrollTop() > 75 ) {

    $('.masthead').css('height', '110%');


}
else if ($(window).scrollTop() < 75){
      $('.masthead').css('height', '80%');


    }



});
