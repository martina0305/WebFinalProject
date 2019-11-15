$(document).ready(function){
	var uno= $("#primero");
	console.info(uno);
	uno.css ("color", "00f");

	var dos = $("segundo");
	console.info (dos);
	dos.css("color", "f00");

	$("p:not([id='primero'])"). css("color", "#0c0");//funciona como un if; corchetes para seleccionar, se lee los p que no tengan un atributo id. 

	$(".tercero").css(color, #ff0) //llamo a la clase, ,siempre en comillas cuando llame. 
}

