document.write("Fifteen" + 20);

document.write(typeof"Andrei");

function NotANumber(){
    document.getElementById("test").innerHTML=(0/0);
    document.getElementById("test1").innerHTML=isNaN("Fifteen");
    document.getElementById("test2").innerHTML=isNaN("106");
}

document.write(2e310) //to display infinity

document.write(-2e310) //to display negative infinity