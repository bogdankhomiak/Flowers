"use strict";
$(document).ready(function () {
    var heightMenu = $(".menu").outerHeight();
    var menuItem = $(".menu__link");
    menuItem.click(function () {
        $(this).attr("href").scrollTop();
    });
});