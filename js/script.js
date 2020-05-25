//
//	jQuery Validate example script
//
//	Prepared by David Cochran
//
//	Free for your use -- No warranties, no guarantees!
//

$(document).ready(function(){

	// Validate
	// http://bassistance.de/jquery-plugins/jquery-plugin-validation/
	// http://docs.jquery.com/Plugins/Validation/
	// http://docs.jquery.com/Plugins/Validation/validate#toptions

		$('#contact-form').validate({
	    rules: {
	      name: {
	        minlength: 2,
	        required: true
	      },
	      email: {
	        required: true,
	        email: true
	      },
	      subject: {
	      	minlength: 2,
	        required: true
	      },
	      message: {
	        minlength: 2,
	        required: true
	      }
	    },
			highlight: function(element) {
				$(element).closest('.form-group').removeClass('success').addClass('error');
			},
			success: function(element) {
				element
				.text('OK!').addClass('valid')
				.closest('.form-group').removeClass('error').addClass('success');
			}
	  });

}); // end document.ready

document.getElementById("send").addEventListener("click", send);

function send() {
	const form = document.querySelectorAll(".form-control");
	const message = `Nombre: ${form[0].value}
Correo: ${form[1].value}
Asunto: ${form[2].value}
Mensaje: ${form[3].value}`;

	const phone = "+573022252751";
	const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`

	window.open(url, '_blank');
}