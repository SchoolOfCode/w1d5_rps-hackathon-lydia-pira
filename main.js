let playerMove = "rock";
let computerMove = "scissors";


if (playerMove === "rock") { 
    if (computerMove === "rock") {
    console.log("draw");
} else if (computerMove === "paper") {
    console.log("loss");
} else if (computerMove === "scissors") {
    console.log("win");
}
};

if (playerMove === "scissors") { 
    if (computerMove === "scissors") {
    console.log("draw");
} else if (computerMove === "rock") {
    console.log("loss");
} else if (computerMove === "paper") {
    console.log("win");
}
};

if (playerMove === "paper") { 
    if (computerMove === "paper") {
    console.log("draw");
} else if (computerMove === "scissors") {
    console.log("loss");
} else if (computerMove === "rock") {
    console.log("win");
}
};