$(function() {

    'use strict';

    //************************************************************
    //MENU TOGGLE
    //************************************************************

    var $headerMenuButton = $('.header__button-menu'),
        $menu = $('.menu');

    $headerMenuButton.click(function() {
        $(this).toggleClass('active');
        $menu.fadeToggle(300).css('display', 'flex');
    });

    //Выключение при клике по ссылке
    $menu.on('click', 'ul a', function() {
        $headerMenuButton.removeClass('active');
        $menu.fadeOut(300);
    });

    //*******************************************************
    //SCROLL
    //*******************************************************

    $('.scroll').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: $($(this).attr('href')).offset().top }, 600, 'swing');
    });

    /*******************************************************/
    //POPUP
    /*******************************************************/

    $('.popup-with-move-anim').magnificPopup({
       type: 'inline',
       fixedContentPos: false,
       fixedBgPos: true,
       overflowY: 'auto',
       closeBtnInside: true,
       preloader: false,
       midClick: true,
       removalDelay: 300,
       mainClass: 'my-mfp-slide-bottom'
    });

});
