$(document).ready(function(){
    toggleGnb()

    $(window).resize(function(){
        toggleGnb()
    })
})

function toggleGnb(){
    if ($(window).width() >= 1174) {
        $('#header .btn-header-gnb').addClass('off')
        $('#header .btn-header-gnb').removeClass('on')
        $('#header .gnb').show();
    } else {
        $('#header .btn-header-gnb').addClass('off')
        $('#header .btn-header-gnb').removeClass('on')
        $('#header .gnb').hide();
    }
    $('#header .btn-header-gnb').click(function(){
        if($(this).hasClass('off')){
            $(this).removeClass('off')
            $(this).addClass('on')
            $('#header .gnb').show();
        } else {
            $(this).removeClass('on')
            $(this).addClass('off')
            $('#header .gnb').hide();
        }
    })

}