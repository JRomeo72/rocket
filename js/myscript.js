$(document).ready(function(){

    //if($('body').height() < $(window).height()){
    //    $('footer').css({'position':'absolute', 'bottom':'0px'});
    //}

    var secciones = $('.section_contenedor'),
        enlaces = $('.nav-bar').find('a');

    enlaces.click(function(e){
        e.preventDefault();
        var hash = $(this).attr('href'),
            boton = $(this).find('li');
        secciones
            .filter(hash)
            .addClass('visible')
            .siblings()
            .removeClass('visible');

        $('.nav-bar_items_item').removeClass('activo');
        $(boton).addClass('activo');
        $('.video')[0].pause();

        if($('.logo').css('display') == 'none'){
            $('#icon').removeClass('icon-close').addClass('icon-menu');
            $('.nav-bar').css({'left':'-100%'});
            $('.capa-2').css({'width':'0px'});
        }
    });

    $(window).on('resize', responsive)
    function responsive(){
        var ancho = $(window).width();
        if($('.logo').css('display') == 'none'){
            $('.nav-bar').addClass('sombra-caja');
            $('header').removeClass('sombra-caja');
        }else{
            $('.nav-bar').removeClass('sombra-caja');
            $('header').addClass('sombra-caja');
        }
    }

    $('#icon').click(function(){
        if($(this).hasClass('icon-menu')){
            $(this).removeClass('icon-menu').addClass('icon-close');
            $('.nav-bar').css({'left':'0'});
            $('.capa-2').css({'width':'100%'});
            //$('.nav-bar').addClass('sombra-caja');
            //$('.nav-bar_items').css({'left':'0'});
        }else{
            $(this).removeClass('icon-close').addClass('icon-menu');
            $('.nav-bar').css({'left':'-100%'});
            $('.capa-2').css({'width':'0px'});
            //$('.nav-bar_items').css({'left':'-50%'});
        }
    });
});