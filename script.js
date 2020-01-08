// Variable declaration
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("rdm-button");

// Function executed to display color values in h3
changeColor();

// Function to change background color
function changeColor(){
    body.style.background = 
    "linear-gradient(to right, " + color1.value + "," + color2.value +")";
    css.textContent = body.style.background + ";";
}

// Random Color generator
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Sets random color values for color1 and color2
function setRandomColor(){
    var randomColor1 = getRandomColor();
    var randomColor2 = getRandomColor();
    color1.value = randomColor1;
    color2.value = randomColor2;
    changeColor();
}
// Event listeners
// Random color button
button.addEventListener('click',setRandomColor);
// Color picker 1
color1.addEventListener("input", changeColor);
// Color picker 2
color2.addEventListener("input", changeColor);