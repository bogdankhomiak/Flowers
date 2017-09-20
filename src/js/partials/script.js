"use strict";
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        items: 1
    });
    var owl = $('.owl-carousel');
    owl.owlCarousel();
// Go to the next item
    $('.slider-right-js').click(function () {
        owl.trigger('next.owl.carousel');
    });
    $('.slider-left-js').click(function () {
        owl.trigger('prev.owl.carousel');
    })
});