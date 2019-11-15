var fotoporfolio=['1','2','3','4','5','6','7','8','9','10','11','12'];
var tituloportfolio=["Savage","Wet","Green","Oculus","Tabu","Flower","Strong","Serious","Wild","Lighting","City","Neon"];
var subtitulo=["Taeky","Alexia","Cyphia","R&H","Josh","Venus","Axia","Kayla","Marshall","Trisha","Ashley","Spencer"];
var parrafoportfolio=["Close friends are truly life's treasures. Sometimes they know us better than we know ourselves.","With gentle honesty, they are there to guide and support us, to share our laughter and our tears.", "Their presence reminds us that we are never really alone.The sadness will last forever.", "It is good to love many things, whosoever loves much performs much, and can accomplish much, what is done in love is well done.", "A great fire burns within me, but no one stops to warm themselves at it, and passers-by only see a wisp of smoke","If you hear a voice within you say you cannot paint, then by all means paint and that voice will be silenced.", "What am I in the eyes of most people who has no position in society and will never have; in short, the lowest of the low.", "All right, then — even if that were absolutely true, then I should one day like to show by my work what such an eccentric, such a nobody, has in his heart.","That is my ambition, based less on resentment than on love in spite of everything, based more on a feeling of serenity than on passion.", "Though I am often in the depths of misery, there is still calmness, pure harmony and music inside me.", "I see paintings or drawings in the poorest cottages, in the dirtiest corners.", "And my mind is driven towards these things with an irresistible momentum."];


 
for(i=0; i<12; i++){
	document.getElementById("portfolio").innerHTML += "<figure onclick='hi("+i+")'><img src='assets/files/portfolio_fotos/"+(i+1)+".jpg'><figcaption><h1>"+tituloportfolio[i]+"</h1></figcaption></figure>";
}

function hi(num) {//tengo mi funcion en el figure para que cuando hagas click despliegue toda la informacion, pasando el parametro de num para que tenga las posiciones 
	document.getElementById("black").setAttribute('class', "black");
	document.getElementById("foto").setAttribute('src', "assets/files/portfolio_fotos/"+fotoporfolio[num]+".jpg");
	document.getElementById("titulo").innerHTML = tituloportfolio[num];
	document.getElementById("subtitulo").innerHTML = subtitulo[num];
	document.getElementById("parrafo").innerHTML = parrafoportfolio[num];

}

function bye(){//boton X asignandole una clase sin nada, ocultarlo
	document.getElementById("black").setAttribute('class', "ocultese");
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
