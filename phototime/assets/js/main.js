$(document).ready(function() {
    $('slider-right').click(function(){
        
        var currentImage1 = $('.emg.curry');
        var currentImageIndex1 = $('third-picture.curry').index();

        var currentImage2 = $('.emg.curry');
        var currentImageIndex2 = $('third-picture.curry').index() + 1;

        var nextImageIndex1 = currentImageIndex1 + 1;
        var nextImageIndex2 = currentImageIndex2 + 1;

        var nextImage1 = $('third-picture').eq(nextImageIndex1);
        var nextImage2 = $('third-picture').eq(nextImageIndex2);

        currentImage1.fadeOut(1000);
        currentImage2.fadeOut(1000);

        currentImage1.removeClass('curry');
        currentImage2.removeClass('curry');

        if(nextImage2 == ($('.third-picture:last').index()+1)){
            $('.third-picture').eq(0).fadeIn(1000);
            $('.third-picture').eq(0).addClass('curry');

            $('.third-picture').eq(1).fadeIn(1000);
            $('.third-picture').eq(1).addClass('curry');
        } else{
            nextImage1.fadeIn(1000);
            nextImage1.addClass('curry');
        }

    });

    $('.forth-button').click(function (){
        $('#popup').addClass('display');
    });

    $('.btn').click(function () {
        $('#popup').removeClass('display');
    });
});