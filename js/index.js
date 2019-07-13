$(document).ready(function() {

    //  модалка (логин) и затемнение 
    $('#logoId').on('click', function() {
        $('#modal').show(500);
        // $('body').addClass('hovered');
    });

    $('#closeBtn').on('click', function() {
        $('#modal').hide(500);
        // $('body').removeClass('hovered');
    });

    //  ----модалка ( логин мобильная) и затемнение 
    $('#logoMobile').on('click', function() {
        $('#modal').show(500);
        // $('body').addClass('hovered');
    });

    $('#closeBtn').on('click', function() {
        $('#modal').hide(500);
        $('body').removeClass('hovered');
    });
    
    // --------------------меню-мобилка
    $('#mobileId').on('click', function() {
        $('#mobileBar').show(500);
        // $('body').addClass('hovered');
    });

    $('#closeMbl').on('click', function() {
        $('#mobileBar').hide(500);
        // $('body').removeClass('hovered');
    });


    

    //  кнопка вверх и скролл 
    $(document).on('scroll', function() {
        var maxHeight = 100;
        if ($(window).scrollTop() >  maxHeight) {
            console.log('asdasd');
            $('#toTop').show();
        } else {
            $('#toTop').hide();
        }
    });

    $('#toTop').on('click', function(){
        $("html, body").animate({ scrollTop: 0 }, "slow");
    })

    //  слайдер десктоп - стрелки и точки не настроены
    $(document).ready(function(){
        $('.slider').slick({
        // указываем класс для настраиваемых стрелок!!!
        prevArrow: '<a class="arrow-left"><i class="fas fa-chevron-left"></i></a>', 
        nextArrow: '<a class="arrow-right"><i class="fas fa-chevron-right"></i></a>',
        
            dots: true,
            dotsClass: 'rombss',
            // appendDots: $('.romb')


    
            
        });
      });

 
    //  слайдер таблет  работает, но снизу под основным!!
    // $(document).ready(function(){
    //     $('.slider-tablet').slick({
    //     prevArrow: '<a><i class="fas fa-chevron-left"></i></a>', 
    //     nextArrow: '<a><i class="fas fa-chevron-right"></i></a>',
        
    //     prevArrowClass: 'arrow-left',
    //     nextArrowClass: 'arrow-right',
    //         dots: true,
    //         // dotsClass: 'testDots',
    //         // appendDots: $('.your-class')
    //     });
    //   });



    //   слайдер мобайл, снизу
    //   $(document).ready(function(){
    //     $('.slider-mobile').slick({
    //     prevArrow: '<a><i class="fas fa-chevron-left"></i></a>', 
    //     nextArrow: '<a><i class="fas fa-chevron-right"></i></a>',
        
    //     prevArrowClass: 'arrow-left',
    //     nextArrowClass: 'arrow-right',
    //         dots: true,
    //         // dotsClass: 'testDots',
    //         // appendDots: $('.your-class')
    //     });
    //   });


});

