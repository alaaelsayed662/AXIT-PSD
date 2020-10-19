



function checkScroll(){
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('.navbar').addClass("scrolled");
    }else{
        $('.navbar').removeClass("scrolled");
    }
}

if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}



$('.tab-switch li').click(function () {

      $(this).addClass('selected').siblings().removeClass('selected');

      $('.tabs-section .tabs-content > div').hide();

      $('.' + $(this).data('class')).show();
    });







