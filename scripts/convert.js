function convert() {
    var stuff = document.getElementById('codeInput').value;
    var lines = stuff.replace(/</gi, "&lt;").replace(/>/gi, "&gt;").split("\n");
    var html = ""
    var outputDiv = document.getElementById('output');

    for (i in lines) {
        if (lines[i].startsWith("# ")) {
            lines[i] = `<h1>${lines[i].slice(2)}</h1>`;
            html+=lines[i]
        } else if (lines[i].startsWith("## ")) {
            lines[i] = `<h2>${lines[i].slice(3)}</h2>`;
            html+=lines[i]
        } else {
            if (lines[i].includes("**")) {
                while (lines[i].includes("**")) {
                    lines[i] = lines[i].split("**", 1).join("<b>");
                    lines[i] = lines[i].split("**", 1).join("</b>");
                }
                lines[i] = `<p>${lines[i]}</p>`;
                html+=lines[i];
            } else if (lines[i].includes("_")) {
                while (lines[i].includes("_")) {
                    lines[i] = lines[i].split("_", 1).join("<i>");
                    lines[i] = lines[i].split("_", 1).join("</i>");
                }
                lines[i] = `<p>${lines[i]}</p>`;
                html+=lines[i];
            } else if (lines[i].includes("`")) {
                while (lines[i].includes("`")) {
                    lines[i] = lines[i].split("`", 1).join("<code>");
                    lines[i] = lines[i].split("`", 1).join("</code>");
                }
                lines[i] = `<p>${lines[i]}</p>`;
                html+=lines[i];
            }

        }
    }
    outputDiv.innerHTML = `<p>${html}</p>`;
}