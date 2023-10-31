function getComputerChoice() {
    let randNum = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

    switch (randNum) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }

}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            return "draw";
        } else if (computerSelection == "scissors") {
            return "You win! Rock beats Scissors";
        } else if (computerSelection == "paper") {
            return "You lose! Paper beats Rock"
        }

    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "You win! Rock beats Scissors";
        } else if (computerSelection == "scissors") {
            return "You lose! Scissor beats Paper";
        } else if (computerSelection == "paper") {
            return "draw";
        }

    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            return "You lose! Rock beats Scissors";
        } else if (computerSelection == "scissors") {
            return "draw";
        } else if (computerSelection == "paper") {
            return "You win! Scissor beats Paper";
        }
    }
}

const playerSelection = "rOck";
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));

