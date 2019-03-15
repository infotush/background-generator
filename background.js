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

