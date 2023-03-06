window.alert("Hello world!");
document.write("Here is document write method");

var Text = "This is a beginning of the string";
var Text2 = " Here is end of the string";

document.write(Text + Text2); // Concatenate strings variables together

document.write(568*226); //expression


function OnCLick(){ //define a finction
    var str = "Here is my buttom text"; //create a variable 
    document.getElementById("Buttom_text").innerHTML=str; //put string value into element with ID "Buttom text"
}

function displayDate(){
    document.getElementById("demo").innerHTML=Date();
}