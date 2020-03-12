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