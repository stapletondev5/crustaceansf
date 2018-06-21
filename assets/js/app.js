$(function() {
    var form = $('#main-contact-form');
    var formMessages = $('#form-messages');
    $(form).submit(function(e) {
        e.preventDefault();
        var formData = $(form).serialize();
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        }).done(function(response) {
            $(formMessages).removeClass('error');
            $(formMessages).addClass('success');
            $(formMessages).text(response);
            $('#name, #email, #message').val('')
        }).fail(function(data) {
            $(formMessages).removeClass('success');
            $(formMessages).addClass('error');
            if (data.responseText !== '') {
                $(formMessages).text(data.responseText)
            } else {
                $(formMessages).text('Oops! An error occured and your message could not be sent.')
            }
        })
    })
});
$(document).ready(function() {
    var $window = $(window);
    $('section[data-type="background"]').each(function() {
        var $bgobj = $(this);
        $(window).scroll(function() {
            var yPos = -($window.scrollTop() / $bgobj.data('speed'));
            var coords = '50% ' + yPos + 'px';
            $bgobj.css({
                backgroundPosition: coords
            })
        })
    })
})