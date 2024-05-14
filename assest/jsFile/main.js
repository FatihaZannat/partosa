(function($){

    $.exixts = (function(selector){
      return  $(selector).length > 0
    })

  $(function(){
    counterUnit()
    animateTex()
    mainNav()
    if($.exixts('.wow')){
        new WOW().init();
        console.log('object');
    }
  })

//   -----------------------
  function mainNav(){
    $('.cs_header_right').append('<span class="cs_menu_toggle"><span></span></span>')
  }
  function animateTex(){
    $(window).on('load', function(){
        $('.cs_hero_left').removeClass('cs_hero_animation').addClass('cs_hero_animation_active')
    })
  }

  function counterUnit(){
    if($.exixts('.odometer')){
        $(window).on('scroll', function(){
            function winScrollPosition(){
                let scrollPos = $(window).scrollTop()
                console.log('scrollpos', scrollPos);
                let winHeight = $(window).height()
                console.log('winheight', winHeight);
                let scrollPosition = Math.round(scrollPos + winHeight / 1.2)
                console.log(scrollPosition);
                return scrollPosition
            }
            
            $('.odometer').each(function(){
                let elementOffset = $(this).offset().top
                console.log('elementOffsset', elementOffset);
                if(elementOffset < winScrollPosition()){
                    $(this).html($(this).attr('data-count-to'))
                }
            })
        })
    }
  }
    
   
})(jQuery)
