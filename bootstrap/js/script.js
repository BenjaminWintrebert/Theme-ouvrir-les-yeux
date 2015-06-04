jQuery(document).ready(function(){
    var $ = jQuery.noConflict();
    if ($( window ).width()<768){
        $(".bjr").on("click",function(){            
                $(this).parent().toggleClass('open');
    });
        };
        
    
});