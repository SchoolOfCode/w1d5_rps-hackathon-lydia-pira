let playerMove;
let computerMove;

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

let result = getWinner("rock", "scissors")