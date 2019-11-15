
var fotoequipo=['0','1','2','3','4','5','6'];
var nombreequipo=["0","Cyrene", "Mark", "Alanis", "John", "Amelia", "Ashcroft"];
var infoequipo=['0',"Designer", "Architect", "Photographer", "Journalist", "UX Designer", "Software Developer"];


for(i=1; i<3; i++){
	document.getElementById("ladouno").innerHTML +='<figure class="editfigure"><div class="overlay"><p>'+infoequipo[i]+'</p></div><img id="foto'+i+'" src="assets/files/equipo_fotos/'+i+'.jpg"> <figcaption class="informacion" id="info'+i+'"><h1 class="edittitulo">'+nombreequipo[i]+'</h1><p class="editparrafo">Do you think youre out of tune? What are you... theres no fucking Mars Bar down there, what are you looking at? Look up here, look at me. Do you think you were out of tune?</p><i class="fab fa-twitter"></i></figcaption></figure>';
}

for(i=3; i<5; i++){
	document.getElementById("ladodos").innerHTML +='<figure><div class="overlayuno"><p>'+infoequipo[i]+'</p></div><img id="foto'+i+'" src="assets/files/equipo_fotos/'+i+'.jpg"> <figcaption id="info'+i+'"><h1 class="edittitulo">'+nombreequipo[i]+'</h1><p>Do you think youre out of tune? What are you... theres no fucking Mars Bar down there, what are you looking at? Look up here, look at me. Do you think you were out of tune?</p><i class="fab fa-twitter"></i></figcaption></figure>';
}

for(i=5; i<7; i++){
	document.getElementById("ladotres").innerHTML +='<figure class="editfigure"><div class="overlay"><p>'+infoequipo[i]+'</p></div><img id="foto'+i+'" src="assets/files/equipo_fotos/'+i+'.jpg"> <figcaption class="informacion" id="info'+i+'"><h1 class="edittitulo">'+nombreequipo[i]+'</h1><p class="editparrafo">Do you think youre out of tune? What are you... theres no fucking Mars Bar down there, what are you looking at? Look up here, look at me. Do you think you were out of tune?</p><i class="fab fa-twitter"></i></figcaption></figure>';
}

//MENU HAMBURGUESA//
var flag=1;

function menu(){
	if(flag==1){
		flag=0;
		document.getElementById("cambie").style.transform = "translate(0,0)";
	}else{
		flag=1;
		document.getElementById("cambie").style.transform = "translate(-100%,0)";
	}

}