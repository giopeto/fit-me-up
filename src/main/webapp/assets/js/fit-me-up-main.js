jQuery(function ($) {

    'use strict';

    // -------------------------------------------------------------
    // Animated scrolling / Scroll Up
    // -------------------------------------------------------------
    
    (function () {
        $('a[href*=\\#]').bind("click", function(e) {
            if (e.currentTarget.className !== 'nav-link') {
                return;
            }
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 80
            }, 1000);
            e.preventDefault();
        });
    }());

});
