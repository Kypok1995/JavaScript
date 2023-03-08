function concatFunction(){
    var part_1 = "Here is"; // 4 parts of the whole sentense
    var part_2 = " some part of the text";
    var part_3 = " which should be all connected in "
    var part_4 = " whole sentense."
    var full_sentense = part_1.concat(part_2,part_3,part_4); // variable to hold a whle sentese. Used a concat method to connect different parts
    document.getElementById("concat").innerHTML=full_sentense;
}

function sliceFunction(){
    var sentense = "I am planning to purchase a new BMW X3"; // full sentense 
    var extract = sentense.slice(32.38); // slice method to cut strings between 32nd and 38th letters
    document.getElementById("slice").innerHTML=extract 
}