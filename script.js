"use strict";

function mouseMove (event) {
    console.log(event.pageX, event.pageY);
    
}

function windowLoadHandler() {
    console.log('window loaded');
    $('body').mousemove(mouseMove); // mouseMove function getscalled
}
$(mouseEventHandler);
