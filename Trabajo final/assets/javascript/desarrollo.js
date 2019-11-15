//SLIDER//
var temporizador=setInterval (derecha,3000);

function but(num){
	document.getElementById("fotos").setAttribute("src", "assets/css/fotos/"+num+ ".jpeg");
	cantimag=num;
}

var cantimag=0; 

function derecha(){
	document.getElementById("fotos").setAttribute("src", "assets/css/fotos/"+(cantimag+1)+".jpeg");
	cantimag=cantimag+1;

	if(cantimag==4){
		cantimag=0; 
	}
}

function izquierda(){

	if(cantimag==0){
		cantimag=4; 
	}

	document.getElementById("fotos").setAttribute("src", "assets/css/fotos/"+(cantimag)+".jpeg");

	cantimag=cantimag-1;
}
//CIERRE DE SLIDER//



//CARROUSEL//
var fotoequipo=['0','1','2','3','4','5','6'];
var nombreequipo=['0',"Cyrene", "Mark", "Alanis", "John", "Amelia", "Ashcroft"];
var infoequipo=['0',"Designer", "Architect", "Photographer", "Journalist", "UX Designer", "Software Developer"];


for(i=1; i<4; i++){
	document.getElementById("carrousel").innerHTML +="<figure id='contenedor"+i+"'><img id='equipo"+i+"' src= 'assets/files/equipo_index/"+i+".jpg'><figcaption id='informacion"+i+"'><h1>"+nombreequipo[i]+"</h1><h2>"+infoequipo[i]+"</h2></figcaption></figure>"; //replico tres veces para que se me muestren solo tres en desktop
} //devuelve el contenido y etiquetas html.

//inicializacion de variables
var suma1=1; //cada una es mi foto
var suma2=2;
var suma3=3; 

function right(){ //funcion para que cuando pase a la derecche se vaya sumando uno a la foto, figrue, figcaption
	suma1=suma1+1;
	suma2=suma2+1;
	suma3=suma3+1;

if(suma1>=7){/*si suma1 es mayor igual a 7, suma uno para a ser 1, va hacia delante*/
	suma1=1;
}

if(suma2>=7){
	suma2=1;
}

if(suma3>=7){
	suma3=1;
}

	document.getElementById("equipo1").setAttribute("src", "assets/files/equipo_index/"+suma1+".jpg");
	document.getElementById("informacion1").innerHTML = '<h1>'+nombreequipo[suma1]+'</h1><h2>'+ infoequipo[suma1]+'</h2>';

	document.getElementById("equipo2").setAttribute("src", "assets/files/equipo_index/"+suma2+".jpg");
	document.getElementById("informacion2").innerHTML = '<h1>'+nombreequipo[suma2]+'</h1><h2>'+ infoequipo[suma2]+'</h2>';

	document.getElementById("equipo3").setAttribute("src", "assets/files/equipo_index/"+suma3+".jpg");
	document.getElementById("informacion3").innerHTML = '<h1>'+nombreequipo[suma3]+'</h1><h2>'+ infoequipo[suma3]+'</h2>';

}

function left(){//funcion para que cuando pase a la izquierda se vaya restando uno a la foto, figrue, figcaption
	suma1=suma1-1;
	suma2=suma2-1;
	suma3=suma3-1;

if(suma1<=0){/*si suma1 es menor igual a 0, suma uno para a ser 6, vuelve para atras */
	suma1=6;
}

if(suma2<=0){
	suma2=6;
}

if(suma3<=0){
	suma3=6;
}

	document.getElementById("equipo1").setAttribute("src", "assets/files/equipo_index/"+suma1+".jpg");
	document.getElementById("informacion1").innerHTML = '<h1>'+nombreequipo[suma1]+'</h1><h2>'+ infoequipo[suma1]+'</h2>';

	document.getElementById("equipo2").setAttribute("src", "assets/files/equipo_index/"+suma2+".jpg");
	document.getElementById("informacion2").innerHTML = '<h1>'+nombreequipo[suma2]+'</h1><h2>'+ infoequipo[suma2]+'</h2>';

	document.getElementById("equipo3").setAttribute("src", "assets/files/equipo_index/"+suma3+".jpg");
	document.getElementById("informacion3").innerHTML = '<h1>'+nombreequipo[suma3]+'</h1><h2>'+ infoequipo[suma3]+'</h2>';
}
//CIERRE DE CARROSUEL//



//PORTFOLIO FIJO//

for(i=1;i<5;i++){
	document.getElementById("portfoliouno").innerHTML += '<figure id=fig'+i+'><img id="img_portfolio'+i+'"src="assets/files/portfolio/'+i+'.jpeg"> <figcaption id="parrafo'+i+'" class="houdini"><div id="fondo"><p>Well I know that getting you alone isnt easy to do, and I dont wanna lie, and i dont wanna tell you the truth And I know we got places to go, we got people to see Think we both oughta put em on hold and I know you agree Stop the world cause I wanna get out with you</p><a id="link"'+i+"' href='portfolio.html'>ver mas</a></div></figcaption></figure>";
}

//CIERRE DE PORTFOLIO FIJO//

//boton cambio//

function cambiar(){
	document.getElementById("bu").classList.toggle("cambio"); //agrega una clase al elemento seleccionado
}
//Cuando sólo hay un argumento presente: Alterna el valor de la clase; ej., si la clase existe la elimina y devuelve false, si no, la añade y devuelve true.
//Cuando el segundo argumento está presente: Si el segundo argumento se evalúa como true, se añade la clase indicada, y si se evalúa como false, la elimina.


//MENU HAMBURGUESA//
var flag=1;

function menu(){
	if(flag==1){// en el momento en el que esta prendido se muestra 
		flag=0;
		document.getElementById("cambie").style.transform = "translate(0,0)";
	}else{
		flag=1;// se apaga y se oculta 
		document.getElementById("cambie").style.transform = "translate(-100%,0)";
	}

}
