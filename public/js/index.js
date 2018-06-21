$(document).ready(function () {

    $.get('/api/version', function (data) {
        $('.version').html(data.version);
    });

    $.get('/api/track', function (data) {
        let array = $.map(data, function (value, index) {
            return $('<div>').attr('id', value["id"]).html(value.name);
        });
        $("#placeholder").append(array);
    });
});
