//Make gameBoardMaker
//attach board elements to variables
//render current state
//check current state

//Make playerMaker
//store name and character
//make move
//store move

//Make gameMaker
//make new player1, player2, and gameboard
//start game loop {
    //start player1's turn
    //check the turn for win state
    //if no win state start player2's turn
    //check win state
    //repeat
//}end game loop
//Display who won and offer to restart game

const gameBoardMaker = (player1, player2) => {
    
    const _player1 = player1;
    const _player2 = player2;
    
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const button3 = document.getElementById('button3');
    const button4 = document.getElementById('button4');
    const button5 = document.getElementById('button5');
    const button6 = document.getElementById('button6');
    const button7 = document.getElementById('button7');
    const button8 = document.getElementById('button8');
    const button9 = document.getElementById('button9');
    const message = document.getElementById('title');
    
    const buttonArray = [button1, button2, button3, button4, button5, button6, button7, button8, button9];
    let currentState = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let turnMade = false;
    let currentTurn = _player1;

    
    const render = (player) => {
        for(i=0; i < currentState.length; i++) {
            buttonArray[i].innerHTML = currentState[i];
        }
        checkForWinner(player);
        currentTurn == _player1 ?
            currentTurn = _player2 
            : 
            currentTurn = _player1;
    } 
    
    function winState(player) {
        message.innerHTML = player + ' won';
        currentState = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
        render();
        currentTurn = _player1;
    }
    
    const checkForWinner = (player) => {
        if (currentState[0] == currentState[1] && currentState[1] == currentState[2]) {
            winState(player)
        }

        else if (currentState[3] == currentState[4] && currentState[4] == currentState[5]) {
            winState(player)
        }

        else if (currentState[6] == currentState[7] && currentState[7] == currentState[8]) {
            winState(player)
        }



        else if (currentState[0] == currentState[3] && currentState[3] == currentState[6]) {
            winState(player)
        }

        else if (currentState[1] == currentState[4] && currentState[4] == currentState[7]) {
            winState(player)
        }

        else if (currentState[2] == currentState[5] && currentState[5] == currentState[8]) {
            winState(player)
        }



        else if (currentState[0] == currentState[4] && currentState[4] == currentState[8]) {
            winState(player)
        }

        else if (currentState[2] == currentState[4] && currentState[4] == currentState[6]) {
            winState(player)
        }
    } 
    
    const getMove = (player) => {
        let moveMade = false;
        document.addEventListener('keydown', e => {
            console.log(e.key);
            e.stopPropagation;
            switch(e.key) {
                case '1':
                    if (currentState[0] != '1'){
                        message.innerHTML = "Not Valid";
                        break;
                    }
                    else {
                        currentState[0] = player.character;
                        render(player.name);
                        getMove(currentTurn);
                        break;                    
                    }
                case '2':
                    if (currentState[0] != '1'){
                        message.innerHTML = "Not Valid";
                        break;
                    }
                    else {
                        currentState[0] = player.character;
                        render(player.name);
                        getMove(currentTurn);
                        break;                    
                    }
                case '3':
                    if (currentState[0] != '1'){
                        message.innerHTML = "Not Valid";
                        break;
                    }
                    else {
                        currentState[0] = player.character;
                        render(player.name);
                        getMove(currentTurn);
                        break;                    
                    }
                case '4':
                    if (currentState[0] != '1'){
                        message.innerHTML = "Not Valid";
                        break;
                    }
                    else {
                        currentState[0] = player.character;
                        render(player.name);
                        getMove(currentTurn);
                        break;                    
                    }
                case '5':
                    if (currentState[0] != '1'){
                        message.innerHTML = "Not Valid";
                        break;
                    }
                    else {
                        currentState[0] = player.character;
                        render(player.name);
                        getMove(currentTurn);
                        break;                    
                    }
                case '6':
                    if (currentState[0] != '1'){
                        message.innerHTML = "Not Valid";
                        break;
                    }
                    else {
                        currentState[0] = player.character;
                        render(player.name);
                        getMove(currentTurn);
                        break;                    
                    }
                case '7':
                    if (currentState[0] != '1'){
                        message.innerHTML = "Not Valid";
                        break;
                    }
                    else {
                        currentState[0] = player.character;
                        render(player.name);
                        getMove(currentTurn);
                        break;                    
                    }
                case '8':
                    if (currentState[0] != '1'){
                        message.innerHTML = "Not Valid";
                        break;
                    }
                    else {
                        currentState[0] = player.character;
                        render(player.name);
                        getMove(currentTurn);
                        break;                    
                    }
                case '9':
                    if (currentState[0] != '1'){
                        message.innerHTML = "Not Valid";
                        break;
                    }
                    else {
                        currentState[0] = player.character;
                        render(player.name);
                        getMove(currentTurn);
                        break;                    
                    }
            }
        })      
    }
    const gameLoop = () => {
        getMove(currentTurn);
    }
    return {checkForWinner, render, getMove, gameLoop};
}

const playerMaker = (name, character) => {
    return{name, character}
}



let testPlayer1 = playerMaker('Test', 'T');
let testPlayer2 = playerMaker('Test 2', 'W');
let testGameBoard = gameBoardMaker(testPlayer1, testPlayer2);

for(i=0; i < 9; i++) {
    testGameBoard.gameLoop();
}
