// Calcular termometro
function calcularTermometro(){
	Parse.initialize("LUSRBvC9SjQBrv2YEPCoCMO3gDbDVzy415qrZumJ", "GQyuwQsf0IBgbeTCzWKDqr5TxOwral7IvdlYbT6J");    
	
	var unit = "%";
	var Venta = Parse.Object.extend("Venta");
	var query = new Parse.Query(Venta);
	query.limit(500);
	query.count({
	  success: function(count) {
	    // The count request succeeded. Show the count
		  if(count<100)
		  {
			var percentage = count/500* 100;
		  	$('#level').css('width', percentage + unit);
		    document.getElementById("fundadoMeta").innerHTML = "<strong>" + percentage + "% </strong><span>Meta</span>";
		    document.getElementById("fundadoEntregados").innerHTML = "<strong>" + count + "</strong> <span>Vendidas</span>";
			
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