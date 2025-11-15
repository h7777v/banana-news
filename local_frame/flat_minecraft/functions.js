function startGame(){
  //
}

function Map(){
  //
}

function createNewWorld(WorldType) {
  Chunks = {
    "-4": [],
    "-3": [],
    "-2": [],
    "-1": [],
    "0": [],
    "1": [],
    "2": [],
    "3": [],
    "4": [],
    "5": []
  };

  if (WorldType === "infinite") {
    //
  } else if (WorldType === "flat") {
    //
  } else if (WorldType === "flat(completely)"){
    for (let y = 300; y >= -299; y--) {
      let key = 1;
      if (y === -1) {
        key = 2;
      } else if (y <= -2 && y >= -299) {
        key = 3;
      }
      if (!Chunks[key]) {
        Chunks[key] = [];
      }
      for (let x = -99; x <= 100; x++) {
        if(x>-100&&x<-79){
          Chunks["-4"].push([{x: x, y: y, b: key}]);
        } else if(x>-80&&x<-59){
          Chunks["-3"].push([{x: x, y: y, b: key}]);
        } else if(x>-60&&x<-39){
          Chunks["-2"].push([{x: x, y: y, b: key}]);
        } else if(x>-40&&x<-19){
          Chunks["-1"].push([{x: x, y: y, b: key}]);
        } else if(x>-20&&x<1){
          Chunks["0"].push([{x: x, y: y, b: key}]);
        } else if(x>0&&x<21){
          Chunks["1"].push([{x: x, y: y, b: key}]);
        } else if(x>20&&x<41){
          Chunks["2"].push([{x: x, y: y, b: key}]);
        } else if(x>40&&x<61){
          Chunks["3"].push([{x: x, y: y, b: key}]);
        } else if(x>60&&x<81){
          Chunks["4"].push([{x: x, y: y, b: key}]);
        } else if(x>80&&x<101){
          Chunks["5"].push([{x: x, y: y, b: key}]);
        }
      }
    }
  }
}

function ChatControll(){
  if(chat == false){
    document.getElementById("chat").style.display="none";
    console.log(3)
    chat = true;
  }else if(chat){
    document.getElementById("chat").style.display="block";
    console.log(4)
    chat = false;
  }
}

function trans(input, inWay){
  let output = ""
  let transKey = {
    "a" : "ᔑ",
    "A" : "ᔑ",
    "b" : "ʖ",
    "B" : "ʖ",
    "c" : "ᓵ",
    "C" : "ᓵ",
    "d" : "↸",
    "D" : "↸",
    "e" : "Ŀ",
    "E" : "Ŀ",
    "f" : "⎓",
    "F" : "⎓",
    "g" : "⫞",
    "G" : "⫞",
    "h" : "⫧",
    "H" : "⫧",
    "i" : "¦",
    "I" : "¦",
    "j" : "⁝",
    "J" : "⁝",
    "k" : "ꖌ",
    "K" : "ꖌ",
    "l" : "ꖎ",
    "L" : "ꖎ",
    "m" : "ᒲ",
    "M" : "ᒲ",
    "n" : "リ",
    "N" : "リ",
    "o" : "𝙹",
    "O" : "𝙹",
    "p" : "!¡",
    "P" : "!¡",
    "q" : "ᑑ",
    "Q" : "ᑑ",
    "r" : "∷",
    "R" : "∷",
    "s" : "ᓭ",
    "S" : "ᓭ",
    "t" : "ℸ ̣",
    "T" : "ℸ ̣",
    "u" : "⚍",
    "U" : "⚍",
    "v" : "⫨",
    "V" : "⫨",
    "w" : "∴",
    "W" : "∴",
    "x" : "̇/",
    "X" : "̇/",
    "y" : "‖",
    "Y" : "‖",
    "z" : "⨅",
    "z" : "⨅"
  }
  let z = input.split("")
  if(inWay === true){
    for(let i = 0; i < z.length; i++){
      output += transKey[z[i]]
    }
  } else {
    for(let i = 0; i < z.length; i++){
      for(let ix = 0; ix < transKey.length; i++){
        if(transKey[ix] == z[i]){
          output += transKey[z[ix]]
        }
      }
    }
  }
}

function insert(doc){
  db.put(doc, function(err, response) {  
    if(err){
      return err;  
    }else{
      return "Document created Successfully";  
    }
  }); 
}

function find(id){
  db.get(id, function(err, doc) {  
    if(err){
      if(err.name === 'not_found'){
        return [true];
      }
      return err;
    }else{
      return doc;  
    }
  });
}