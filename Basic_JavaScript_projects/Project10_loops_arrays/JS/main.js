function CountToTen(){
    var digit = "";
    var X =0;
    while(X<11){
        digit+= "<br>" + X;
        X++
    }
    document.getElementById("loop").innerHTML=digit;
}

var inst = ["Guitar", "Trombon", "Drums", "Arfa", "Violonchel"];
var content="";
var Y=0;

function InstrFunction(){
    for(Y=0; Y<inst.length; Y++){
        content +=inst[Y] + "<br>"
    }
    document.getElementById("instrument").innerHTML=content;
}

function Catfunc(){
    var CatPics = [];
    CatPics[0]="cat sleeping";
    CatPics[1]= "cat pooping";
    CatPics[2]="cat eating";
    CatPics[3]= "cat playing";
    var X=0;
    while(X<CatPics.length){
        var content;
        content += "<br>" + "At the following time "+ CatPics[X];
        X++;
    }
    document.getElementById("cat").innerHTML=content;
}

function constFunc(){
    const My_instrument = {type:"guitar", brand:"Yamaha", color:"blue"};
    My_instrument.color="red";
    My_instrument.price = "900$";
    document.getElementById("const").innerHTML= "My favourite instrument is " +My_instrument.type + " with the " +My_instrument.color +" color and the price is: " + My_instrument.price;
}

var X = 10;
document.write(X);
{
    let X = 22; // to have a variable with block scope
    document.write(X);
}

document.write(X);



let car = {
    color: "blue",
    MPG: '22',
    mark: "dodge",
    description: function(){
        return "The car mark is" + this.mark + "MPG is: " + this.MPG;
    }
};

document.getElementById("carObj").innerHTML=car.description();

let text='';
for (let i = 0; i < 10; i++) {
    if(i==3){continue;} //break one iteration
    if (i === 8) { break; } // brake whole loop
    text += "The number is " + i + "<br>";
  }
  document.getElementById("demo").innerHTML=text;

  function food_func(){
    var output;
    var foodchoice=document.getElementById("food_input").value;
    var reg = "  is a really tasty food";
    switch(foodchoice){
        case "Pizza":
        output="pizza" + reg;
        break;
        
        case "Burger":
        output="Burger" + reg;
        break;

        case "Borsch":
        output="Borsch" + reg;
        break;

        case "Sausage":
        output="Sausage" + reg;
        break;
    }
    document.getElementById("output").innerHTML=output;

  }



