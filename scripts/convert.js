// and , Please ask  before editing or deleting this code
/*
[]
 []
 []]]
 []]]]]]
  []]]]]]]
   []]]]]]]]
     []]]]]]]]
       []]]]]]]]]]
         []]\]]]]]]]]]]
           []]]]]]]]]
|
|___     ____      ___     ____      ___     ____            ___     ___               __
|   \   /   |   | /   \   /   |   | /   \   /   |         | /   \   /___\   |  |   |  (__ 
|___/   \__/ \  |/    |   \__/ \  |/    |   \__/ \        |/    |   \____   \__/\__/   __)

  _____________________________________________________________________________________________________________________________
 |                                                                                                                             |
 |   __                                                                            |                        __                 | 
 |  |  \   __   _   _  |  __            |     _      _ __   __   __|         __    |/     _   _            /__ o   _  __  |    |
 |  |__/  /__\ / \ | \ | /__\   |  |  | |__  / \   |/ /__\ /  | /  |   | |  (__    |\  | / \ / \ |  |  |   |   | |/  (__ _|__  |
 |  |     \__  \_/ |_/ | \__    \_/ \_/ |  | \_/   |  \__  \_/ \\_/|   \_/\  __)   | \ |/  | \_/ \_/ \_/   |   | |    __) |_/  |
 |                 |                                                                                                           |
 |_____________________________________________________________________________________________________________________________|


If you're the sort of person who looks at the source code of webpages, try our challenge:

https://banana-news.github.io/banana/share_this_page
*/
function convert() {
    var stuff = document.getElementById('codeInput').value;
    var lines = stuff.replace(/</gi, "&lt;").replace(/>/gi, "&gt;").split("\n");
    var html = "";
    var outputDiv = document.getElementById('output');

    for (let i = 0; i < lines.length; i++) { // Use a standard for loop with 'let'
        let line = lines[i];

        if (line.startsWith("# ")) {
            // H1 is correctly handled
            line = `<h1>${line.slice(2)}</h1>\n`;
            html += line;
        } else if (line.startsWith("## ")) {
            // H2 is correctly handled
            line = `<h2>${line.slice(3)}</h2>\n`;
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
            line = `<p>${line}</p>\n`;
            html += line;
        }
        // Empty lines are skipped
    }
    html = html.replace(/</gi, "&lt;").replace(/>/gi, "&gt;");
    html = html.replace(/\n/gi, "<br>");

    const selectElement = document.getElementById("mySelect");
    const value = selectElement.value;
    if (value==="option1") {
      html = `<div class="newsdiv">${html}</div>`;
    } else if (value==="option2") {
      html = `<div class="science-div">${html}</div>`;
    }
    
    outputDiv.innerHTML = html;
}