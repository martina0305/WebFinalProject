//SKILLS//
/*
for(i=1; i<11; i++){
	document.getElementById("skills"). innerHTML += "<p><i class='fas fa-circle'></i> Photoshop</p>";
}*/

for(i=1; i<3; i++){
	document.getElementById("education"). innerHTML += "<h2 class='subtitulos'>My name is Sam</h2><h3 class='subtitulosh3'>Dialogue (2001-2hs)</h3><p class='parrafocv'>I just don't know what to call you: retarded, mentally retarded, mentally handicapped, mentally disabled, intellectually handicapped, intellectually disabled, developementally disabled...You can call me sam.</p>";
}


for(i=1; i<4; i++){
	document.getElementById("professional"). innerHTML += "<h2 class='subtitulos'>Queen</h2><h3 class='subtitulosh3'>Classic Rock//Jazz//1978</h3><p class='parrafocv'>That's why they call me Mister Fahrenheit, Im traveling at the speed of light I wanna make a supersonic man out of you Dont stop me now, Im having such a good time I'm having a ball Don't stop me now If you wanna have a good time, just give me a call I dont want to stop at all.</p>";
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