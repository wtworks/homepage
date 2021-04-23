/*-----------------------------------------------------------------------------------

    Theme Name: Fabrex - Restaurant and Cafe
    Description: Onepage Restaurant and Cafe Template
    Author: Chitrakoot Web

    /* ----------------------------------

    JS Active Code Index
            
        01. Preloader
        02. scrollIt
        03. Add Class Reveal for Scroll to Top
        04. ScrollUp Active Code
        05. Sidemenu toggle
        06. Navbar scrolling background
        07. Parallax
        08. Wow animation - on scroll
        09. Magnific-popup
        10. OurstoryPopup
        11. Clockpicker
        12. Horizontal Tab
        13. Window When Loading
        14. FullScreenHeight Resize function
        15. OwlCarousel Slider 

        
    ---------------------------------- */    

$(function() {

    "use strict";

    var wind = $(window);

        /*------------------------------------
            01. Preloader
        --------------------------------------*/

        $('#preloader').fadeOut('normall', function() {
            $(this).remove();
        });


        /*------------------------------------
            02. scrollIt
        --------------------------------------*/

        $.scrollIt({
          upKey: 38,                // key code to navigate to the next section
          downKey: 40,              // key code to navigate to the previous section
          easing: 'swing',          // the easing function for animation
          scrollTime: 600,          // how long (in ms) the animation takes
          activeClass: 'active',    // class given to the active nav element
          onPageChange: null,       // function(pageIndex) that is called when page is changed
          topOffset: -70            // offste (in px) for fixed top navigation
        });

        /*------------------------------------
            03. Add Class Reveal for Scroll to Top
        --------------------------------------*/

        wind.on('scroll', function() {
            if (wind.width() > 600) {
                if (wind.scrollTop() > 600) {
                    $('#back-to-top').addClass('reveal');
                } else {
                    $('#back-to-top').removeClass('reveal');
                }
            }
        });

        /*------------------------------------
            04. ScrollUp Active Code
        --------------------------------------*/

        $('#back-to-top').on('click', function() {
            $("html, body").animate({
                scrollTop: 0
            }, 1000);
            return false;
        });

        /*------------------------------------
            05. Sidemenu toggle
        --------------------------------------*/

        if ($("#sidebar_toggle").length) {
           $("body").addClass("sidebar-menu");
           $("#sidebar_toggle").on("click", function () {
              $(".sidebar-menu").toggleClass("active");
              $(".side-menu").addClass("side-menu-active"), $("#close_sidebar").fadeIn(700)
           }), $("#close_sidebar").on("click", function () {
              $(".side-menu").removeClass("side-menu-active"), $(this).fadeOut(200), $(".sidebar-menu").removeClass("active")
           }), $("#btn_sidebar_colse").on("click", function () {
              $(".side-menu").removeClass("side-menu-active"), $("#close_sidebar").fadeOut(200), $(".sidebar-menu").removeClass("active")
           });
        }

        /*------------------------------------
            06. Navbar scrolling background
        --------------------------------------*/

        wind.on("scroll",function () {

            var bodyScroll = wind.scrollTop(),
                navbar = $(".navbar"),
                navbloglogo = $(".blog-nav .logo> img"),
                darkbg = $(".bg-black .logo> img"),
                logo = $(".navbar .logo> img");

            if(bodyScroll > 100){
                navbar.addClass("nav-scroll");
                logo.attr('src', 'img/logo-dark.png');
                darkbg.attr('src', 'img/logo-light.png');

            }else{
                navbar.removeClass("nav-scroll");
                logo.attr('src', 'img/logo-light.png');
                navbloglogo.attr('src', 'img/logo-dark.png');
            }
        });
    
         var windowsize = wind.width();
            if (windowsize <= 991) {
            $('.navbar-nav .nav-link').on("click", function(){
                $('.navbar-collapse.show').removeClass('show');
                $('.navbar .navbar-toggler').addClass('collapsed');
            });
          }

        /*------------------------------------
            07. Parallax
        --------------------------------------*/

        var pageSection = $(".bg-img, section, footer");
        pageSection.each(function(indx){
            
            if ($(this).attr("data-background")){
                $(this).css("background-image", "url(" + $(this).data("background") + ")");
            }
        });

        /*------------------------------------
            08. Wow animation - on scroll
        --------------------------------------*/

        var wow = new WOW({
            boxClass: 'wow', // default
            animateClass: 'animated', // default
            offset: 0, // default
            mobile: false, // default
            live: true // default
        });
        wow.init();

        /*------------------------------------
            09. Magnific-popup
        --------------------------------------*/

        $('.gallery').magnificPopup({
            delegate: '.popimg',
            type: 'image',
            gallery: {
                enabled: true
            }
        });

        /*------------------------------------
            10. OurstoryPopup
        --------------------------------------*/

        $('.story-video').magnificPopup({
            delegate: '.video',
            type: 'iframe'
        });

        /*------------------------------------
            11. Clockpicker
        --------------------------------------*/

        var input = $('#time-input').clockpicker({
            placement: 'bottom',
            align: 'left',
            autoclose: true,
            'default': 'now'
        });

        /*------------------------------------
            12. Horizontal Tab
        --------------------------------------*/

        if ($(".horizontaltab").length !== 0) {
                $('.horizontaltab').easyResponsiveTabs({
                    type: 'default', //Types: default, vertical, accordion
                    width: 'auto', //auto or any width like 600px
                    fit: true, // 100% fit in a container
                    tabidentify: 'hor_1', // The tab groups identifier
                    activate: function(event) { // Callback function if tab is switched
                        var $tab = $(this);
                        var $info = $('#nested-tabInfo');
                        var $name = $('span', $info);
                        $name.text($tab.text());
                        $info.show();
                    }
                });
            }

        
        /*------------------------------------
            13. Window When Loading
        --------------------------------------*/

        $(window).on("load",function (){

            var wind = $(window);

            // stellar
            wind.stellar();

            // isotope
            $('.gallery').isotope({
              // options
              itemSelector: '.items'
            });

            var $gallery = $('.gallery').isotope({
              // options
            });

            // filter items on button click
            $('.filtering').on( 'click', 'span', function() {
                var filterValue = $(this).attr('data-filter');
                $gallery.isotope({ filter: filterValue });
            });
            $('.filtering').on( 'click', 'span', function() {
                $(this).addClass('active').siblings().removeClass('active');
            });

        });

        /*------------------------------------
            14. FullScreenHeight Resize function
        --------------------------------------*/

        $(window).resize(function(event) {
            setTimeout(function() {
                SetResizeContent();
            }, 500);
            event.preventDefault();
        });

        // FullScreenHeight function
        function fullScreenHeight() {
            var element = $(".full-screen");
            var $minheight = $(window).height();
            element.css('min-height', $minheight);
        }

        // FullScreenHeight with resize function
        function SetResizeContent() {
            fullScreenHeight();
        }

        SetResizeContent();

        /*------------------------------------
            15. OwlCarousel Slider
        --------------------------------------*/
        
        $(document).on("ready", function() {

            var owl = $('.header .owl-carousel');

            // Slider owlCarousel
            $('.slider-fade .owl-carousel').owlCarousel({
                items: 1,
                loop:true,
                margin: 0,
                autoplay:true,
                smartSpeed:500,
                mouseDrag:false,
                animateIn: 'fadeIn',
                animateOut: 'fadeOut'
            });

            // Delicious Menu owlCarousel
            $('.delicious-menu .owl-carousel').owlCarousel({
                items: 1,
                loop:true,
                margin: 0,
                autoplay:true,
                smartSpeed:500
            });

            // Chef owlCarousel
            $('.chef-section .owl-carousel').owlCarousel({
                items: 3,
                loop:true,
                margin: 30,
                autoplay:false,
                dots: false,
                smartSpeed:500,
                responsive: {
                    0: {
                        items: 1,
                        autoplay:true,
                        margin: 10,
                    },
                    768: {
                        items: 2,
                        autoplay:true,
                        margin: 15,
                    },
                    992: {
                        items: 3,
                        margin: 15,
                    }
                }            
            });

            // Testimonials owlCarousel
            $('.testimonials .owl-carousel').owlCarousel({
                items: 1,
                loop:true,
                margin: 0,
                autoplay:true,
                smartSpeed:500
            });

            // Default owlCarousel
            $('.owl-carousel').owlCarousel({
                items: 1,
                loop:true,
                margin: 0,
                autoplay:true,
                smartSpeed:500
            });

            // Slider owlCarousel
            $('.slider .owl-carousel').owlCarousel({
                items: 1,
                loop:true,
                margin: 0,
                mouseDrag: false,
                autoplay:true,
                smartSpeed:500
            });

            // Slider text animation
            owl.on('changed.owl.carousel', function(event) {
                var item = event.item.index - 2;     // Position of the current item
                $('h3').removeClass('animated fadeInUp');
                $('h1').removeClass('animated fadeInUp');
                $('p').removeClass('animated fadeInUp');
                $('.btn').removeClass('animated fadeInUp');
                $('.owl-item').not('.cloned').eq(item).find('h3').addClass('animated fadeInUp');
                $('.owl-item').not('.cloned').eq(item).find('h1').addClass('animated fadeInUp');
                $('.owl-item').not('.cloned').eq(item).find('p').addClass('animated fadeInUp');
                $('.owl-item').not('.cloned').eq(item).find('.btn').addClass('animated fadeInUp');
            });

        });

});