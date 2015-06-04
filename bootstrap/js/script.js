jQuery(document).ready(function(){
    var $ = jQuery.noConflict();
        $(".menu-item").hover(            
            function() {
                $(this).toggleClass('open');
            },
            function() {
                $(this).toggleClass('open');
            }
        );
    
});