jQuery(function($) {
    'use strict',

        // accordian
        $('.accordion-toggle').on('click', function() {
            $(this).closest('.accordion').children().each(function() {
                $(this).find('>.card-header').removeClass('active');
            });

            $(this).closest('.card-header').toggleClass('active');
        });


    //Initiat WOW JS
    new WOW().init();
    // portfolio filter
    /*$(window).load(function() {
        $('.preloader').delay(500).fadeOut('slow');
        $('body').delay(500).css({'overflow':'visible'});

    });*/

    //goto top
    $('.gototop').click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("body").offset().top
        }, 500);
    });


    // Comprobar si estamos, al menos, 100 px por debajo de la posición top
    // para mostrar o esconder el botón
    $(window).scroll(function() {

        if ($(this).scrollTop() > 100) {

            $('.scroll-to-top').fadeIn();

        } else {

            $('.scroll-to-top').fadeOut();

        }

    });


    // al hacer click, animar el scroll hacia arriba
    $('.scroll-to-top').click(function(e) {

        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 800);

    });

    // Menu scroll
    var nav = $('nav');
    pos = nav.offset();

    //desplazamiento comico
    lis = $('.navbar-nav').children();
    links = lis.children();
    links.click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top - 125;
                $('html,body').animate({ scrollTop: targetOffset }, 1700);
                return false;
            }
        }
    });

    //Desplazamiento desde el footer

    lis2 = $('.menuFooter').children();
    linksF = lis2.children();
    linksF.click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname) {

            var $target = $(this.hash);

            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');

            if ($target.length) {

                var targetOffset = $target.offset().top - 125;

                $('html,body').animate({ scrollTop: targetOffset }, 1700);

                return false;

            }

        }

    });


    //Carousel of testimonials
    $(".owl-carousel").owlCarousel({
        autoPlay: 3000,
        pagination: true,
        navigation: false,
        items: 1,
        addClassActive: true,
        itemsCustom : [
            [0, 1],
            [320, 1],
            [480, 2],
            [700, 1],
            [768, 1],
            [1024, 1],
            [1200, 1],
            [1400, 1],
            [1600, 1]
        ],
    });

    $('.slider_inner').camera({
        loader: false,
        loaderColor: 'white',
        loaderBgColor: '#222222',
        loaderOpacity: 1,
        loaderPadding: 0,
        navigation: false,
        autoPlay:false,
        time: 4000,
        playPause: false,
        thumbnails: false,
        hover: false,
        minHeight: '500px',
        pagination:false,


    });




});