
// Variable to keep track whose turn now
let activePlayer = 'X';
// array to store move history
let selectedSquares = [];

// function to place X or O
function placeXorO(squareNumber){
    // this condition checks if square is already selected
    if (!selectedSquares.some(element => element.includes(squareNumber))){
        let select = document.getElementById(squareNumber);// to retrieve HTML element which was clicked 
        
        if (activePlayer ==='X'){// to place X if player is X
            select.style.backgroundImage = 'url("Image/x.png")';
        }
        else{
            select.style.backgroundImage = 'url("Image/o.png")';
        }

        selectedSquares.push(squareNumber + activePlayer); // to concatenade them together
        checkWinConditions(); // to check if there is a winner already
        if (activePlayer === 'X'){ // for changing an active player
            activePlayer = 'O';
        }

        else{
            activePlayer = 'X';
        }

        audio('./Media/place.mp3');

        if(activePlayer ==='O'){
            disableClick();
            setTimeout(function () {computersTurn();}, 1000 );
        }

        return true; // this is needed for computersTurn function

    }
    function computersTurn(){
        let success = false; // for while loop
        let pickASquare; // to store a random number
        while (!success){
            pickASquare = String(Math.floor(Math.random()*9)) // to choose random square 

            if(placeXorO(pickASquare)){//if random number returns true - square is not choosen yet
                placeXorO(pickASquare);
                success=true; // change a bool and end a loop
            }
        }
    }
}