$('.list-dots .dot').on('click', function (e){
    e.preventDefault();
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
});


$('.list-dots li').on('click', function (e){

    var currentItem = $(this).index();
    var currentContent = $('.list-description .item-slide');

    currentContent.siblings().hide();
    currentContent.eq(currentItem).slideDown(500);

});


$('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash,
        $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 500, 'swing', function () {
        window.location.hash = target;
    });
});

$('.btn-view').on('click', function (e){
    e.preventDefault();

    $('.item-vision h4').toggleClass('small-text');
    $('.popup-text-vision').slideToggle(500);

    if($(this).text() === 'close') { //берется текст с btn-view и заменяется
        $(this).text('view more');
    }
    else {
        $(this).text('close');
    }
});

$('.btn-product').on('click', function (e){
    e.preventDefault();

    $('.item-flying h4').toggleClass('small-text');
    $('.popup-text-flying').slideToggle(500);

    if($(this).text() === 'close') { //берется текст с btn-view и заменяется
        $(this).text('view more');
    }
    else {
        $(this).text('close');
    }
});

$('.btn-last').on('click', function (e){
    e.preventDefault();

    $('.last-section-content h4').toggleClass('small-text');
    $('.popup-text-enjoy').slideToggle(500);

    if($(this).text() === 'close') { //берется текст с btn-view и заменяется
        $(this).text('view more');
    }
    else {
        $(this).text('close');
    }
});