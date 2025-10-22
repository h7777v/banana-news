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
var stuff = "## blahblahblah\n# blahalbahbal\n**stuff**\nadfwefawef\n_esafwaefawef_";
var lines = stuff.split("\n").replace(/</gi, "&lt;").replace(/>/gi, "&gt;")
var html = "";
for (i in lines) {
    if (lines[i].startsWith("# ")) {
        html+=`<h1>${lines[i].slice(2)}</h1>`;
    } else if (lines[i].startsWith("## ")) {
        html+=`<h2>${lines[i].slice(3)}</h2>`;

    } else {

     if (lines[i].includes("**")) {
        let segments = lines[i].split("**");
        let first = true;
        for (i in segments) {
            if (i<segments.length-1) {
                html+=segments[i]
                if (first) {
                    html+="<b>";
                    first = false;
                } else {
                    html+="</b>";
                    first = true;
                }
            }
        }
    } else if (lines[i].includes("_")) {
        let segments = lines[i].split("_");
        let first = true;
        for (i in segments) {
            if (i<segments.length-1) {
                html+=segments[i]
                if (first) {
                    html+="<i>";
                    first = false;
                } else {
                    html+="</i>";
                    first = true;
                }
            }
        }
    } else {
        html+=`<p>${lines[i]}</p>`;
    }

}
}
console.log(html);