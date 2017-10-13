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
    } 

});