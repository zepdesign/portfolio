$(document).ready(function(){

    // Display & hide form labels
    $('input, textarea').focusout(function(){
        var text_val = $(this).val();

        if(text_val === "") {
            $(this).removeClass('contact-form__input--has-value');
        } else {
            $(this).addClass('contact-form__input--has-value');
        }
    }); // End Display & hide form labels


    //Message sent confirmation
    var url = window.location.href;

    if (url.search("#message-sent") >= 0) {
        $('.msg-status').addClass('msg-status--successful');
    }; // End Message sent confirmation 


    //Project slideshows
    $(function() {
        $(".rslides").responsiveSlides();
     }); // End Project slideshows


    //Brief Project version
    $('#short-project').click(function(){
        var button_text = $('.container__title, .project__process__container').is(':hidden') ? 'View short summary' : 'View full summary';
        $('.container__title--process, .project__process__container').toggle();
        $('#short-project').text(button_text);
    }); //End Brief Project version


    //Mobile Nav
    $('.mobile__nav__button').click(function(){
        $('.nav--mobile .nav__container').slideToggle();
    }); //End Mobile Nav


});