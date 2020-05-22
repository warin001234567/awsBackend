var app = function(exports){
  
 'use strict';

  var events = {
    menuButtonClick: function(){
     var flag;
     
     $('.menu-button').click(function() {
      flag = !flag;

      if(flag === true) {
        
        $('body')
          .css("overflow", "hidden");
        
        $('.side-nav')
          .css("animation-name", "sidebar-in")
          .css("left", "0");

        setTimeout(function() {
          $('.menu-button')
            .css("color", "black");

          $('.menu-button')
            .removeClass("fa-bars")
            .addClass("fa-times");
          
          $('.arrow')
            .css("display", "none");
        }, 300);

      }else{
        
        $('body')
          .css("overflow", "visible");
     
        $('.side-nav')
          .css("animation-name", "sidebar-out")
          .css("left", "-100vw");

        $('.menu-button')
          .css("color", "grey")
          .removeClass("fa-times")
          .addClass("fa-bars");
      };
     })
    }
   }
  
  events.menuButtonClick();

}(window);