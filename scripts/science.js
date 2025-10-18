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
 |  |  \   __   _   _  |  __            |     _      _ __   __   __|         __    |/     _   _            /__[]   _  __  |    |
 |  |__/  /__\ / \ | \ | /__\   |  |  | |__  / \   |/ /__\ /  | /  |   | |  (__    |\  | / \ / \ |  |  |   |   | |/  (__ _|__  |
 |  |     \__  \_/ |_/ | \__    \_/ \_/ |  | \_/   |  \__  \_/ \\_/|   \_/\  __)   | \ |/  | \_/ \_/ \_/   |   | |    __) |_/  |
 |                 |                                                                                                           |
 |_____________________________________________________________________________________________________________________________|


If you're the sort of person who looks at the source code of webpages, try our challenge:

https://banana-news.github.io/banana/share_this_page

*/
    const scienceDivs = document.querySelectorAll(".science-div");
    const keyTerms = document.querySelectorAll(".kt");
    function getRandom(max) {
        return Math.floor(Math.random()*max);
    }
    for (i = 0;i<scienceDivs.length;i++) {
        random = getRandom(1);
        if (random === 1) {
            scienceDivs[i].innerHTML += "<div style='margin:auto;'><img src='/images/fish.png' height='100' width='100'><p>Good job! On to the next topic!</p></div>";
        } else {
            scienceDivs[i].innerHTML += "<div style='margin:auto;'><img src='/images/jelly.png' height='100' width='100'><p>Good job! On to the next topic!</p></div>";
        }
    }
    for (i = 0;i<keyTerms.length;i++) {
        keyTerms[i].textContent+="⚡";
        }