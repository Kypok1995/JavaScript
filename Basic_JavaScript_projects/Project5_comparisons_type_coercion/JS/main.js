document.write("Fifteen" + 20);

document.write(typeof"Andrei");

function NotANumber(){
    document.getElementById("test").innerHTML=(0/0);
    document.getElementById("test1").innerHTML=isNaN("Fifteen");
    document.getElementById("test2").innerHTML=isNaN("106");
}

document.write(2e310) //to display infinity

document.write(-2e310) //to display negative infinity

document.write(10>5); //to display true
document.write(5<=4)

console.log(5+13); // to type smth in the console

console.log(10<5);

document.write((10+2)==13); // equality operator, return true if operands are equal

var A = 10;
var B = 10;
var C = "15";
var D = "10";
var E = 12;
document.write(A===B); // display true, as they have same values and types
document.write(A===C); //display false as they have different values and types
document.write(A===D); //display false as it is different types
document.write(A===E); // display false, as values are different

document.write(10>5 && 5<7); // AND operator, returns true
document.write(5<=5 && 10<7); // AND operator, returns false
document.write(5==5 || 10<7)// OR operator, returns true 
document.write(5<4 || 10>12);// OR operator, returns false