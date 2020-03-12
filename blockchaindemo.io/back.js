// En este archivo generaremos el backend de la pagina
/* function flipCard(){
  var bloque = main.getElementById("bloque-presente");
  var adoptButton= main.getElementById("adopt-button");
    adoptButton.click(function(){
      bloque.toggleClass("flip");
      alert("jajas");
    });
}; */



var a = true;


function addimage() { 
 if (a == true){
   var img = document.createElement("img");
   img.src = "perfil.png"; 
   //optionally set a css class on the image
   var class_name = "perfil_3";
   img.setAttribute("class", class_name);
  document.getElementById("Group_1_y").appendChild(img);
  
 }

if (a == false){

var img = document.createElement("img");
img.src = "perfil4.png"; 
//optionally set a css class on the image
var class_name = "perfil_4";
img.setAttribute("class", class_name);
document.getElementById("Group_1_y").appendChild(img);

}
a = false;
}




			 
		