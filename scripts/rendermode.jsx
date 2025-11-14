(()=>{
let __x__ = false;
let mode;
const cookies = document.cookie.split('; ');
for (const cookie of cookies) {
  const [key, value] = cookie.split('=');
  if (key === "rndmode"){
    __x__ = true;
    mode = value;
  }
}
if(__x__ === false){
  const date = new Date();
  date.setTime(date.getTime() + 2592000000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = `rndmode=2; ${expires}; path=/;`;
  mode = "2";
}
let html;
switch(mode){
  case "0":
    //effeciency
    break;
  case "1":
    //balenced
    break;
  case "2":
    //high performance
    html = (
      <>
        <link rel="preload" href="/images/a.svg" as="image"/>
        <link rel="preload" href="/images/a2.svg" as="image"/>
        <link rel="preload" href="/images/360_F_536235793_wlduO29kZpQNvC0P4qaoe3oRzAalZ0LI.jpg" as="image"/>
      </>
    );
    document.head.appendChild(html)
    break;
  }
})();