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
        // $('body').removeClass('hovered');
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

//  слайдер - стрелки и точки настриваются в стилях
    $(document).ready(function(){
        $('.slider').slick({
        // указываем класс для настраиваемых стрелок!!!
        prevArrow: '<a class="arrow-left"><i class="fas fa-chevron-left"></i></a>', 
        nextArrow: '<a class="arrow-right"><i class="fas fa-chevron-right"></i></a>',
         // указываем класс для настраиваемых точек!!!
        dots: true,
        dotsClass: 'rombss',
        });
      });

});

