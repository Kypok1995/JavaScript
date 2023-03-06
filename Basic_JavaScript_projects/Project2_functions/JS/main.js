function displayDate(){
    document.getElementById("demo").innerHTML=Date();
}

function MyFunction(){
    var sentense = "I am learning";
    sentense +="JavaScript right now";
    document.getElementById("concatenate").innerHTML=sentense; // find a p element of HTML and give it a value of string sentense.
}

function Addition(){
    var math = 2+2;
    document.getElementById("math").innerHTML="2+2=" + math;
}