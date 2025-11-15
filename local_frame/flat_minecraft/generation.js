var Game = document.getElementById("game");
var Chat = document.getElementById("chat");
var WorldSector = document.getElementById("worldSector");
var setting = document.getElementById("setting");
var content = document.getElementById("content");
var CreateWorldPage = document.getElementById("CreateWorld");
Game.style.display="none";
//Chat.style.display="none";
WorldSector.style.display="none";
setting.style.display="none";
CreateWorldPage.style.display="none";

if(isMobile || width < 730){
  let elements = document.getElementsByClassName("btn-m");
  for (let ixxxxxx = 0; ixxxxxx < elements.length; ixxxxxx++) {
    elements[ixxxxxx].style.width="150px;";
  }
  void(elements)
}

const chatButtonAnnimation = document.getElementById("chat-btn");
chatButtonAnnimation.addEventListener("click", function() {
  if(chat === false){
    document.getElementById("chat").style.display="block";
    chat = true;
  };
  if(chat){
    document.getElementById("chat").style.display="none";
    chat = false;
  }
});

document.getElementById("MobileDisplay").innerHTML="Mobile display: "+Mobile.display;
document.getElementById("MobileControll").innerHTML="Mobile controll: "+Mobile.controll;

//document.getElementById("chat").addEventListener("click", function(){if(chat === false){document.getElementById("chat").style.display="block";chat = true;};if(chat){document.getElementById("chat").style.display="none";chat = false}});