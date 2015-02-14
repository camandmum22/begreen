//Ingreso del vendedor
function login(){
	Parse.initialize("LUSRBvC9SjQBrv2YEPCoCMO3gDbDVzy415qrZumJ", "GQyuwQsf0IBgbeTCzWKDqr5TxOwral7IvdlYbT6J");    
	
	Parse.User.logIn(document.formLogin.cedula.value, document.formLogin.password.value, {
	  success: function(user) {
		var newUrl = "registro.html";
		window.location.replace(newUrl);
		document.location.href = newUrl;
		  
	  },
	  error: function(user, error) {
	    // The login failed. Check error to see why.
		  alert('No puedes ingresar. Intenta más tarde.');
		  
	  }
	});

}


