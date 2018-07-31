"use strict";

function mouseMove (event) {
    // console.log(event.pageX, event.pageY);
    const windowWidth = $(window).width();
    const windowHeight = $(window).height();
    const windowCenter = {
        left: windowWidth/2,
        top: windowHeight/2 
    };
    const centeredMouse = {
        left: event.pageX - windowCenter.left,
        top: event.pageY - windowCenter.top
    };

    $('.floating>div>img').each(function( index, element ){
     $(element).css({
        left: centeredMouse.left / $(element).data().scale,
        top: centeredMouse.top / $(element).data().scale
      });   
    });
}


function windowLoadHandler() {
    console.log('window loaded');
    $('body').mousemove(mouseMove); // mouseMove function gets called
}
$(windowLoadHandler);
