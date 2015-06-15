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

});





