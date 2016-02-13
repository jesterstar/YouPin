$(document).ready(function() {
    $('.nav li').on('click', function() {
        var scrollAnchor = $(this).attr('data-scroll'),
            scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top;
        $('body,html').animate({
            scrollTop: scrollPoint
        }, 500);
        return false;
    });

    $(window).scroll(function() {
        var windscroll = $(window).scrollTop();
        $('section').each(function(i){
            if($(this).position().top <= windscroll + 10) {
                $('.nav li.active').removeClass('active');
                $('.nav li').eq(i).addClass('active');
            }
        });
    }).scroll();
});