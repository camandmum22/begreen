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
	
	var Persona = Parse.Object.extend("User");
	var query = new Parse.Query(Persona);
	query.limit(30);
	query.find({
		success:function(results)
		{
			var posArray = 0;
			
			for(var i =0; i < results.length; i++)
			{
				
				
				//Crear person
				var persona = results[i];
				
				if(persona.get('name') != "Grupo")
				{
					//Crear fila
					var tr = tbl.insertRow();
				
					//Agregar posición
					var tdPosicion = tr.insertCell();
					tdPosicion.className="text-center";
					tdPosicion.appendChild(document.createTextNode((posArray+1)+''));
				
					//Agregar nombre
					var tdNombre = tr.insertCell();
					tdNombre.className="text-center";
					tdNombre.appendChild(document.createTextNode(persona.get('name')));
				
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
				
					var tdKits = tr.insertCell();
					tdKits.className="text-center";
					tdKits.appendChild(document.createTextNode(persona.get('kits')));
					
					var tdBambuP = tr.insertCell();
					tdBambuP.className="text-center";
					tdBambuP.appendChild(document.createTextNode(persona.get('bambuPequeno')));
					
					var tdBambuG = tr.insertCell();
					tdBambuG.className="text-center";
					tdBambuG.appendChild(document.createTextNode(persona.get('bambuGrande')));
					
					var tdCactus = tr.insertCell();
					tdCactus.className="text-center";
					tdCactus.appendChild(document.createTextNode(persona.get('cactus')));
					
					posArray++;
				}

				

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