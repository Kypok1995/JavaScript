function Dictionary(){
    var Dict = {
        name: "Andrei",
        age: 27,
        hometown: "Novosibirsk",
        occupation: "game-developer"
    }
    document.getElementById("dictionary").innerHTML=Dict.occupation;
}