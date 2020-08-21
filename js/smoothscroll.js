/* smooth scroll */
$(function () {

    $('.nav-link').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 600);
    });
    
    $('.btn1').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 600);
    });

});
