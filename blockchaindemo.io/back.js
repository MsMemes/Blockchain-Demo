var a = true;
var x = "s";


function addimage() { 
 if ((a == true) && (x == "s")){
   document.getElementById("perfil3").style.display ="block";
  x = "x";

 }

if ((a == false) && (x == "x")){
  document.getElementById("perfil4").style.display ="block";
x = "4";
}
a = false;
}

function stringToHash(string)
{
  var hash = 0;

  if (string.length == 0) return hash;

  for (i = 0; i < string.length; i++)
  {
    char = string.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}

var gBlock = {
  name: 'Genesis Block',
  data: "Welcome to Dogchain Demo",
  prevHash: 0,
  hash: stringToHash("Welcome to Dogchain Demo")
};

var fBlock = {
  name: 'First Block',
  data: "Welcome to the jungle",
  prevHash: gBlock.hash,
  hash: stringToHash("Welcome to the jungle")
};

var sBlock = {
  name: 'Second Block',
  data: "Welcome to heaven",
  prevHash: fBlock.hash,
  hash: stringToHash("Welcome to heaven")
};

var tBlock = {
  name: 'Third Block',
  data: "Welcome to hell",
  prevHash: sBlock.hash,
  hash: stringToHash("Welcome to hell")
};

document.getElementById("prevBName").innerHTML = gBlock.name;
document.getElementById("prevBPHash").innerHTML = gBlock.prevHash;
document.getElementById("prevBHash").innerHTML = gBlock.hash;

// Right block is hidden, to display change this attribute to "block"
// document.getElementById("bloque-presente").style.display = "none";


// Funciones para cambiar el nombre de usuario

function rolando(){
  document.getElementById("namepeer").innerHTML = "Rolando";
  document.getElementById("Ellipse_1_").style.border="5px solid blue";
  document.getElementById("Ellipse_1_ba").style.border = "0px"; 
  document.getElementById("perfil3").style.border = "0px"; 
  document.getElementById("perfil4").style.border = "0px"; 
}
function sergio(){
  document.getElementById("namepeer").innerHTML = "Sergio";
  document.getElementById("Ellipse_1_ba").style.border="5px solid blue";
  document.getElementById("Ellipse_1_").style.border = "0px"; 
  document.getElementById("perfil3").style.border = "0px"; 
  document.getElementById("perfil4").style.border = "0px"; 
}
function erika(){
  document.getElementById("namepeer").innerHTML = "Erika";
  document.getElementById("perfil3").style.border="5px solid blue";
  document.getElementById("Ellipse_1_ba").style.border = "0px"; 
  document.getElementById("Ellipse_1_").style.border = "0px"; 
  document.getElementById("perfil4").style.border = "0px"; 
}
function julia(){
  document.getElementById("namepeer").innerHTML = "Julia";
  document.getElementById("perfil4").style.border = "5px solid blue"; 
  document.getElementById("Ellipse_1_ba").style.border = "0px"; 
  document.getElementById("perfil3").style.border = "0px"; 
  document.getElementById("Ellipse_1_").style.border = "0px"; 
}