let playerScore = 0;
let computerScore = 0;
let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();

function getComputerChoice () {
    let choices = ["rock","paper", "scissors"];
    return randomChoice = choices[Math.floor(Math.random() * choices.length)]; 
}

function getPlayerChoice() {
    let playerChoices = prompt("Choose if 'rock' (1), 'paper' (2), 'scissors' (3)");
    
    if (playerChoices.toLowerCase() === "rock" || parseInt(playerChoices) === 1) {
         playerChoices === "rock";
    } else if (playerChoices.toLowerCase() === "paper" || parseInt(playerChoices) === 2) {
         playerChoices === "paper";
    } else if (playerChoices.toLowerCase() === "scissors" || parseInt(playerChoices) === 3 ) {
         playerChoices === "scissors";
    } else if (playerChoices.toLowerCase() !== "rock" || "paper" || "scissors" || parseInt(playerChoices) !== 1 || 2 || 3) {
        alert("You must choose! dumbass!");
        playerChoices;
    } else {
        console.log("can't decide?");
    }
     return playerChoices;
}

function playRound(playerSelection,computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie game!!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        return "You lose! Computer win! Paper beats rock";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        return "You lose! Computer win! Scissors beats paper";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        return "You lose! Computer win! Rock beats scissors";
    } else {
        playerScore++;
        return "Player win !!"
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        let currentRound = playRound(playerSelection,computerSelection);

        console.log(currentRound);
        console.log("Player Score: " + playerScore + " vs " + "Computer Score: " + computerScore);
    }
}

function winnerResults() {
    if (playerScore === computerScore) {
        console.log("We have a tie breaker");
    } else if (playerScore > computerScore) {
        console.log("Overall winner: Player!!");
    } else {
        console.log("Overall winner: Computer!!");
    }
}

game();
winnerResults();

