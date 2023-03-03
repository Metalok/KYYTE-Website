$(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $('header').addClass("scroll-custom");
      }
      else{
        $('header').removeClass("scroll-custom");
      }
    });