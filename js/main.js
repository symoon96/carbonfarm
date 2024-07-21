let visualImg;

$(window).on('load',function(){
    visualImg = $('.visual .img-view .swiper img');
});

$(document).ready(function(){
    visualImg = $('.visual .img-view .swiper img');
    imgChange(visualImg);
    
    let txtSwiper = new Swiper(".visual .txt-view .swiper", {
        loop: true,
        freeMode: true,
        watchSlidesProgress: true,
    });
    let imgSwiper = new Swiper(".visual .img-view .swiper", {
        loop: true,
        navigation: {
            nextEl: ".visual .swiper-button-next",
            prevEl: ".visual .swiper-button-prev",
        },
        thumbs: {
            swiper: txtSwiper,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });

    $(window).resize(function(){
        imgChange(visualImg);
    })
})

/* 이미지 자동변환 */
function imgChange(object) {
    $(object).each(function () {
        let srcName = $(this).attr('data-pc');
        let newSrc = $(this).attr('data-mobile');
        if ($(window).width() < 720) {
            $(this).attr('src', newSrc);
        } else {
            $(this).attr('src', srcName);
        }

    });
}