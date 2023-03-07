function Ride_Function(){
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "you are too short":"you are tall enough";
    document.getElementById("Ride").innerHTML=Can_ride + " to ride";
}

unction Vote_Function(){
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "you are too young ":"you are old enough ";
    document.getElementById("Vote").innerHTML=Can_vote + " to vote";
}