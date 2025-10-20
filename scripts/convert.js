var stuff = document.getElementById('codeInput').value;
var output = document.getElementById('output');
var lines = stuff.split("\n");
var html = "";
for (i in lines) {
    if (lines[i].startsWith("# ")) {
        html+=`<h1>${lines[i].slice(2)}</h1>`;
    } else if (lines[i].startsWith("## ")) {
        html+=`<h2>${lines[i].slice(3)}</h2>`;
    } else {
        html+=`<p>${lines[i]}</p>`;
    }
}