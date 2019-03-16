var _ = require('lodash');

var arr=[1,2,3,6,5,8,30,43];
console.log("Answer :",_.without(arr,8));

var color1= document.getElementById("color1");
var color2= document.getElementById("color2");
var css= document.querySelector("h3");
var body= document.querySelector("body");



function setGradient(){
	body.style.background= "linear-gradient(to right," + color1.value + ", "+ color2.value + ")";
	css.textContent= body.style.background;
}

color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)

/* ---------------Background Generator ------------------ */

