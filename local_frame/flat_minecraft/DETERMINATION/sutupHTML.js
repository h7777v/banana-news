var GameStart = false;
var Chunks = {};
var daytime = null;
var time = null;
var days = null;
var gameDate = null;
var CurrentWorldName = null
var CurrentWorldNumber = null
var user = null;
var CurrentServerPass = null;
var chat = false;
var isMobile = null;
var width = window.innerWidth;
var height = window.innerHeight;
var outWidth = window.screen.width
var outHeight = window.screen.height
var cord = {x:null, y:null}
var WorldType = "infinate"
var db = new PouchDB('save');
var Mobile = {
  "display" : null,
  "controll" : null
}
var variable = {
  "d" : "daytime",
  "t" : "time"
}

async function readJsonFile() {
  try {
      const response = await fetch('DETERMINATION/Block/manifest.json');
      if (!response.ok) {
          throw new Error('Failed to fetch the JSON file');
      }
      var blockData = await response.json();
      console.log(blockData);
  } catch (error) {
      console.error('Error:', error.message);
  }
}
readJsonFile();

if ("maxTouchPoints" in navigator) {
  isMobile = navigator.maxTouchPoints > 0;
} else if ("msMaxTouchPoints" in navigator) {
  isMobile = navigator.msMaxTouchPoints > 0;
} else {
  var mQ = window.matchMedia && matchMedia("(pointer:coarse)");
  if (mQ && mQ.media === "(pointer:coarse)") {
    isMobile = !!mQ.matches;
  } else if ('orientation' in window) {
    isMobile = true; // deprecated, but good fallback
  } else {
    // Only as a last resort, fall back to user agent sniffing
    var UA = navigator.userAgent;
      isMobile = (
        /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
        /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)
    );
  }
}

if(isMobile === false){
  Mobile.display = "off";
  Mobile.controll = "off";
} else {
  Mobile.display = "on";
  Mobile.controll = "on";
}