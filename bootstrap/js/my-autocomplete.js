(function( $ ) {
    $(function() {
        var url = MyAutocomplete.url + "?action=my_search";
        $( "#s" ).autocomplete({
            source: url,
            delay: 0,
            minLength: 0
        });
    });

})( jQuery );
