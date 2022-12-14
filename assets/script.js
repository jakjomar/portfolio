
var dark = document.getElementById("dark");
var light = document.getElementById("light");
const link = document.createElement('link');
link.rel = 'stylesheet';
document.getElementsByTagName('HEAD')[0].appendChild(link);
if (localStorage.getItem('darkMode')===null){
    localStorage.setItem('darkMode', "");
}
if(localStorage.getItem('darkMode') == "on"){
    link.href="assets/css/darkmode.css";
}else{
    link.href="";
}
dark.onclick = function(){
    localStorage.setItem('darkMode', "on");
    dark.style.display="none";
    light.style.display="flex";
    link.href="assets/css/darkmode.css";
}
light.onclick = function(){
    localStorage.setItem('darkMode', "off");
    dark.style.display="flex";
    light.style.display="none";
    link.href="";
}