var a= Math.floor(Math.random() * 6)+1;
var b=  "dice"+ a + ".png";
var c= "./images/"+ b;
var d= document.querySelectorAll("img")[0];
d.setAttribute("src" , c);

var e= Math.floor(Math.random() * 6)+1;
var f=  "./images/dice"+ e + ".png";
document.querySelectorAll("img")[1].setAttribute("src" , f);
