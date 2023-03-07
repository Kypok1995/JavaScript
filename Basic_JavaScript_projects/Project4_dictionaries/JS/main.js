function Dictionary(){
    var Dict = {
        name: "Andrei",
        age: 27,
        hometown: "Novosibirsk",
        occupation: "game-developer",
    };
    delete Dictionary.hometown;
    document.getElementById("dictionary").innerHTML=Dict.hometown;
}