

let playAgain = confirm(`Do you want to play again?`);



while(playAgain) {
    startGame();
    let playAgain = confirm(`Do you want to play again?`);
}


function getRandomMove() {
    let moves = ["rock", "scissors", "paper"];
    let randomNumber = Math.floor(Math.random() * (2 - 0 + 1) + 0);
    let randomMove = moves[randomNumber];
    return randomMove
}

function getWinner(playerMove, computerMove) {
if (playerMove === "rock") { 
    if (computerMove === "rock") {
    return 0;
} else if (computerMove === "paper") {
    return -1;
} else if (computerMove === "scissors") {
    return 1;
}
};
if (playerMove === "scissors") { 
    if (computerMove === "scissors") {
        return 0;
} else if (computerMove === "rock") {
    return -1;
} else if (computerMove === "paper") {
    return 1;
}
};
if (playerMove === "paper") { 
    if (computerMove === "paper") {
        return 0;
} else if (computerMove === "scissors") {
    return -1;
} else if (computerMove === "rock") {
    return 1;
}
};
}
function startGame() {
    let playerMove = prompt("What's your move?");
    let computerMove = getRandomMove(); 
    let result = getWinner(playerMove, computerMove);
    alert(`Your ${result} is`);

};

