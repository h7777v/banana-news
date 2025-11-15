let socket = new WebSocket("wss://javascript.info/article/websocket/chat/ws");
//javascript.info/article/websocket/chat/ws
var whisperTo = null

// send message from the form
document.forms.publish.onsubmit = function() {
  //let outgoingMessage = this.message.value;
  /*let code = JSON.stringify({
    Flatmine : true,
    SigVXCODE : "<%6sdfj^flat^x!>",
    type : "msg",
    config : {
      world : [CurrentWorldName, CurrentWorldNumber], 
      whisper : {to : whisperTo}, 
      from : user,
      portpass : CurrentServerPass
    }, 
    deliver : {msg : outgoingMessage}
  })*/
  //let code = outgoingMessage
  //console.log("hi")
  //socket.send(code);
};

// message received - show the message in div#messages
socket.onmessage = function(event) {
  //let message = JSON.parse(event.data);
  let message = event.data
  console.log(message)
}