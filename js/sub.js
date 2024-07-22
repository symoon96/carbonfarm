$(document).ready(function(){
    slider();
})

function slider(){
    $(".detail-wrap .detail-body .img-wrap .img-area .swiper").each(function(index){
        let $this = $(this);
        let swiper = undefinded;

        $this.addClass('slider${index}');

        swiper = new Swiper('slider${index}', {
            loop: true,
            navigation: {
                prevEl: $('slider${index} .btn-swiper-button-prev')[0],
                nextEl: $('slider${index} .btn-swiper-button-next')[0],
            }
        })
    })
}