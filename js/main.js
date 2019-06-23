/*jQuery*/
jQuery.noConflict();
(function ($) {
    // USE STRICT
    "use strict";

    var body = $('body');
    var html = $('html');

    // Navbar menu dropdown
    $('.navbar-mobile .navbar-menu .drop .arrow').on('click', function (e) {
        $(this).siblings('.drop-menu').slideToggle(200, 'linear');
        $(this).toggleClass('clicked');
        e.stopPropagation();
    });

    // Navbar vertial and Navbar mobile
    var headerNavbarMobile = $('.js-navbar-mobile');
    var navbarMobileBtn = $('.js-toggle-navbar-mobile');


    navbarMobileBtn.on('click', function () {
        headerNavbarMobile.slideToggle('fast');
        $(this).toggleClass("is-active");
    });

    $(window).on('click', function (event) {
        if (!$(event.target).closest(headerNavbarMobile).length && !$(event.target).closest(navbarMobileBtn).length) {
            headerNavbarMobile.slideUp('fast');
            navbarMobileBtn.removeClass("is-active");
        }
    });

    // Couter up
    var counterUp = $(".counterUp");
    if (counterUp) {
        counterUp.counterUp({
            delay: 10,
            time: 1000
        });
    }


    // Video player plugin
    $('.js-play-youtube').on('click', function(ev) {
        var videoWrapper = $(this).siblings('.js-video-youtube');
        videoWrapper.children('iframe')[0].src += "rel=0&autoplay=1";
        videoWrapper.css('opacity', '1');
        $(this).fadeOut('fast');
        ev.preventDefault();
    });

    $('.js-set-bg-blog-thumb').each(function(){
        var imagesURLs = $(this).find('.video-photo').attr('src');
        $(this).css('background-image', 'url('+ imagesURLs + ')');
    });


    // Input number controller
    $('.quantity').each(function() {
        var spinner = $(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.increase'),
            btnDown = spinner.find('.decrease'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.on('click', function() {
            var oldValue = parseFloat(input.val());
            var newVal = undefined;
            if (oldValue >= max) {
                newVal = oldValue;
            } else {
                newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.on('click', function() {
            var oldValue = parseFloat(input.val());
            var newVal = undefined;
            if (oldValue <= min) {
                newVal = oldValue;
            } else {
                newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

    });

    // Navbar fixed when scroll
    var header = $(".js-header");
    var headerOffset = header.offset();
    header.clone(true).appendTo(".header-desktop").addClass('unsticky cloned').removeClass('js-header');
    var headerClone = $(".header-bar.cloned");

    $(window).on("scroll", function () {
        if ($(this).scrollTop() > (headerOffset.top + header.height())) {
            headerClone.addClass('sticky').removeClass('unsticky');
        } else {
            headerClone.removeClass("sticky").addClass('unsticky');
        }
    });


    /*ISOTOPE*/
    var $topeContainer = $('.isotope-grid');
    var $filter = $('.filter-tope-group');

    // filter items on button click
    $filter.each(function () {
        $filter.on('click', 'li span', function () {
            var filterValue = $(this).attr('data-filter');
            $topeContainer.isotope({filter: filterValue});
        });
        var $buttonGroup = $('.filter-tope-group');
        $buttonGroup.on('click', 'li', function () {
            $buttonGroup.find('.active').removeClass('active');
            $(this).addClass('active');
        });
    });

    // init Isotope
    $(window).on('load', function () {
        var $grid = $topeContainer.each(function () {
            $(this).isotope({
                itemSelector: '.isotope-item',
                percentPosition: true,
                animationEngine : 'best-available',
                masonry: {
                    columnWidth: '.isotope-item'
                }
            });
        });
    });



    /* owl custom*/
    var owlSelector = $('.owl-carousel');
    owlSelector.each(function () {
        var option = {
            items: 3,
            margin: 0,
            loop: false,
            center: false,
            mousedrag: true,
            touchdrag: true,
            pulldrag: true,
            autowidth: false,
            nav: false,
            navtext: ["<i class='fa fa-chevron-left'></i>", "<i class='fa" +
            " fa-chevron-right'></i>"],
            dots: false,
            dotsdata: false,
            autoplay: false,
            smartspeed: 650,
            animateout: null,
            animatein: null,
            xs: 1,
            sm: 2,
            md: 2,
            lg: 3
        };

        for (var k in option) {
            if (option.hasOwnProperty(k)) {
                if ($(this).attr('data-carousel-' + k) != null) {
                    option[k] = $(this).data('carousel-' + k);
                }
            }
        }


        $(this).owlCarousel({
            margin: option.margin,
            loop: option.loop,
            center: option.center,
            mouseDrag: option.mousedrag,
            touchDrag: option.touchdrag,
            pullDrag: option.pulldrag,
            nav: option.nav,
            navText: option.navtext,
            dots: option.dots,
            dotsData: option.dotsdata,
            autoplay: option.autoplay,
            smartSpeed: option.smartspeed,
            animateIn: option.animatein,
            animateOut: option.animateout,
            autoWidth: option.autowidth,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: option.xs
                },
                // breakpoint from 768 up
                480: {
                    items: option.sm,
                    autoplay: false,
                    touchDrag: false,
                    pullDrag: false
                },
                // breakpoint from 768 up
                768: {
                    items: option.md
                },
                992: {
                    items: option.lg
                },
                1200: {
                    items: option.items
                }
            }
        });

    });

    // MatchHeight
    var matchHeigh = $('.matchHeigh');
    if (matchHeigh) {
       matchHeigh.matchHeight();
    }

    owlSelector.on('refreshed.owl.carousel', function () {
        $.fn.matchHeight._update();
    });

    // Magnific Popup
    var galleryPhoto = $('.gallery-photo');
    galleryPhoto.magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        width: 550
    });


    // Chosen Select Custom
    var config = {
        '.chosen-select.no-search': {disable_search_threshold: 10, width: "100%"},
        '.chosen-select': {width: "100%"}
    };

    for (var selector in config) {
        if (config.hasOwnProperty(selector)) {
            $(selector).chosen(config[selector]);
        }
    }

    // Tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // Add to cart
    var actionAddToCart = $('.js-notify-add-cart');

    actionAddToCart.each(function() {
        $(this).on('click', function(e) {
            var productName = $(this).closest('.product').find('.title a').text();
            e.preventDefault();
            notifyAddToCart(productName);
        });
    });


    function notifyAddToCart(productName) {
        $.notify({
            title: productName,
            message: "is added to card"
        },{
            type: 'success',
            animate: {
                enter: 'animated fadeInUp',
                exit: 'animated fadeOut'
            },
            placement: {
                from: "bottom",
                align: "right"
            },
            offset: 20,
            spacing: 10,
            z_index: 1031,
            template: '<div data-notify="container" class="col-xs-11 col-sm-3 notify-product alert alert-{0}" role="alert">' +
            '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
            '<span data-notify="icon"></span> ' +
            '<span data-notify="title">{1}</span> ' +
            '<span data-notify="message">{2}</span>' +
            '<div class="progress" data-notify="progressbar">' +
            '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0;"></div>' +
            '</div>' +
            '<a href="{3}" target="{4}" data-notify="url"></a>' +
            '</div>'
        });
    }

    function notifyRemoveCart(productName) {
        $.notify({
            title: productName,
            message: "is removed to card"
        },{
            type: 'danger',
            animate: {
                enter: 'animated fadeInUp',
                exit: 'animated fadeOut'
            },
            placement: {
                from: "bottom",
                align: "right"
            },
            offset: 20,
            spacing: 10,
            z_index: 1031,
            template: '<div data-notify="container" class="col-xs-11 col-sm-3 notify-product alert alert-{0}" role="alert">' +
            '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
            '<span data-notify="icon"></span> ' +
            '<span data-notify="title">{1}</span> ' +
            '<span data-notify="message">{2}</span>' +
            '<div class="progress" data-notify="progressbar">' +
            '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0;"></div>' +
            '</div>' +
            '<a href="{3}" target="{4}" data-notify="url"></a>' +
            '</div>'
        });
    }

    // --------------------------------------------------
    // Back To Top
    // --------------------------------------------------
    var offset = 450;
    var duration = 500;
    var upToTop = $("#up-to-top");
    upToTop.hide();
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > offset) {
            upToTop.fadeIn(duration);
        } else {
            upToTop.fadeOut(duration);
        }
    });

    upToTop.on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
    });

    // Loader

    $(".animsition").animsition({
        inClass: 'fade-in',
        outClass: 'fade-out',
        inDuration: 800,
        outDuration: 800,
        linkElement: 'a:not([target="_blank"]):not([href^="#"]):not([class^="chosen-single"])',
        loading: true,
        loadingParentElement: 'html',
        loadingClass: 'animsition-loading-1',
        loadingInner: '<div class="cp-spinner cp-eclipse"></div>',
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: [ 'animation-duration', '-webkit-animation-duration'],
        overlay : false,
        overlayClass : 'animsition-overlay-slide',
        overlayParentElement : 'html',
        transition: function(url){ window.location.href = url; }
    });

})(jQuery);
