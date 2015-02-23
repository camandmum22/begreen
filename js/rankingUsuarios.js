//Mostrar ranking de usuarios
function mostrarIndex()
{
	var newUrl = "index.html";
	window.location.replace(newUrl);
	document.location.href = newUrl;
}

//Mostrar página de contacto
function mostrarContacto()
{
	var newUrl = "contacto.html";
	window.location.replace(newUrl);
	document.location.href = newUrl;
}

function mostrarRankingClientes()
{	
	
	//Obtener tabla
	var tbl = document.getElementById("tablaRanking");
	tbl.class="table table-striped";
	
	Parse.initialize("LUSRBvC9SjQBrv2YEPCoCMO3gDbDVzy415qrZumJ", "GQyuwQsf0IBgbeTCzWKDqr5TxOwral7IvdlYbT6J");    
	
	var Persona = Parse.Object.extend("Persona");
	var query = new Parse.Query(Persona);
	query.descending("puntaje");
	query.limit(1000);
	query.find({
		success:function(results)
		{
			for(var i =0; i < results.length; i++)
			{
				//Crear person
				var persona = results[i];
				
				//Crear fila
				var tr = tbl.insertRow();
				
				//Agregar posición
				var tdPosicion = tr.insertCell();
				tdPosicion.className="text-center";
				tdPosicion.appendChild(document.createTextNode((i+1)+''));
				
				//Agregar nombre
				var tdNombre = tr.insertCell();
				tdNombre.className="text-center";
				tdNombre.appendChild(document.createTextNode(persona.get('nombre')));
				
				//Agregar kits
				//var tdKits = tr.insertCell();
				//tdKits.appendChild(document.createTextNode(persona.get('kits')));
				
				//Agregar bambues grandes
				//var tdBambuGrande = tr.insertCell();
				//tdBambuGrande.appendChild(document.createTextNode(persona.get('bambusGrandes')));
				
				//Agregar bambues pequeños
				//var tdBambuPequeno = tr.insertCell();
				//tdBambuPequeno.appendChild(document.createTextNode(persona.get('bambusPequenos')));
				
				//Agregar cactus
				//var tdCactus = tr.insertCell();
				//tdCactus.appendChild(document.createTextNode(persona.get('cactus')));
				
				//Agregar recomendaciones
				//var tdRecomendaciones = tr.insertCell();
				//tdRecomendaciones.appendChild(document.createTextNode(persona.get('recomendaciones')));
				
				var tdPuntaje = tr.insertCell();
				tdPuntaje.className="text-center";
				tdPuntaje.appendChild(document.createTextNode(persona.get('puntaje')));
			}
			
			body.appendChild(tbl);
		},
		error: function(error)
		{
			
		}
	});
	
}

//Mostrar acerca de
function mostrarAcercaDe()
{
	var newUrl = "acercaDe.html";
	window.location.replace(newUrl);
	document.location.href = newUrl;
}