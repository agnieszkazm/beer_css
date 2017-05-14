$(document).ready(function() {
    var percent = $("#count").text();

    var interval = setInterval(function() {
        percent++;
        $("#count").text(percent);
        $("#beer").css("transform", 'translate(0' + ',' + (100 - percent) + '%)');
        if (percent == 100) {
            clearInterval(interval);
        }
    }, 50);
});

