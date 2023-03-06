

function Addition(){ //simple function with + operator
    var math = 2+2;
    document.getElementById("math").innerHTML="2+2=" + math;
}

function Substraction(){ // simple function with - operator
    var subst = 5-2
    document.getElementById("substract").innerHTML="5-2=" +subst;
}

function Division(){ // simple function with / operator
    var div = 100 / 3;
    document.getElementById("division").innerHTML="100/3 = " + div;
}

function Multiply(){ // simple function with * operator
    var mult = 145*8;
    document.getElementById("multiply").innerHTML="145*8= " +mult;
}

function MultipleMath(){ // function with multiple ,ath operators
    var result = 100 * 5 - (99-44) / 5 +16
    document.getElementById("multipleMath").innerHTML="100 * 5 - (99-44) // 5 +16 = " +result;
}

function Remainder(){ // function with remainder operator %
    var remind = 25% 6;
    document.getElementById("remind").innerHTML="Than you devide 25 by the 6, your current reminder is: " + remind;
}

function Negative(){ // function with unary operator -
    var x = 228;
    document.getElementById("negative").innerHTML="Opposite of 228 is: " + -x;
}

function Increment(){ // function with increment operator ++
    var inc = 5;
    inc++;
    document.getElementById("increment").innerHTML=inc;
}

function Decrement(){ // function with decrement operator --
    var dec = 5.41;
    dec--;
    document.getElementById("decrement").innerHTML=dec;
}

function MathFunc(){ //function with math method trunc
var a = 4.6436;
document.getElementById("mathFunc").innerHTML=Math.trunc(a);
}

function Random(){ // function with math method random
    document.getElementById("random").innerHTML=Math.random()*100;
}
