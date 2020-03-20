var a = true;
var x = "s";

var nPair = 0;

var nBlockC = 1;

function addimage() { 

  if ((a == true) && (x == "s"))
  {
    document.getElementById("perfil3").style.display = "block";
    x = "x";
  }

  if ((a == false) && (x == "x"))
  {
    document.getElementById("perfil4").style.display = "block";
    x = "4";
  }
  /*
 if ((a == true) && (x == "s")){
   var img = document.createElement("img");
   img.src = "perfil.png"; 
   //optionally set a css class on the image
   var class_name = "perfil_3";
   img.setAttribute("class", class_name);
   img.setAttribute("")
  document.getElementById("Group_1_y").appendChild(img);
  x = "x";

 }

if ((a == false) && (x == "x")){

var img = document.createElement("img");
img.src = "perfil4.png"; 
//optionally set a css class on the image
var class_name = "perfil_4";
img.setAttribute("class", class_name);
document.getElementById("Group_1_y").appendChild(img);
x = "4";
}
*/
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

var nBlock = {
  name: 'Null Block',
  data: "null",
  prevHash: "null",
  hash: "null"
};

function getFirstBlock(n)
{
  if (n == 0)
  {
    return gBlock;
  }
  else if (n == 1 && nBlockC > 1)
  {
    return fBlock;
  }
  else if (n == 2 && nBlockC > 2)
  {
    return sBlock;
  }
}

function getSecondBlock(n)
{
  if (n == 0 && nBlockC > 1)
  {
    return fBlock;
  }
  else if (n == 1 && nBlockC > 2)
  {
    return sBlock;
  }
  else if (n == 2 && nBlockC > 3)
  {
    return tBlock;
  }
  else
  {
    return nBlock;
  }
}

var pPerro = {
  name: 'Cientifico',
  adoptedBy: 'None'
};

var sPerro = {
  name: 'Higienico',
  adoptedBy: 'None'
};

var tPerro = {
  name: 'Otaku',
  adoptedBy: 'None'
};

var cPerro = {
  name: 'Huichol',
  adoptedBy: 'None'
};

// Get the attributes of the carousel
// Left card:
// Name
var leftBName = document.getElementById("prevBName");
// Previous Hash
var leftBPHash = document.getElementById("BAntHashAnt");
// Hash
var leftBHash = document.getElementById("BAntHashPresente");

leftBName.innerHTML = gBlock.name;
leftBPHash.innerHTML = gBlock.prevHash;
leftBHash.innerHTML = gBlock.hash;

// Right card:
// Name
var rightBName = document.getElementById("BName");
// Previous Hash
var rightBPHash = document.getElementById("BPreHashAnt");
// Hash
var rightBHash = document.getElementById("BPreHashPresente");

rightBName.innerHTML = nBlock.name;
rightBPHash.innerHTML = nBlock.prevHash;
rightBHash.innerHTML = nBlock.hash;


// Right block is hidden, to display change this attribute to "block"
// document.getElementById("bloque-presente").style.display = "none";

function verifyDog(dName)
{
  if (dName == pPerro.name)
  {
    return pPerro;
  }
  else if (dName == sPerro.name)
  {
    return sPerro;
  }
  else if (dName == tPerro.name)
  {
    return tPerro;
  }
  else if (dName == cPerro.name)
  {
    return cPerro;
  } 
}

/*
function adoptDog()
{
  let container = document.querySelectorAll('.container');

  for (let i = 0; i < container.length; i++)
  {
    container[i].addEventListener('click', (e) => {
      
      if (e.target.className == "button")
      {
        verifyDog(e.target.name).adoptedBy = ODAGNAEONGJERKGNJFDNGDJ;
      }
    });
  }
  
}
*/

function updatePair()
{
  var aBlock;
  var bBlock;

  aBlock = getFirstBlock(nPair);
  bBlock = getSecondBlock(nPair);

  leftBName.innerHTML = aBlock.name;
  leftBPHash.innerHTML = aBlock.prevHash;
  leftBHash.innerHTML = bBlock.hash;

  rightBName.innerHTML = bBlock.name;
  rightBPHash.innerHTML = bBlock.prevHash;
  rightBHash.innerHTML = bBlock.hash;  
}

function init()
{
  adoptDog();
}

init();

// Funciones para cambiar el nombre de usuario

function rolando(){
  document.getElementById("namepeer").innerHTML = "Rolando";
}
function sergio(){
  document.getElementById("namepeer").innerHTML = "Sergio";
}
function erika(){
  document.getElementById("namepeer").innerHTML = "Erika";
}
function julia(){
  document.getElementById("namepeer").innerHTML = "Julia";
}

function buttonPrev()
{
  if (nPair > 0)
  {
    nPair -= 1;
    updatePair();
  }
}

function buttonNext()
{
  if (nPair < 2)
  {
    nPair += 1;
    updatePair();
  }
}

function adoptDog()
{
  if (nBlockC == 1)
  {
    nBlockC += 1;
    updatePair();
  }
  else if (nBlockC == 2)
  {
    nBlockC += 1;
    updatePair();
  }
  else if (nBlockC == 3)
  {
    nBlockC += 1;
    updatePair();
  }
}