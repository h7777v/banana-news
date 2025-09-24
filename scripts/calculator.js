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
function backspace() {
      form1.answer.value=form1.answer.value.substring(0,form1.answer.value-1);
    }
    function calculate() {
      if (form1.answer.value.trim().toLowerCase().includes('the answer to life the universe and everything')){
        form1.answer.value =42;
        //hee hee
      }
      //Haoyang if you have the JavaScript code for the thing, please help!
      //This dumb JS code is unfinished

/*
      else if(form1.answer.value.includes("Banana Encryption Systems")) {
        form1.answer.value.replace("Banana Encryption Systems", "");
        const string = form1.answer.value;
        const stringArray = string.split('');
        const letterArray = ['q','a','z','w','s','x','e','d','c','r','f','v','t','g','b','y','h','n','u','j','m','i','k','o','l','p','Q','A','W','S', 'E','D','R','F','T','G','Y','H','U','J','I','K','O','L','Z','C','X','V','B','M','N','P','1','2','3','4','5','6','7','8','9','0',' ',',','.','/',';',"'",'[',']','\\','`','~','<','>','?',':','"','{','}','|','-','=','_','+','!','@','#','$','%','^','&','*','(',')','÷','…','¯','ツ'];
        let notUnSupported = true
        let indexes = []
        for (i in stringArray){
          if (stringArray[i] in letterArray) {
            indexes.append()
          }
        }
      }*/else {
        try{
        form1.answer.value = eval(form1.answer.value);
        }
        catch(error){
        form1.answer.value = "ERROR";
        }
      }
    }