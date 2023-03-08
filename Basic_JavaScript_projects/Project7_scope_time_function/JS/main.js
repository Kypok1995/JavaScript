var X =100;

function Global_variable1(){ // would work, as variable is global
    document.write(X*5);
}

function Global_variable2(){ // work as well, variable is global
    document.write(X/3);
}

function Local_variable1(){ // would work, we use a local variable within a function
    var A = 228;
    document.write(A-1488);
}

function Local_variable2(){ // would not work, local variable is not accessiable by this function
    document.write(A+555);
    console.log(A);// to debug function, A is not existing in this scope
}

Global_variable1();
Global_variable2();
Local_variable1();
Local_variable2();

function DateFunction(){
    if (new Date().getHours()> 12){ // Date().getHours() function return current hour as a integer (0-23)
        document.getElementById("hours").innerHTML="It is noon already, time to have lunch?"
    }

    else{
        document.getElementById("hours").innerHTML="Good morning, it is not a noon yet!"
    }
}

function Alko_function(){
    var Age; // declare a variable for conditional statement
    Age=document.getElementById("Age").value; // assign a variable value of user's input
    if (Age >=18){ //check condition 
        document.getElementById("Alko").innerHTML="You can buy some vodka here!"
    }

    else{
        document.getElementById("Alko").innerHTML="You are too small for vodka, call your dad"
    }
}

function TimeFunction(){
    var Time = new Date().getHours();//assign current hour to variable
    var Reply; // variable to hold a reply 
    if(Time<12 == Time>0){
        Reply="It is morning time!"
    }

    else if(Time >=12 == Time<18){
        Reply="It is afternoon!"
    }

    else{
        Reply="It is evening time!"
    }
    document.getElementById("timeofDay").innerHTML=Reply;
}