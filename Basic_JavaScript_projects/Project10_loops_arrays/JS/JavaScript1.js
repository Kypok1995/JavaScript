function classFunc(){
    var A = document.getElementsByClassName("Click");
    console.log(A.length);
    A[0].innerHTML = "Here is a new text";
}

var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI); // to create circle
ctx.stroke(); //draw a path i defined

var grd = ctx.createLinearGradient(0, 0, 200, 0); //to create gradient
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");
ctx.fillStyle = grd;
ctx.fillRect(10, 10, 1000, 80);

