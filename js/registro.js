// 1. Registro de clientes nuevos
function registrarClienteNuevo(){
	Parse.initialize("LUSRBvC9SjQBrv2YEPCoCMO3gDbDVzy415qrZumJ", "GQyuwQsf0IBgbeTCzWKDqr5TxOwral7IvdlYbT6J");    
		
	var Persona = Parse.Object.extend("Persona");
	var persona = new Persona();
	
	if(document.formRegister.cedula.value!=null && document.formRegister.cedula.value != "" && document.formRegister.nombre.value!= null && document.formRegister.nombre.value != "")
	{
		persona.set("cedula", document.formRegister.cedula.value);
		persona.set("nombre", document.formRegister.nombre.value);
		
		if(document.formRegister.email.value != null && document.formRegister.email.value!="" )
		{
			persona.set("email", document.formRegister.email.value);
		}
		
		if(document.formRegister.telefono.value != null && document.formRegister.telefono.value!="")
		{
			persona.set("telefono", document.formRegister.telefono.value);
		}
		

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
					//Agregar recomendado
					if(document.formRegister.recomendado.value!=null && document.formRegister.recomendado.value!="")
					{
						//Guardar registro del recomendado
						persona.set("cedRecomendado", document.formRegister.recomendado.value);
			
						//Aumentar puntaje de quien recomendó
						var query = new Parse.Query(Persona);
						query.equalTo("cedula",document.formRegister.recomendado.value);
						query.first({
							success:function(recomendado)
							{
								recomendado.increment("recomendaciones");
								recomendado.increment("puntaje");
								recomendado.save();
							},
							error:function(error)
							{
								alert("Error registrando el recomendado");
					
							}
				
						});
			
					}

					//Guardar usuario
					persona.save(null, {
						success:function(persona){				
			
							//Agregar kit de sembrado
							if(document.formRegister.kitsembrado.value > 0)
							{
								//Guardar venta
								var Venta = Parse.Object.extend("Venta");
								var venta = new Venta();
								venta.set("cedVendedor",Parse.User.current().get('username'));
								venta.set("cedCliente",persona.get('cedula'));
								venta.set("codProd","PROD1");
								venta.set("cantidad", parseInt(formRegister.kitsembrado.value));
								venta.save();
								
								//Guardar puntaje de la persona
								persona.increment("kits", parseInt(formRegister.kitsembrado.value));
								persona.increment("puntaje", parseInt(formRegister.kitsembrado.value));
								persona.save();
								
								//Incrementar ventas del vendedor
								Parse.User.current().increment("kits",parseInt(formRegister.kitsembrado.value));
								Parse.User.current().save();
							}
			
							//Agregar bambu pequeño
							if(document.formRegister.bambuPequeno.value > 0)
							{
								//Guardar venta
								var Venta = Parse.Object.extend("Venta");
								var venta = new Venta();
								venta.set("cedVendedor",Parse.User.current().get('username'));
								venta.set("cedCliente",persona.get('cedula'));
								venta.set("codProd","PROD2");
								venta.set("cantidad", parseInt(formRegister.bambuPequeno.value));
								venta.save();
								
								//Guardar puntaje de la persona
								persona.increment("bambusPequenos", parseInt(formRegister.bambuPequeno.value));
								persona.increment("puntaje", parseInt(formRegister.bambuPequeno.value));
								persona.save();
								
								//Incrementar ventas del vendedor
								Parse.User.current().increment("bambuPequeno",parseInt(formRegister.bambuPequeno.value));
								Parse.User.current().save();
							}
			
							//Agregar cactus
							if(document.formRegister.cactus.value > 0)
							{
								//Guardar venta
								var Venta = Parse.Object.extend("Venta");
								var venta = new Venta();
								venta.set("cedVendedor",Parse.User.current().get('username'));
								venta.set("cedCliente",persona.get('cedula'));
								venta.set("codProd","PROD3");
								venta.set("cantidad", parseInt(formRegister.cactus.value));
								venta.save();
								
								//Guardar puntaje de la persona
								persona.increment("cactus", parseInt(formRegister.cactus.value));
								persona.increment("puntaje", parseInt(formRegister.cactus.value));
								persona.save();
								
								//Incrementar ventas del vendedor
								Parse.User.current().increment("cactus",parseInt(formRegister.cactus.value));
								Parse.User.current().save();
							}
							
							//Agregar bambu grande
							if(document.formRegister.bambuGrande.value > 0)
							{
								//Guardar venta
								var Venta = Parse.Object.extend("Venta");
								var venta = new Venta();
								venta.set("cedVendedor",Parse.User.current().get('username'));
								venta.set("cedCliente",persona.get('cedula'));
								venta.set("codProd","PROD4");
								venta.set("cantidad", parseInt(formRegister.bambuGrande.value));
								venta.save();
								
								//Guardar puntaje de la persona
								persona.increment("bambusGrandes", parseInt(formRegister.bambuGrande.value));
								persona.increment("puntaje", parseInt(formRegister.bambuGrande.value));
								persona.save();
								
								//Incrementar ventas del vendedor
								Parse.User.current().increment("bambuGrande",parseInt(formRegister.bambuGrande.value));
								Parse.User.current().save();
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
				alert("Error registrando el usuario. Intente más tarde.");
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
		
  		//Mostrar información del vendedor loggeado
  		document.getElementById("userLogged").innerHTML = 'Vendedor: <strong>' + currentUser.get('name') + '</strong>';	
  		//Ocultar panel de cliente existente	
  	    $('.clienteExistente').removeClass("visible").addClass("hidden");

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
						//Guardar venta
						var Venta = Parse.Object.extend("Venta");
						var venta = new Venta();
						venta.set("cedVendedor",Parse.User.current().get('username'));
						venta.set("cedCliente",document.formCompra.cedula.value);
						venta.set("codProd","PROD1");
						venta.set("cantidad", parseInt(document.formCompra.kitsembrado.value));
						venta.save();
						
						//Guardar puntaje de la persona
						object.increment("kits", parseInt(document.formCompra.kitsembrado.value));
						object.increment("puntaje", parseInt(document.formCompra.kitsembrado.value));
						object.save();
						
						//Incrementar ventas del vendedor
						Parse.User.current().increment("kits",parseInt(formCompra.kitsembrado.value));
						Parse.User.current().save();
					}
		
	
					//Agregar bambu pequeño
					if(document.formCompra.bambuPequeno.value > 0)
					{
						//Guardar venta
						var Venta = Parse.Object.extend("Venta");
						var venta = new Venta();
						venta.set("cedVendedor",Parse.User.current().get('username'));
						venta.set("cedCliente",document.formCompra.cedula.value);
						venta.set("codProd","PROD2");
						venta.set("cantidad", parseInt(document.formCompra.bambuPequeno.value));
						venta.save();
						
						//Guardar puntaje de la persona
						object.increment("bambusPequenos",parseInt(document.formCompra.bambuPequeno.value));
						object.increment("puntaje",parseInt(document.formCompra.bambuPequeno.value));
						object.save();
						
						//Incrementar ventas del vendedor
						Parse.User.current().increment("bambuPequeno",parseInt(formCompra.bambuPequeno.value));
						Parse.User.current().save();
					}
					
					//Agregar bambu grande
					if(document.formCompra.bambuGrande.value > 0)
					{
						//Guardar venta
						var Venta = Parse.Object.extend("Venta");
						var venta = new Venta();
						venta.set("cedVendedor",Parse.User.current().get('username'));
						venta.set("cedCliente",document.formCompra.cedula.value);
						venta.set("codProd","PROD4");
						venta.set("cantidad", parseInt(document.formCompra.bambuGrande.value));
						venta.save();
						
						//Guardar puntaje de la persona
						object.increment("bambusGrandes", parseInt(document.formCompra.bambuGrande.value));
						object.increment("puntaje", parseInt(document.formCompra.bambuGrande.value));
						object.save();
						
						//Incrementar ventas del vendedor
						Parse.User.current().increment("bambuGrande",parseInt(formCompra.bambuGrande.value));
						Parse.User.current().save();
					}
		
					//Agregar cactus
					if(document.formCompra.cactus.value > 0)
					{
						//Guardar venta
						var Venta = Parse.Object.extend("Venta");
						var venta = new Venta();
						venta.set("cedVendedor",Parse.User.current().get('username'));
						venta.set("cedCliente",document.formCompra.cedula.value);
						venta.set("codProd","PROD3");
						venta.set("cantidad", parseInt(document.formCompra.cactus.value));
						venta.save();
						
						//Guardar puntaje de la persona
						object.increment("cactus", parseInt(document.formCompra.cactus.value));
						object.increment("puntaje", parseInt(document.formCompra.cactus.value));
						object.save();
						
						//Incrementar ventas del vendedor
						Parse.User.current().increment("cactus",parseInt(formCompra.cactus.value));
						Parse.User.current().save();
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

// 5. Esconder registro cliente nuevo
function clienteExistenteSelected(){
    $('.clienteNuevo').removeClass("visible").addClass("hidden");
    $('.clienteExistente').removeClass("hidden").addClass("visible");
	
	//Seleccionar opción cliente existente
	$("#navigation li").removeClass("active");
	$("#navigation #menuClienteExistente").addClass("active");
	
}

// 6. Mostrar registro cliente nuevo
function clienteNuevoSelected(){
    $('.clienteExistente').removeClass("visible").addClass("hidden");
    $('.clienteNuevo').removeClass("hidden").addClass("visible");
	
	//Seleccionar opción cliente nuevo
	$("#navigation li").removeClass("active");
	$("#navigation #menuClienteNuevo").addClass("active");
	
}



