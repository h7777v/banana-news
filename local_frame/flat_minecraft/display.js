let dataBlock = fetchJSONData();
let html = "";

function fetchJSONData() {
  try{
    fetch("DETERMINATION/Block/manifest.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error
            (`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => 
        dataBlock = data)
  }catch(error){
    console.error("Unable to fetch data:", error);
  }
}

function display(obj, type, atr, x, y, playerX, playerY, fovX, fovY, alt){
  if(type == "block"){
    url = dataBlock[obj].file;
    html += `<img src=${url} width=${width/fovX*2} height=${height/fovY} class="block" style='bottom: ${(Math.abs(playerY-y))/(height/fovY)+height/2-height/fovY}px;left: ${(Math.abs(playerX-x))/(width/fovX)+width/2}px;' alt=${alt}>`
  } else if(type == "player"){
    url = "steve.png";
    html += `<img src=${url} width=${width/fovX*2} height=${height/fovY*2} class="block" style='bottom: ${height/2}px;left: ${width/2}px;' alt=${alt}>`
  }
  document.getElementById("gameContent").innerHTML=html
}