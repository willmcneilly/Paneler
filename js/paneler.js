/*(function($,undefined){
  $.fn.setHeight = function(params) {
    //use extend to merge input parameters and defaults.
    //use an empty object literal first as it is
    //overwritten by the extend method.
    var settings = $.extend(
      {},
      {
        heightPercent : 100,
        className : "vHeight" 
      },
      params);

    //return new height of object in pixels relative to the viewport
    newHeight = function( percentHeight, viewportHeightPixels) {
      return (percentHeight / 100) * viewportHeightPixels;
    }

    //get all instances of vHeight
    vHeightObjects =  function( ) {
      return $('*[class^=vheight]');
    }


    if(typeof(settings.heightPercent) === 'number' && (settings.heightPercent <= 100 && settings.heightPercent >= 0) ) {
      
      console.log(vHeightObjects());

      var viewportHeight = $(window).height();
      this.height(newHeight(settings.heightPercent, viewportHeight) + 'px');

      var currentObject  = this;
      
      $(window).resize(function() {
        viewportHeightResized = $(window).height();
        currentObject.height(newHeight(settings.heightPercent, viewportHeightResized) + 'px');
      });
    }
  }
})(jQuery);
*/
/*
(function($,undefined){
  $.fn.setHeight = function(params) {
    //use extend to merge input parameters and defaults.
    //use an empty object literal first as it is
    //overwritten by the extend method.
    var settings = $.extend(
      {},
      {
        heightPercent : 100,
        className : "vheight" 
      },
      params);


    viewportHeight = function() {
      return viewportHeight = $(window).height();
    }

    //return new height of object in pixels relative to the viewport
    newHeight = function( percentHeight, viewportHeightPixels) {
      return (percentHeight / 100) * viewportHeightPixels;
    }

    //get all instances of vHeight
    vHeightObjects =  function( ) {
      return $('*[class*=' + settings.className + ']');
    }

    //strip percentages and return new height
    stripPercentages = function(vHeightObjects) {
      viewportHeight = viewportHeight();
      console.log(viewportHeight);
      
        $(vHeightObjects).each(function(){
          s = $(this).attr('class');
          function extractNumbers(s) {
            var m = /vheight(\d+)/.exec(s);
            return m ? [+m[1]] : null;
          }
          percentHeight = extractNumbers(s);

          heightInPixels = newHeight(percentHeight,viewportHeight);
          $(this).height(heightInPixels + 'px');
          
        });
    }



    $(window).bind("load resize", function(){
      stripPercentages(vHeightObjects());

    }); 


    $(window).resize(function() {
        viewportHeightResized = $(window).height();
        currentObject.height(newHeight(settings.heightPercent, viewportHeightResized) + 'px');
      });
    
  }
})(jQuery);*/

