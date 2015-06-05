jQuery(document).ready(function(){
    var $ = jQuery.noConflict();
    if ($( window ).width()<768){
        $(".btn-nav").on("click",function(){            
                $(this).parent().toggleClass('open');
    });
        };   
    
    if ($( window ).width()<768){
        $('.show').on('click', function() {
    $(this).toggleClass('glyphicon-plus glyphicon-minus');
});
        };   
});




 
         