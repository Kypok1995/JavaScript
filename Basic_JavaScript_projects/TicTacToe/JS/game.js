
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

function checkWinConditions(){ // function to check if somebody won already
    //X 0,1,2 condition
    if (arrayIncludes('0X', '1X', '2X')) {drawWinLine(50, 100, 558, 100)}
    else if (arrayIncludes('3X', '4X', '5X')) {drawWinLine(50, 304, 558, 304)}
    else if (arrayIncludes('6X', '7X', '8X')) {drawWinLine(50, 508, 558, 508)}
    else if (arrayIncludes('0X', '3X', '6X')) {drawWinLine(100, 50, 100, 558)}
    else if (arrayIncludes('1X', '4X', '7X')) {drawWinLine(304, 50, 304, 558)}
    else if (arrayIncludes('2X', '5X', '8X')) {drawWinLine(508, 50, 508, 558)}
    else if (arrayIncludes('6X', '4X', '2X')) {drawWinLine(100, 508, 510, 90)}
    else if (arrayIncludes('0X', '4X', '8X')) {drawWinLine(100, 100, 520, 520)}
    else if (arrayIncludes('0O', '1O', '2O')) {drawWinLine(50, 100, 558, 100)}
    else if (arrayIncludes('3O', '4O', '5O')) {drawWinLine(50, 304, 558, 304)}
    else if (arrayIncludes('6O', '7O', '8O')) {drawWinLine(50, 508, 558, 508)}
    else if (arrayIncludes('0O', '3O', '6O')) {drawWinLine(100, 50, 100, 558)}
    else if (arrayIncludes('1O', '4O', '7O')) {drawWinLine(304, 50, 304, 558)}
    else if (arrayIncludes('2O', '5O', '8O')) {drawWinLine(508, 50, 508, 558)}
    else if (arrayIncludes('6O', '4O', '2O')) {drawWinLine(100, 508, 510, 90)}
    else if (arrayIncludes('0O', '4O', '8O')) {drawWinLine(100, 100, 520, 520)}

    else if(selectedSquares.length >= 9) { // this func will work if there a 9 selected squares, but nobody won
        audio('./Media/tie.mp3')
        setTimeout(function () {resetGame(); }, 500);
    }

    function arrayIncludes(squareA, squareB, squareC){
        const a = selectedSquares.includes(squareA); // to check if there are 3 in a row
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);

        if (a === true && b === true && c === true){return true;}
    }
}

function disableClick(){
    body.style.pointerEvents = 'none'; // make body unclickable
    setTimeout(function () {body.style.pointerEvents = 'auto';}, 1000 );
}

function audio (audioURL){// takes a string parameter for music file path
    let audio = new Audio(audioURL);
    audio.play();
}

function drawWinLine(coordX1, coordY1, coordX2, coordY2){
    const canvas = document.getElementById("win-lines");// to access HTML canvas element
    const c = canvas.getContext('2d'); // access to 2d methods of canvas
    let x1 = coordX1 //to identify start of line from axis X
    y1 = coordY1;
    x2 = coordX2;
    y2 = coordY2;
    x = x1; // temporary store x axis
    y = y1; // temporary store y asix


    function animateLineDrawning(){
        const animationloop = requestAnimationFrame(animateLineDrawning);// to crate a loop
        c.clearRect(0, 0, 608, 608);
        c.beginPath(); //to start drawning a line
        c.moveTo(x1,y1);
        c.lineTo(x,y);
        c.lineWidth = 10;
        c.strokeStyle = 'rgba(70,255,33,0.8)'; // to set a color of line
        c.stroke();

        if(x1 <= x2 && y1 <= y2){ // to check if we reach endpoint of line
            if(x < x2){x +=10;}
            if(y < y2){y +=10;}

            if (x >= x2 && y >=y2){cancelAnimationFrame(animationloop);}
        }

        if (x1 <= x2 && y1 >= y2){
            if (x <x2){x +=10;}
            if (y > y2){y -= 10;}
            if(x >= x2 && y <= y2){cancelAnimationFrame(animationloop);}
        }
    }

    function clear(){
        const animationloop = requestAnimationFrame(clear);//to start animation loop
        c.clearRect(0, 0, 608, 608); // to clear a canvas
        cancelAnimationFrame(animationloop); // to cancel animation
    }

    disableClick();// to disable clicking while win sound playing
    audio('./Media/winGame.mp3');
    animateLineDrawning();
    setTimeout(function () {clear(); resetGame();}, 1000);// to set timeout for clearing a canvas

}

function resetGame(){
    for(let i = 0; i<9; i++){
        let square = document.getElementById(String (i))//variable to get HTML elemet i
        square.style.backgroundImage = ''; //actualy clean a canvas
    
    }
    selectedSquares=[]//to reset an array of squares
}

