function Addition(){
    var math = 2+2;
    document.getElementById("math").innerHTML="2+2=" + math;
}

function Substraction(){
    var subst = 5-2
    document.getElementById("substract").innerHTML="5-2=" +subst;
}

function Division(){
    var div = 100 / 3;
    document.getElementById("division").innerHTML="100/3 = " + div;
}

function Multiply(){
    var mult = 145*8;
    document.getElementById("multiply").innerHTML="145*8= " +mult;
}

function MultipleMath(){
    var result = 100 * 5 - (99-44) / 5 +16
    document.getElementById("multipleMath").innerHTML="100 * 5 - (99-44) // 5 +16 = " +result;
}

function Remainder(){
    var remind = 25% 6;
    document.getElementById("remind").innerHTML="Than you devide 25 by the 6, your current reminder is: " + remind;
}

function Negative(){
    var x = 228;
    document.getElementById("negative").innerHTML="Opposite of 228 is: " + -x;
}

function Increment(){
    var inc = 5;
    inc++;
    document.getElementById("increment").innerHTML=inc;
}

function Decrement(){
    var dec = 5.41;
    dec--;
    document.getElementById("decrement").innerHTML=dec;
}

window.alert(Math.random()*100);

document.write(Math.PI);

var a = 4.6436;

document.write(Math.round(a));