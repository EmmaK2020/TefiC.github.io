// SCROLL --------------------------------------------------------------------

$(document).ready(function(){

    var topMargin = 80;

    $(".home").click(function() {

        $("html, body").animate({
            scrollTop: 0
        });

    });

    $(".about-me").click(function() {

        var offset = $(".about-me-main-div").offset();

        $("html, body").animate({
            scrollTop: offset.top - topMargin, //-10 so that the screen won't be exactly on top of the object
        });

    });

    $(".portfolio, .main-button").click(function() {

        var offset = $(".first-project-main-div").offset();

        $("html, body").animate({
            scrollTop: offset.top - topMargin, //-10 so that the screen won't be exactly on top of the object
        });

    });

    $(".contact").click(function() {

        var offset = $(".footer-main-div").offset();

        $("html, body").animate({
            scrollTop: offset.top - topMargin, //-10 so that the screen won't be exactly on top of the object
        });

    });
});
