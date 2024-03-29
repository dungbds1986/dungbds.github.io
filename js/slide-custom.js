(function ($) {
    // USE STRICT
    "use strict";

    $(document).ready(function () {

        var slide = $('.js-slide');

        slide.each(function () {
            var option = {
                layout: 'auto',
                delay: 5000,
                height: 500,
                arrows: true,
                bullets: true,
                stoploop: 'on',
                stopafterloops: 0,
                stopatslide: 1
            };
            for (var k in option) {
                if (option.hasOwnProperty(k)) {
                    if ($(this).attr('data-slide-' + k) != null) {
                        option[k] = $(this).data('slide-' + k);
                    }
                }
            }

            $(this).show().revolution({
                /* options are 'auto', 'fullwidth' or 'fullscreen' */
                responsiveLevels: [1600, 1200, 992, 480],
                gridwidth:[1170, 970, 992, 480],
                gridheight:[option.height, 500, 500, 400],
                sliderLayout: option.layout,
                delay: option.delay,
                spinner: 'spinner2',
                stopLoop: option.stoploop,
                stopAfterLoops: option.stopafterloops,
                stopAtSlide: option.stopatslide,
                /* basic navigation arrows and bullets */
                navigation: {
                    onHoverStop: "off",
                    arrows: {
                        enable: option.arrows,
                        hide_onleave: true
                    },

                    bullets: {
                        enable: option.bullets,
                        style: 'zeus',
                        hide_onleave: false,
                        h_align: "center",
                        v_align: "bottom",
                        h_offset: 0,
                        v_offset: 20,
                        space: 5
                    }
                }
            });
        });

    });

})(jQuery);