function Ride_Function(){
    var Height, Can_ride; // declare a value
    Height = document.getElementById("Height").value; // assign a variable height a value of user's input
    Can_ride = (Height < 52) ? "you are too short":"you are tall enough"; // assign Can_ride variable one of two possible values, based on ternary operator ?
    document.getElementById("Ride").innerHTML=Can_ride + " to ride"; // print out result into blank paragraph in HTML
}


function Vote_Function(){ // analog of ride_function, checks if user is older than 18 or not, using ternary operator ?
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "you are too young ":"you are old enough ";
    document.getElementById("Vote").innerHTML=Can_vote + " to vote";
}