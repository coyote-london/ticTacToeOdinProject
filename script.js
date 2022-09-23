const playerMaker = (name, character) => {    
    let movesMade = [];
    let turnOver = false;
    let getMove = () => {
        let moveChoosen = false
        while (moveChoosen == false) {
            console.log(name + '\'s move has begun')
            document.addEventListener('keydown', e => {
                console.log(e.key);
                switch(e.key) {
                    case '1':
                        if (movesMade.includes(e.key)) {
                            window.alert('Move Already Made')
                        }
                        else {
                            movesMade.push(e.key)
                            console.log(movesMade)
                            moveChoosen = true;
                            break;
                        }
                        
                    case '2':
                        if (movesMade.includes(e.key)) {
                            window.alert('Move Already Made')
                        }
                        else {                            movesMade.push(e.key)
                            movesMade.push(e.key)
                            console.log(movesMade)
                            moveChoosen = true;
                            break;
                        }
    
                    case '3':
                        if (movesMade.includes(e.key)) {
                            window.alert('Move Already Made')
                        }
                        else {
                            movesMade.push(e.key)
                            console.log(movesMade)
                            moveChoosen = true;
                            break;
                        }
                
                    case '4':
                        if (movesMade.includes(e.key)) {
                            window.alert('Move Already Made')
                        }
                        else {                            
                            movesMade.push(e.key)
                            console.log(movesMade)
                            moveChoosen = true;
                            break;
                        }
                
                    case '5':
                        if (movesMade.includes(e.key)) {
                            window.alert('Move Already Made')
                        }
                        else {
                        movesMade.push(e.key)
                        console.log(movesMade)
                        moveChoosen = true;
                        break;
                        }
        
                    case '6':
                        if (movesMade.includes(e.key)) {
                            window.alert('Move Already Made')
                        }
                        else {
                            movesMade.push(e.key)
                            console.log(movesMade)
                            moveChoosen = true;
                            break;    
                        }
            
                    case '7':
                        if (movesMade.includes(e.key)) {
                            window.alert('Move Already Made')
                        }
                        else {
                            movesMade.push(e.key)
                            console.log(movesMade)
                            moveChoosen = true;
                            break;
                        }
                        
                    case '8':
                        if (movesMade.includes(e.key)) {
                            window.alert('Move Already Made')
                        }
                        else {
                            movesMade.push(e.key)
                            console.log(movesMade)
                            moveChoosen = true;
                            break;
                        }
    
                    case '9':
                        if (movesMade.includes(e.key)) {
                            window.alert('Move Already Made')
                        }
                        else {
                            movesMade.push(e.key)
                            console.log(movesMade)
                            moveChoosen = true;
                            break;
                        }
                    }
            });
        }
    } 
    return {name, character, getMove, movesMade};
}


const gameBoardMaker = (playerOne, playerTwo) => {
    let message = document.getElementById('title');
    let gameStarted = false

    function resetBoard() {
        button1.innerHTML = 1;
        button2.innerHTML = 2;
        button3.innerHTML = 3;
        button4.innerHTML = 4;
        button5.innerHTML = 5;
        button6.innerHTML = 6;
        button7.innerHTML = 7;
        button8.innerHTML = 8;
        button9.innerHTML = 9;
    }
    
    function playerWins(player) {
        const startButton = document.getElementById('startButton');
        startButton.innerHTML = 'Restart?'
        message.innerHTML = player.name + ' wins!';
        resetBoard();
        gameStarted = false;
    }

    function draw() {
        startButton.innerHTML = 'Restart?';
        message.innerHTML = 'It\'s a draw!';
        resetBoard();
        gameStarted = false;
    }
    
    function checkForWinner(array, turnOver) {
        if(turnOver == false) {
            return;
        }
        else {
            if (array.includes(1) && array.includes(2) && array.includes(3)) playerWins(player);
            else if (array.includes(4) && array.includes(5) && array.includes(6)) playerWins(player);
            else if (array.includes(6) && array.includes(7) && array.includes(9)) playerWins(player);
    
            else if (array.includes(1) && array.includes(4) && array.includes(7)) playerWins(player);
            else if (array.includes(2) && array.includes(5) && array.includes(8)) playerWins(player);
            else if (array.includes(3) && array.includes(6) && array.includes(9)) playerWins(player);
    
            else if (array.includes(1) && array.includes(4) && array.includes(9)) playerWins(player);
            else if (array.includes(3) && array.includes(4) && array.includes(7)) playerWins(player);    
        }
    }
    
    return {draw, playerWins, checkForWinner, gameStarted}
}

let gameLoopMaker = (player1, player2, game) => {
    let turnState = 'Move: Player 1';
    if(turnState== 'Move: Player 1') {
        player1.getMove();

    }
    
    
    
//We need to get the loop to only access the next line when the player has made a move
    //Only then will we check the board for a win state
    //And then we will need to do the same for player2

}

let player1 = {};
let player2 = {};
let gameStarted = false;

const startButton = document.getElementById('startButton').addEventListener('click', e => {
    player1 = playerMaker(window.prompt('Who is Player One?'), window.prompt('What will you play as?'));
    player2 = playerMaker(window.prompt('Who is Player Two?'), window.prompt('What will you play as?'));
    game = gameBoardMaker(player1, player2);
    game.gameStarted = true;
    let turn = player1.name;
    while(game.gameStarted == true) {
        console.log('Game loop started')
        if (turn == player1.name) {
            player1.getMove();
            game.checkForWinner();
            turn = player2.name;
        }
        else if (turn == player2.name) {
            player2.getMove();
            game.checkForWinner();
            turn = player1.name;
        }
    }
});

//Currently have the moves stored in an array
//Next I need to get that array checked and then
//figure out how to get it to be player two's turn


//get player1 name and character
//get player 2 name and character
//decide who goes first

//get second move
//check for winner/draw
//get first move and repeat cycle until end state is reached
//display end state
//reset board and restart game state
