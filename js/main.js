let visualImg;
let subSlideImg

$(window).on('load',function(){
    visualImg = $('.visual .img-view .swiper img');
    subSlideImg = $('.detail-wrap .detail-body .img-wrap .img-area img');
});

$(document).ready(function(){
    visualImg = $('.visual .img-view .swiper img');
    subSlideImg = $('.detail-wrap .detail-body .img-wrap .img-area img');
    imgChange(visualImg);
    imgChange(subSlideImg);
    
    let txtSwiper = new Swiper(".visual .txt-view .swiper", {
        loop: true,
        allowTouchMove: false
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
        imgChange(subSlideImg);
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