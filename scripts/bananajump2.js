var x = 0
var y = 0
var vy = 0
var drag = 0.9
var gravity = 50
var speed = 200
var dt_ = 50
var dt__ = dt_
var dt = dt_
var fps = 1000/dt
var acclerate = 500
var accleratL = 150
var slowfall = 0
var evtKey = ""
var seed = Math.floor(Math.random()*10e6)

var startTime = 0;
var endTime = 0;

var currImg = ""
var currItem = ""
var layout = ""
var currRenders = []
var frnd = []
var l
var w
var l_

var item = {
  1:["Spike", "/images/spike.png"]
}
var level = {
  1:{
    1:["Spike", 550, 20, 20, "auto"],
    2:["Spike", 720, 0, 20, "auto"], 
    3:["Spike", 1000, 0, 20, "auto"], 
    4:["Spike", 1400, 0, 20, "auto"],
    5:["Spike", 1410, 0, 20, "auto"],
    6:["Spike", 1500, 0, 20, "auto"],
    7:["Spike", 1515, 0, 20, "auto"],
    8:["Spike", 1715, 0, 20, "auto"],
    9:["Spike", 2015, 0, 20, "auto"],
    10:["Spike", 2025, 0, 20, "auto"],
    11:["Spike", 3000, 0, 20, "auto"],
    12:["Spike", 3005, 0, 20, "auto"],
    13:["Spike", 4075, 0, 20, "auto"],
    14:["Spike", 5000, 0, 20, "auto"],
    15:["Spike", 5500, 0, 20, "auto"],
    16:["Spike", 6000, 0, 20, "auto"],
    17:["Spike", 6500, 0, 20, "auto"],
    18:["Spike", 7000, 0, 20, "auto"],
    19:["Spike", 7500, 0, 20, "auto"],
    20:["Spike", 8000, 0, 20, "auto"],
    21:["Spike", 8500, 0, 20, "auto"],
    22:["Spike", 9000, 0, 20, "auto"],
    20:["Spike", 9800, 0, 20, "auto"],
  }
}

//let setGravity = setInterval(function(){vy = vy - gravity}, 50);
let runInterval = setInterval(gameLoop, dt__);

function isColliding(el1, el2) {
  const rect1 = el1.getBoundingClientRect();
  const rect2 = el2.getBoundingClientRect();
  return !(
    rect1.right < rect2.left || 
    rect1.left > rect2.right || 
    rect1.bottom < rect2.top || 
    rect1.top > rect2.bottom
  ) 
}

function getAspectRatioFromImageUrl(imageUrl) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = imageUrl;

    img.onload = () => {
      const width = img.naturalWidth;
      const height = img.naturalHeight;

      if (width && height) {
        const aspectRatio = [width,height];
        resolve(aspectRatio);
      } else {
        reject(new Error("Could not get image dimensions."));
      }
    };

    img.onerror = () => {
      reject(new Error("Failed to load image from URL."));
    };
  });
}

//const imageUrl = 'https://toppng.com/uploads/preview/spikes-11550721030sp47x0fyra.png'; // Replace with your image URL

/*getAspectRatioFromImageUrl(imageUrl)
  .then(aspectRatio => {
    console.log(`The aspect ratio of the image is: ${aspectRatio}`);
  })
  .catch(error => {
    console.error(error.message);
  });*/

function gameLoop() {
  startTime = performance.now();
  fps = 1000/dt
  y = y+vy*(dt/1000)
  x += speed*dt/1000
  vy = vy - gravity*dt/50
  if(y < 0){
    y = 0
    vy = 0
  }
  vy = vy*drag
  layout = ""
  frnd = []
  for(let currentRender=0; currentRender < Object.keys(level["1"]).length;currentRender++){
    for(let currentRenderItem=0; currentRenderItem < Object.keys(item).length;currentRenderItem++){
      if(item[`${currentRenderItem+1}`][0] == level["1"][`${currentRender+1}`][0]){
        currImg = item[`${currentRenderItem+1}`][1]
        currItem = item[`${currentRenderItem+1}`][0]
        break
      }
    }
    if(currentRender in currRenders){}else{
      frnd.push(currentRender)
    }
    currRenders.push(currentRender)
    if(level["1"][`${currentRender+1}`][3]=="auto"){l="px;display: inline-block;"}else{l=level["1"][`${currentRender+1}`][3]}
    if(level["1"][`${currentRender+1}`][4]=="auto"){w="px;display: inline-block;"}else{w=level["1"][`${currentRender+1}`][4]}
    if(level["1"][`${currentRender+1}`][4]=="auto"){getAspectRatioFromImageUrl(currImg).then(aspectRatio => {l_=(level["1"][`${currentRender+1}`][3]/aspectRatio[0])*aspectRatio[1]}).catch(error => {console.error(error.message);});}else{l_=level["1"][`${currentRender+1}`][4]}
    layout += `<div id="${currentRender}" style="position:relative!important;left:${level["1"][`${currentRender+1}`][1]-x}px;top:${level["1"][`${currentRender+1}`][2]+125-l_}px;height:${l}px!important;width:${w}px!important;"><img alt="${currItem}" height="${level["1"][`${currentRender+1}`][3]}" width="${level["1"][`${currentRender+1}`][4]}" src="${currImg}"></div>`
  }
  if(evtKey === "ArrowUp" || evtKey == " ") {
    if (y == 0){
      vy+=acclerate
    } else if (y < 15){
      vy+=accleratL
    } else {
      vy+=slowfall
    }
  }
  for(let i of currRenders){
    if(i in frnd){}else{
      if(isColliding(document.getElementById("hitboxBanana"), document.getElementById(`${i}`))){
        dt_ = 1.797693134862315E+308;
        document.getElementById("dangers").innerHTML="<h1>You died</h1>"
      }
    }
  }
  if(x > 10000){
    document.getElementById("dangers").innerHTML="<h1>You win</h1>"
  }
  /*for(let i=0;i<currRenders.length;i++){
    if(i in frnd){}else{
      document.getElementById(`${currRenders[i]}`).style.left = `${level["1"][`${currRenders[i]+1}`][1]-x}px`;
    }
  }*/
  document.getElementById("hitboxBanana").style.top=125-y+'px'
  document.getElementById("dangers").innerHTML=layout
  document.getElementById("fps").innerHTML="Fps: " + fps
  document.getElementById("dt").innerHTML="Delta time: " + dt
  endTime = performance.now();
  dt = (endTime - startTime) + dt_
  dt__ += dt_ - dt
}

document.addEventListener("keydown", function(event) {
  evtKey = event.key
});

document.addEventListener("keyup", function(_) {
  evtKey = ""
});