const player1 = (name, character) => {
    const getName = () => window.prompt('What is Player One\'s name?');
    const getCharacter = () => window.prompt('What will you play as?')
    return {name, getName, getCharacter};
}

const player2 = (name, character) => {
    const getName = () => name = window.prompt('What is Player Two\'s name?');        
    const getCharacter = () => window.prompt('What will you play as?')
    return{name, getName, getCharacter};
}

const gameBoard =(player1, player2) => {
    let x1y3 = '';
    let x2y3 = '';
    let x3y3 = '';

    let x1y2 ='';
    let x2y2 = '';
    let x3y2 = '';

    let x1y1 = '';
    let x2y1 = '';
    let x3y1 = '';
}

