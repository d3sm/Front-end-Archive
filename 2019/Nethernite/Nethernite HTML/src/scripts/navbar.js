$(document).ready(function(){
    let touch = $('#hamburger');
    let menu = $('.header-navbar');

    $(touch).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    })

    $(window).resize(function(){
        let wid = $(window).width();
        if(wid > 760 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    })
})