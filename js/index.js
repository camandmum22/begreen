// Calcular termometro
function calcularTermometro(){
	Parse.initialize("LUSRBvC9SjQBrv2YEPCoCMO3gDbDVzy415qrZumJ", "GQyuwQsf0IBgbeTCzWKDqr5TxOwral7IvdlYbT6J");    
	
	var unit = "%";
	var Venta = Parse.Object.extend("Venta");
	var query = new Parse.Query(Venta);
	query.limit(1000);
	query.find({
	  success: function(list) {
	    // The count request succeeded. Show the count	
		  var totalPlantas = 0;
		  
		  for(var i = 0; i < list.length; i++)
		  {
			  var venta = list[i];
			  totalPlantas += venta.get("cantidad");
		  }
		  
		  	  
		  if(totalPlantas<500)
		  {
			var percentage = totalPlantas/500* 100;
		  	$('#level').css('width', percentage.toFixed(1) + unit);
		    document.getElementById("fundadoMeta").innerHTML = "<h3><strong>" + percentage.toFixed(1) + "% </strong><small>Meta</small></h3>";
		    document.getElementById("fundadoEntregados").innerHTML = "<h3><strong>" + totalPlantas + "</strong> <small> Vendidas</small></h3> ";
			
		  }
		  else
		  {
  		  	$('#level').css('width',100 + unit);
		  	
		  }
		  
	  },
	  error: function(error) {
	    // The request failed
		  	$('#level').css('width',0 + unit);
		  
	  }
	});
}


//Mostrar página de contacto
function mostrarContacto()
{
	var newUrl = "contacto.html";
	window.location.replace(newUrl);
	document.location.href = newUrl;
}

//Mostrar ranking de usuarios
function mostrarRankingUsuarios()
{
	var newUrl = "rankingUsuarios.html";
	window.location.replace(newUrl);
	document.location.href = newUrl;
}

//Mostrar kits
function mostrarKits()
{
	var newUrl = "kits.html";
	window.location.replace(newUrl);
	document.location.href = newUrl;
}

//Mostrar bambues
function mostrarBambues()
{
	var newUrl = "bambues.html";
	window.location.replace(newUrl);
	document.location.href = newUrl;
}

//Mostrar cactus
function mostrarCactus()
{
	var newUrl = "cactus.html";
	window.location.replace(newUrl);
	document.location.href = newUrl;
}

//Mostrar acerca de
function mostrarAcercaDe()
{
	var newUrl = "acercaDe.html";
	window.location.replace(newUrl);
	document.location.href = newUrl;
}