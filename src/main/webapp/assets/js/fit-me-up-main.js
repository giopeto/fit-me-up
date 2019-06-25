jQuery(function ($) {

    'use strict';

    (function () {
        var galleryIsLoaded = false;

        // -------------------------------------------------------------
        // smoothscroll.js
        // Animated scrolling / Scroll Up
        // -------------------------------------------------------------
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

        // -------------------------------------------------------------
        // Load gallery when #gallery section is visible on screen
        // -------------------------------------------------------------
        $(window).scroll(function() {
            if(!galleryIsLoaded && isOnScreen($('#trainings'))) {
                $('#gallery-placeholder').remove();
                $('#gallery').load("gallery.html");
                galleryIsLoaded = true;
            }
        });

        function isOnScreen(element) {
            var curPos = element.offset();
            var curTop = curPos.top - $(window).scrollTop();
            var screenHeight = $(window).height();
            return (curTop > screenHeight) ? false : true;
        }

    }());

});
