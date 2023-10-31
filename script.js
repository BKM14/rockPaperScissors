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
            return "win";
        } else if (computerSelection == "paper") {
            return "lose"
        }

    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "win";
        } else if (computerSelection == "scissors") {
            return "lose";
        } else if (computerSelection == "paper") {
            return "draw";
        }

    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            return "lose";
        } else if (computerSelection == "scissors") {
            return "draw";
        } else if (computerSelection == "paper") {
            return "win";
        }
    }
}

function game() {
    let userWin = 0, computerWin = 0, draw = 0;
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Rock, Paper or Scissors?");
        computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        console.log("Player choice: " + playerSelection);
        console.log("Computer choice: " + computerSelection);
        console.log(result);
        if (result == "win") {
            userWin++;
        } else if (result == "lose") {
            computerWin++;
        } else {
            draw++;
        }
        console.log("Player score: " + userWin);
        console.log("Computer score: " + computerWin);
        console.log("Draws: " + draw);
    }
    
    console.log("Final Score")
    console.log("Player score: " + userWin);
    console.log("Computer score: " + computerWin);
    console.log("Draws: " + draw);
    if (userWin > computerWin) {
        console.log("Player beats Computer!");
    } else if (computerWin > userWin) {
        console.log("Computer beats Player!");
    } else {
        console.log("Draw");
    }
}

game();

