var X =100;

function Global_variable1(){
    document.write(X*5);
}

function Global_variable2(){
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