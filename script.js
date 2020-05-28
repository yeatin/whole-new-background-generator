var css = document.querySelector("h3");
var c1 = document.querySelector(".color1");
var c2 = document.querySelector(".color2");
var body = document.querySelector("body");
var getRandom = document.querySelector(".random");

function change(){
    body.style.background = "linear-gradient(to right, " + c1.value + ", " + c2.value + ")";
    css.textContent = body.style.background;
}

function random() {
    var x1 = Math.floor(Math.random() * 255);
    var y1 = Math.floor(Math.random() * 255);
    var z1 = Math.floor(Math.random() * 255);
    var x2 = Math.floor(Math.random() * 255);
    var y2 = Math.floor(Math.random() * 255);
    var z2 = Math.floor(Math.random() * 255);
    text="linear-gradient(to right," + "rgb(" + x1+"," +y1+","+z1+"),"+"rgb("+x2+","+y2+","+z2+"))";
    //body.style.background = printf("linear-gradient(to right,rgb(%d,%d,%d),rgb(%d,%d,%d))", x1, y1, z1, x2, y2, z2);
    body.style.background = "linear-gradient(to right," + "rgb(" + x1+"," +y1+","+z1+"),"+"rgb("+x2+","+y2+","+z2+"))";
    css.textContent = body.style.background;
}

body.style.background = "linear-gradient(to right, rgb(3, 252, 252), rgb(170, 34, 221))";
css.textContent = body.style.background;
c1.addEventListener("input", change);
c2.addEventListener("input", change);
getRandom.addEventListener("click", random);
