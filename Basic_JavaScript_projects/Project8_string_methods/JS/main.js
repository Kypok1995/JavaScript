function concatFunction(){
    var part_1 = "Here is"; // 4 parts of the whole sentense
    var part_2 = " some part of the text";
    var part_3 = " which should be all connected in "
    var part_4 = " whole sentense."
    var full_sentense = part_1.concat(part_2,part_3,part_4); // variable to hold a whle sentese. Used a concat method to connect different parts
    document.getElementById("concat").innerHTML=full_sentense;
}

function sliceFunction(){
    var sentense = " BMW M3 is a car I am planning to buy"; // full sentense 
    var extract = sentense.slice(0,7); // slice method to cut strings between 32nd and 38th letters
    document.getElementById("slice").innerHTML=extract;
}

function upperFunction(){
    var sentence = "click here to make letters bigger";
    var uppSentense = sentence.toUpperCase();// to make all letters capital
    document.getElementById("uppercase").innerHTML=uppSentense;
}

function searchFunction(){
    var sentence = "search() searches a string for a value and returns the position of the first match:";
    var position = sentence.search("value"); // should return position of word value in the whole string
    document.getElementById("search").innerHTML=position;
}

function NumberToStringFunction(){
    var num = 228;
    var str = num.toString();
    console.log(typeof str);
    document.getElementById("num_to_str").innerHTML=str;
}

function PrecisionFunc(){
    var X = 228.148865765743; //some long number
    document.getElementById("prec").innerHTML=X.toPrecision(5); //to cut number by defined amount of symbols
}

function fixFunction(){
    var num = 414.525252;
    document.getElementById("fix").innerHTML=num.toFixed(2)//to leave fixed ampount of decimals and round it as well
}

function valueFunction(){
    var X = 228.775;
    document.getElementById("value").innerHTML=X.valueOf();
}

