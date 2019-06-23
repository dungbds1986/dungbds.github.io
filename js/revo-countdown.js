(function ($) {
    // USE STRICT
    "use strict";

    $(document).ready(function () {

        var slide = $('.js-slide');
        var revoAPI = slide.show().revolution({
            /* options are 'auto', 'fullwidth' or 'fullscreen' */
            responsiveLevels: [1600, 1200, 992, 480],
            gridwidth:[1170, 970, 992, 480],
            sliderLayout: 'fullscreen',
            delay: 5000,
            spinner: 'spinner2',
            /* basic navigation arrows and bullets */
            navigation: {
                onHoverStop: "off",
                arrows: {
                    enable: false,
                    hide_onleave: true
                },

                bullets: {
                    enable: false,
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


        var t = 31*24*60*60*1000 + 16*60*60*1000 + 28*60*1000 + 18*1000;
        var targetdate =  new Date().getTime() + t;


        var slidechanges = [{days: 0, hours: 0, minutes: 0, seconds: 0, slide: 1}];


        tp_countdown(revoAPI, targetdate, slidechanges);


    });

})(jQuery);