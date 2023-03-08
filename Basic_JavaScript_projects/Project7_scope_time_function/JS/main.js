var X =100;

function Global_variable1(){ // would work, as variable is global
    document.write(X*5);
}

function Global_variable2(){ // work as well, variable is global
    document.write(X/3);
}

function Local_variable1(){
    var A = 228;
    document.write(A-1488);
}

function Local_variable2(){
    document.write(A+555);
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