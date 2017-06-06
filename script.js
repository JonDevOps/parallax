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
    // console.log(centeredMouse);
    $('#sideTiger>img').css({
        left: centeredMouse.left / $('#sideTiger>img').data().scale,
        top: centeredMouse.top / $('#sideTiger>img').data().scale
    }); // .css remembers its initial position from parents like anchor point
    $('#pika>img').css({
        left: centeredMouse.left / $('#pika>img').data().scale,
        top: centeredMouse.top / $('#pika>img').data().scale
    });
    $('#tigerFront>img').css({
        left: centeredMouse.left / $('#tigerFront>img').data().scale,
        top: centeredMouse.top / $('#tigerFront>img').data().scale
    });
    $('#flower>img').css({
        left: centeredMouse.left / $('#flower>img').data().scale,
        top: centeredMouse.top / $('#flower>img').data().scale
    }); // this is what is making it move anchor to oiriginal position
}


function windowLoadHandler() {
    console.log('window loaded');
    $('body').mousemove(mouseMove); // mouseMove function getscalled
}
$(windowLoadHandler);
