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

function Vehicle(Make, Model, Year, Color){ // constructor for objects Vehicle
    this.Vehicle_Make=Make;
    this.Vehicle_Model=Model;
    this.Vehicle_Year=Year;
    this.Vehicle_Color=Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); // created an instance of Vehicle
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1978, "Blue");

function My_Function(){ // function to assign values of instance to some HTML paragraph
    document.getElementById("Keywords_and_Constructors").innerHTML= "Jack drives a " +Jack.Vehicle_Model + " colored in" + Jack.Vehicle_Color + " manufactured at " + Jack.Vehicle_Year;
}

function Book(Name, Author, Year, Genre){
    this.Book_Name=Name;
    this.Book_Author=Author;
    this.Book_Year=Year;
    this.Book_Genre=Genre;
}

var MyBook = new Book("Hyperion", "Dan Simmons", 1995, "Science fiction");

function New_Function(){
    document.getElementById("new_and_this").innerHTML="I am currently reading a book names: " + MyBook.Book_Name +" written by author " + MyBook.Book_Author + " at the year: " + MyBook.Book_Year + "it's genre is: " + MyBook.Book_Genre;
}

function Count_function(){ // main function to execute at HTML
    document.getElementById("nested_function").innerHTML=Count(); // pass the HTML element with value of Count function
    function Count(){ // a function which pass its value to HTML element
        var start_point=9; // variable to handle starting point value 
        function Plus_one(){start_point+=1;} // small function to add 1 to start_point once it is exectuted 
        Plus_one(); // calling a plus_one function to add 1 to start_point
        return start_point; // returns start_point with increased value
    }
}
