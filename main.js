let gameNumber = 0;
let wins = 0;
let losses = 0;
let draws = 0;

let playerName = prompt(`Hi, please enter your name`);
let playerNameregex = /[A-Z]/;

while (playerName.length > 10  || !playerNameregex.test(playerName[0])) {
    playerName = prompt("Please make sure your name starts with a capital letter and is less than 10 characters.");
}

startGame();

let playAgain = confirm(`Do you want to play again?`);



while(playAgain) {
    startGame();
    playAgain = confirm(`Do you want to play again?`);
};


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
    gameNumber++
    let playerMove = prompt(`Would you like to play rock, paper or scissors, ${playerName}?`);
    let computerMove = getRandomMove(); 
    let result;
    let playerMoveRegex = /^rock$|^paper$|^scissors$/;
    while (!playerMoveRegex.test(playerMove)) {
        playerMove = prompt(`${playerName}, the name of the game is rock, paper, scissors - choose one of those!`);
    }
    if (getWinner(playerMove, computerMove) === 1) {
    result = `${playerName}, you win!`
    wins ++;
} else if (getWinner(playerMove, computerMove) === -1) {
    result = `Sorry, ${playerName}, you lose!`
    losses ++;
 } else if (getWinner(playerMove, computerMove) === 0) {
     result = `Sorry, ${playerName}, you drew!`
     draws++;
 };

 alert(`${playerName}, you picked: ${playerMove} 
Computer picked: ${computerMove}. 
${result}!`);

 alert(`Games played: ${gameNumber}
 Number of wins: ${wins}
 Number of losses: ${losses}
 Number of draws: ${draws}`);

};

/* extension 2
To make the computer win all the time -

 function computerWinningMove(playerMove) {
    let winningMove; 
    if (playerMove === "rock") {
        winningMove = "scissors"; 
    } else if (playerMove === "paper") {
        winningMove = "scissors";
    } else (playerMove === "scissors") {
        winningMove = "rock";
    }
return winningMove;
};

Then replace all instances of getRandomMove with computerWinningMove.


*/