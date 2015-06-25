jQuery(document).ready(function(){
    var $ = jQuery.noConflict();
    if ($( window ).width()<768){
        $(".btn-nav").on("click",function(){            
            $(this).parent().toggleClass('open');
            $(this).find('.show').toggleClass('glyphicon-plus glyphicon-minus');
        });
    };

    if ($( window ).width()>768){
        $(".dropdown").on("click",function(){
            $(this).toggleClass('open');
            $(this).find('.show').toggleClass('glyphicon-plus glyphicon-minus');
        });

    };

    $('#menu-primary li a').each(function(){
        if($(this).attr('class')=='dropdown-toggle'){
            $(this).after('<div class="dropdown"><b class="caret"></b></div>');
        }
        else
        {
            $(this).append('<div class="no-dropdown"></div>');
        };
    });
    $('.no-dropdown').css('height',$('.dropdown').height());
    $( window ).resize(function() {
        $('.no-dropdown').css('height',$('.dropdown').height());
    });
    $('.dropdown').on("click", function(){

        $(this).find('b').toggleClass('caret-inverse');
    });

    $('html').click(function(e){
        $('.dropdown-menu').slideUp();
        $(this).parent().find('a').removeClass('active');
        $('.caret-inverse').each(function(){
            $(this).addClass('caret');
            $(this).removeClass('caret-inverse');
        });
    });
    $('.dropdown').click(function(e) {
        if(($(this).parents("ul").attr('id')=="menu-primary")){
            if($(this).parents("li").find("a").attr('class')=="dropdown-toggle active"){
                $('.dropdown-menu').slideUp();
                $(this).parents("li").find("b").addClass("caret");
                $(this).parents("li").find('.active').removeClass('active');
            }
            else{
                $('.dropdown-menu').slideUp();
                $('.active').each(function(){
                    $(this).removeClass('active');
                });
                $('.caret-inverse').each(function(){
                    $(this).addClass('caret');
                    $(this).removeClass('caret-inverse');
                });
                $(this).find('b').removeClass('caret');
                $(this).find('b').addClass('caret-inverse');
                $(this).parent().find('a').addClass('active');
                $(this).parent().find('ul').first().slideToggle();7}
        }
        //        else if($(this).parents("ul").attr('id') === undefined){
        //        }
        else{
            $(this).parent().find('a').addClass('active');
            $(this).parent().find('ul').first().slideToggle();
        }

        e.stopPropagation();
    });

});









