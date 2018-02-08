$(document).foundation();


$(window).bind('scroll', function () {
    h = ($( "#topslide" ).height())
    menuh = ($( "#menucontainer" ).height()) + 15
    if ($(window).scrollTop() > h) {
        $('#menucontainer').addClass('fixed');
        $('#content').css('margin-top', menuh);
    } else {
        $('#menucontainer').removeClass('fixed');
        $('#content').css('margin-top', '0')
    }
});
