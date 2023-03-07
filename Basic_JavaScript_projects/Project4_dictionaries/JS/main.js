function Dictionary(){
    var Dict = {
        name: "Andrei",
        age: 27,
        hometown: "Novosibirsk",
        occupation: "game-developer",
    };
    delete Dict.hometown; //tried delete keyword to delete KVP for hometown
    document.getElementById("dictionary").innerHTML=Dict.hometown; //to searchmy dictionary for hometown
}