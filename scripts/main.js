// and , Please ask  before editing or deleting this code
//This is the main javascript script for all the sites - so it will control simple code like search results or key clicks. (The games will have their own scripts)
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


  //Note to collaborators: Please don't delete any part of the scripts unless you've consulted .

  //
  var optionsDivs = document.getElementsByClassName("options-div");
  for (let optionsDiv of optionsDivs) {
    optionsDiv.addEventListener("click", function(){
      window.location.href=optionsDiv.getAttribute('title');
    });
  }
  var newTabDivs = document.getElementsByClassName("newtab-div");
  for(let newTabDiv of newTabDivs) {
    newTabDiv.addEventListener("click", function(){
      window.open(newTabDiv.getAttribute('title'), '_blank');
    });
  }
  let big = true;
  setInterval(()=>{
    const viewportWidth = window.innerWidth;
    if (big === true && viewportWidth<768) {
      document.getElementById('bg').textContent="bn.";
      big = false;
    } else if (big ===false && viewportWidth>768) {
      document.getElementById('bg').textContent="banana.";
      big = true;
    }
  },500);
  function addTick() {
  document.querySelector("#message").textContent=`✅${document.querySelector("#message").textContent}`;
  }


 