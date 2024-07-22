$(document).ready(function(){
    slider();  
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