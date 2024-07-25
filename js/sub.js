$(document).ready(function(){
    slider();  

    $('.detail-wrap .detail-body .img-wrap .caption .btn-detail').click(function(){
        if(!$(this).hasClass('open')){
            $(this).siblings('p').css({
                'height': 'auto',
                'white-space': 'normal'
            })
    
            $(this).text('닫기')
            $(this).addClass('open')

        } else {
            $(this).siblings('p').css({
                'height': '',
                'white-space': ''
            })
    
            $(this).text('자세히')
            $(this).removeClass('open')
        }
    })
})

function slider(){
    $('.img-wrap .img-area .swiper').each(function(index){
        let $this = $(this);
        let swiper = undefined;
        
        //슬라이드 인덱스 클래스 추가
        $this.addClass(`slider${index}`);

        swiper = new Swiper(`.slider${index}`, {
            loop: true,
            navigation: {
                prevEl: $(`.slider${index} .swiper-button-prev`)[0],
                nextEl: $(`.slider${index} .swiper-button-next`)[0],
            },
            
        });
    });
}