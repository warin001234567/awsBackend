$(document).ready(function() {
        $(window).scroll(function() {
          if ($(this).scrollTop() > 800) {
            $('.logo').css('opacity', 0);
          } else {
            $('.logo').css('opacity', 1);
          }
        });
});