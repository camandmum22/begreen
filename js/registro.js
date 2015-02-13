// 1. Registro de clientes nuevos
function registrarClienteNuevo(){
	Parse.initialize("LUSRBvC9SjQBrv2YEPCoCMO3gDbDVzy415qrZumJ", "GQyuwQsf0IBgbeTCzWKDqr5TxOwral7IvdlYbT6J");    
	var Persona = Parse.Object.extend("Persona");
	var persona = new Persona();
	
	if(document.formRegister.cedula.value!=null && document.formRegister.cedula.value != "" && document.formRegister.nombre.value!= null && document.formRegister.nombre.value != "" && document.formRegister.email.value != null && document.formRegister.email.value!="" && document.formRegister.telefono.value != null && document.formRegister.telefono.value!="")
	{
		persona.set("cedula", document.formRegister.cedula.value);
		persona.set("nombre", document.formRegister.nombre.value);
		persona.set("email", document.formRegister.email.value);
		persona.set("telefono", document.formRegister.telefono.value);
		
		
		//Verificar si el usuario ya existe
		var query = new Parse.Query(Persona);
		query.equalTo("cedula", document.formRegister.cedula.value);
		query.first({
			success: function(object) {
			  
				//El usuario ya existe. No se puede crear.
				if (object) 
				{
					alert('Ya existe un usuario registrado con esa cédula');
	          
					//El usuario no existe. Se puede crear.
				} else 
				{

					//Guardar usuario
					persona.save(null, {
						success:function(persona){				
			
							//Agregar kit de sembrado
							if(document.formRegister.kitsembrado.value > 0)
							{
								var Venta = Parse.Object.extend("Venta");
								var venta = new Venta();
								venta.set("cedVendedor",Parse.User.current().get('username'));
								venta.set("cedCliente",persona.get('cedula'));
				
								//Agregar recomendado
								if(document.formRegister.recomendado.value!=null && document.formRegister.recomendado.value!="")
								{
									venta.set("cedRecomendado",document.formRegister.recomendado.value);
								}
				
								venta.set("codProd","PROD1");
								venta.set("cantidad", parseInt(formRegister.kitsembrado.value));
								venta.save();
							}
			
							//Agregar bambues
							if(document.formRegister.bambues.value > 0)
							{
								var Venta = Parse.Object.extend("Venta");
								var venta = new Venta();
								venta.set("cedVendedor",Parse.User.current().get('username'));
								venta.set("cedCliente",persona.get('cedula'));
				
								//Agregar recomendado
								if(document.formRegister.recomendado.value!=null && document.formRegister.recomendado.value!="")
								{
									venta.set("cedRecomendado",document.formRegister.recomendado.value);
								}
				
								venta.set("codProd","PROD2");
								venta.set("cantidad", parseInt(formRegister.bambues.value));
								venta.save();
							}
			
							//Agregar cactus
							if(document.formRegister.cactus.value > 0)
							{
								var Venta = Parse.Object.extend("Venta");
								var venta = new Venta();
								venta.set("cedVendedor",Parse.User.current().get('username'));
								venta.set("cedCliente",persona.get('cedula'));
				
								//Agregar recomendado
								if(document.formRegister.recomendado.value!=null && document.formRegister.recomendado.value!="")
								{
									venta.set("cedRecomendado",document.formRegister.recomendado.value);
								}
				
								venta.set("codProd","PROD3");
								venta.set("cantidad", parseInt(formRegister.cactus.value));
								venta.save();
							}


							//Limpiar campos
							document.getElementById('formRegister').reset();

							//Mostrar mensaje al usuario
							alert('Usuario creado: ' + persona.get('cedula'));
			
						},
						error:function(persona, error){
							alert('El usuario no puede ser creado');
						}
					});
				}
			},
			error: function(error) {
				response.error("Error registrando el usuario. Intente más tarde.");
			}
		});
	

	}
	else
	{
		alert('No puede dejar campos vacíos');
		
	}
}

// 2. Validar existencia de un vendedor
function validarVendedor(){
	Parse.initialize("LUSRBvC9SjQBrv2YEPCoCMO3gDbDVzy415qrZumJ", "GQyuwQsf0IBgbeTCzWKDqr5TxOwral7IvdlYbT6J");    
	var currentUser = Parse.User.current();
	if (currentUser) {
		$(".success").show();
		document.getElementById("userLogged").innerHTML = 'Vendedor: <strong>' + currentUser.get('name') + '</strong>';		 
	} 
	else{
		var newUrl = "login.html";
		window.location.replace(newUrl);
		document.location.href = newUrl;
	}

}

//3. Cerrar sesión
function logout(){
	var newUrl = "login.html";
	window.location.replace(newUrl);
	document.location.href = newUrl;
	Parse.User.logOut();
}

//4. Registrar compra
function registrarCompra(){
	
	if(document.formCompra.cedula.value!=null && document.formCompra.cedula.value != "")
	{
		Parse.initialize("LUSRBvC9SjQBrv2YEPCoCMO3gDbDVzy415qrZumJ", "GQyuwQsf0IBgbeTCzWKDqr5TxOwral7IvdlYbT6J");    
		var Persona = Parse.Object.extend("Persona");
		var query = new Parse.Query(Persona);
		query.equalTo("cedula", document.formCompra.cedula.value);
		query.first({
			success: function(object) {
		  
				//El usuario existe. Se puede registrar la compra.
				if (object) 
				{
			
		
					//Agregar kit de sembrado
					if(document.formCompra.kitsembrado.value > 0)
					{
						var Venta = Parse.Object.extend("Venta");
						var venta = new Venta();
						venta.set("cedVendedor",Parse.User.current().get('username'));
						venta.set("cedCliente",document.formCompra.cedula.value);
						venta.set("codProd","PROD1");
						venta.set("cantidad", parseInt(formCompra.kitsembrado.value));
						venta.save();
					}
		
					//Agregar bambues
					if(document.formCompra.bambues.value > 0)
					{
						var Venta = Parse.Object.extend("Venta");
						var venta = new Venta();
						venta.set("cedVendedor",Parse.User.current().get('username'));
						venta.set("cedCliente",document.formCompra.cedula.value);
						venta.set("codProd","PROD2");
						venta.set("cantidad", parseInt(formCompra.bambues.value));
						venta.save();
					}
		
					//Agregar cactus
					if(document.formCompra.cactus.value > 0)
					{
						var Venta = Parse.Object.extend("Venta");
						var venta = new Venta();
						venta.set("cedVendedor",Parse.User.current().get('username'));
						venta.set("cedCliente",document.formCompra.cedula.value);
						venta.set("codProd","PROD3");
						venta.set("cantidad", parseInt(formCompra.cactus.value));
						venta.save();
					}


					//Limpiar campos
					document.getElementById('formCompra').reset();

					//Mostrar mensaje al usuario
					alert('Venta realizada');
		
						
          
				//El usuario no existe. Se debe registrar.
				} else 
				{
					alert('El usuario no existe. Debe registrarse primero');
					document.getElementById('formCompra').reset();
					

				}
			},
			error: function(object, error) {
				response.error("Error obteniendo información. Intente más tarde.");
			}
		});
	
	}
	else
	{
		alert('No puede dejar campos vacíos');
	
	}
}

