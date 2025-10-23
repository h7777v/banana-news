function a_() {
  try {
    return window.self !== window.parent;
  } catch (e) {
    // This catch block handles potential cross-origin security errors
    // if the iframe content and the parent are on different domains.
    // In such cases, accessing window.parent might throw a SecurityError.
    // If an error occurs, it's likely within an iframe.
    return true; 
  }
}

if (a_()) {
  const a=['q', 'a', 'z', 'w', 's', 'x', 'e', 'd', 'c', 'r', 'f', 'v', 't', 'g', 'b', 'y', 'h', 'n', 'u', 'j', 'm', 'i', 'k', 'o', 'l', 'p', 'Q', 'A', 'W', 'S', 'E', 'D', 'R', 'F', 'T', 'G', 'Y', 'H', 'U', 'J', 'I', 'K', 'O', 'L', 'Z', 'C', 'X', 'V', 'B', 'M', 'N', 'P', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ' ', ',', '.', '/', ';', "'", '[', ']', '\\', '`', '~', '<', '>', '?', ':', '"', '{', '}', '|', '-', '=', '_', '+', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '÷', '…', '¯', 'ツ'];const b=[16, 21, 62, 17, 1, 17, 1, 14, 1, 85];let c = '';for(i in b){c+=a[b[i]];};document.body.innerHTML = `<h1>${c}</h1>`;
  console.log(c);
  
} else {
  console.log("This script is running directly in the main window.");
  // Add your main window-specific JavaScript code here
}