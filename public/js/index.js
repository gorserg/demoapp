$(document).ready(function () {

    $.get('/api/tracks', function (data) {
        let array = $.map( data, function( value, index ) {
            return $('<div>').attr('id', value["id"]).html(value.name);
        });
        $("#placeholder").append(array);
    });
});
