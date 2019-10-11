$('.button').on('click', function(e) {
	e.preventDefault();

	if( $('.button-group').hasClass('is-inactive')) {
		
		$(this).text('Siguiente');
		$(this).parent().removeClass('is-inactive');
		$(this).parent().addClass('is-second');
		
	} else if( $('.button-group').hasClass('is-second')) {
		$(this).text('Enviar');
		$(this).parent().removeClass('is-second');
		$(this).parent().addClass('is-third');
		
	} else if( $('.button-group').hasClass('is-third')) {
        $(this).text('Gracias!');
        var email = $('#email-correo-form').val();
        var name = $("#nombre-form").val();
        $.post("send-mail.php",{email: email,name:name}, function(result) {
            console.log(result);
            if(result.success) {
                    $(".mensaje-form-send").empty();
                    $(".mensaje-form-send").html(' <div class="alert alert-primary" role="alert">Mensaje Enviado Correctamente!</div>')
            } else {
             $(".mensaje-form-send").empty();
                    $(".mensaje-form-send").html(' <div class="alert alert-danger" role="alert">El Mensaje no fue enviado!</div>')
            }
    });
		$(this).parent().removeClass('is-third');
		$(this).parent().addClass('is-submitted');
	}
});

$(document).click( function(e) {
    if ( !$(e.target).closest('.button-group').length ) {
        $('.button-group').removeClass('is-second');
		$('.button-group').removeClass('is-third');
		$('.button-group').removeClass('is-submitted');
		$('.button-group').addClass('is-inactive');
		$('.button').text('Contactame');
    }
});