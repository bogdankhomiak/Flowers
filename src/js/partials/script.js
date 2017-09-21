"use strict";
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        items: 1
    });
    var owl = $('.owl-carousel');
    owl.owlCarousel();
    $('.slider-right-js').click(function () {
        owl.trigger('next.owl.carousel');
    });
    $('.slider-left-js').click(function () {
        owl.trigger('prev.owl.carousel');
    });
    $(function() {

        $('.tabs__items').on('click', 'li:not(.active)', function() {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('.tabs').find('.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });

    });
});