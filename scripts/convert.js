function convert() {
    var stuff = document.getElementById('codeInput').value;
    var lines = stuff.replace(/</gi, "&lt;").replace(/>/gi, "&gt;").split("\n");
    var html = "";
    var outputDiv = document.getElementById('output');

    for (let i = 0; i < lines.length; i++) { // Use a standard for loop with 'let'
        let line = lines[i];

        if (line.startsWith("# ")) {
            // H1 is correctly handled
            line = `<h1>${line.slice(2)}</h1>`;
            html += line;
        } else if (line.startsWith("## ")) {
            // H2 is correctly handled
            line = `<h2>${line.slice(3)}</h2>`;
            html += line;
        } else if (line.trim().length > 0) { // Check if the line isn't empty (or just whitespace)

            // 1. Process inline formatting using Regular Expressions
            // Bold: **text** -> <b class='kt'>text</b>
            // The 'g' flag ensures all occurrences are replaced.
            line = line.replace(/\*\*(.*?)\*\*/g, "<b class='kt'>$1</b>");
            
            // Italic: _text_ -> <i>text</i>
            line = line.replace(/_(.*?)_/g, "<i>$1</i>");
            
            // Inline Code: `text` -> <code>text</code>
            line = line.replace(/`(.*?)`/g, "<code>$1</code>");

            // 2. Wrap the line in a paragraph tag after all inline replacements
            line = `<p>${line}</p>`;
            html += line;
        }
        // Empty lines are skipped
    }
    outputDiv.innerHTML = html;
}