$(document).foundation();


$(window).bind('scroll', function () {
    h = ($( "#topslide" ).height())
    if ($(window).scrollTop() > h) {
        $('#menucontainer').addClass('fixed');
        $('#content').css('margin-top', '50px');
    } else {
        $('#menucontainer').removeClass('fixed');
        $('#content').css('margin-top', '0')
    }
});
