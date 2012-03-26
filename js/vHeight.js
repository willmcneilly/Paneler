(function($,undefined){
  $.fn.vHeight = function(params) {
    
    var settings = $.extend(
      {},
      {
        dataAttName : "vheight",
        className : "vheight"  
      },
      params);


    vheightObjects = $.find('.' + settings.className);

    getViewportHeight = function() {
      viewportHeight = $(window).height();
      return viewportHeight;
    }

    calcNewHeight = function( percentHeight, viewportHeightPixels) {
      return (percentHeight / 100) * viewportHeightPixels;
    }

    setNewHeight = function() {
      viewportHeight = getViewportHeight();
      $(vheightObjects).each(function(){
        percentHeight = $(this).data(settings.dataAttName);
        newHeightInPixels = calcNewHeight(percentHeight, viewportHeight);
        $(this).height(newHeightInPixels);
      });
    }

    $(window).bind("load resize", function(){
      setNewHeight();
    });
    
  }
})(jQuery);



(function($,undefined){
  $.fn.expandable = function(params) {
    
    var settings = $.extend(
      {},
      {
        className : "expandable"  
      },
      params);

    expandableObjects = $('.' + settings.className);
    
    addExpandableLink = function(expandableObject) {
      expandableObject.css({'position' : 'relative'});
      $('<i>').appendTo(expandableObject)
              .addClass('icon-resize-full expandableIcon')
              .css({
                'position' : 'absolute',
                'top' : '10px',
                'right' : '10px'
              });
    }

    toggleOnIcon = function(icon) {
      icon.removeClass('icon-resize-full').addClass('icon-resize-small');
    }

    toggleOffIcon = function(icon) {
      icon.removeClass('icon-resize-small').addClass('icon-resize-full');
    }

    expandPane = function(pane, viewportHeight, viewportHeight) {
      console.log(pane);
      pane.css({
        'position': 'absolute',
        'top' : '0px',
        'left' : '0px',
        'width' : viewportWidth + 'px',
        'height' : viewportHeight + 'px',
        'z-index' : '100000' 

      });
    }

    contractPane = function(pane, startingHeight, startingWidth) {
      console.log(pane);
      pane.css({
        'position': 'relative',
        'top' : '',
        'left' : '',
        'width' : startingWidth + 'px',
        'height' : startingHeight + 'px',
        'z-index' : '' 
      });
    }

    getViewportHeight = function() {
      viewportHeight = $(window).height();
      return viewportHeight;
    }

    getViewportWidth = function() {
      viewportWidth = $(window).width();
      return viewportWidth;
    }

    makeExpandable = function() {

      viewportHeight = getViewportHeight();
      viewportWidth = getViewportWidth();

      $(expandableObjects).each(function(key, currentExpandableObject){
        currentExpandableObject = $(currentExpandableObject);
 
        addExpandableLink(currentExpandableObject);
        expandableIcon = currentExpandableObject.find('.expandableIcon');


        startingWidth = currentExpandableObject.width();
        startingHeight = currentExpandableObject.outerHeight();
        console.log(startingHeight);

        expandableIcon.toggle( 
          function(){
            expandPane(currentExpandableObject, viewportHeight, viewportWidth);
            toggleOnIcon($(this));
          }, 
          function(){
            contractPane(currentExpandableObject, startingHeight, startingWidth);
            toggleOffIcon($(this));

        }); 

      });
    }

    makeExpandable();
  }
})(jQuery);