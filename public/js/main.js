
/**
 * 
 * initialize partners owl carousel
 */
$('.partners-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

/**
 * 
 * initialize recent-project filtering
 */
$(window).on('load', function () {
    var $container = $('#recent-projects-wrap');
    if ($container.length) {
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').on('click', function () {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
    }
});

/**
 * Initialize recent projects popup
 */
$('.view-project-itm').magnificPopup({
    type: 'iframe',
    iframe: {
        patterns: {
            youtube: {
                index: 'youtube.com',
                id: 'v=',
                src: '//www.youtube.com/embed/%id%?rel=0&amp;autoplay=1&amp;showinfo=0'
            }
        }
    },
    mainClass: 'mfp-zoom-in',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
});
    
$('.testimonials-carousel').owlCarousel({
    loop:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
