// Get the element
let rockBtn = document.querySelector("#rock");
let paperBtn = document.querySelector("#paper");
let scissorsBtn = document.querySelector("#scissors");
let playerScore = document.querySelector("#player-score");
let computerScore = document.querySelector("#computer-score");
let resultTie = document.querySelector("#result-tie");
let playerChoice = document.querySelector("#player-choice");
let computerChoice = document.querySelector("#computer-choice");

// Global variables to keep track of the round results
let computerWinAmount = 0;
let playerWinAmount = 0;
let tieAmount = 0;

// function of event

function playGame(e) {
  let playerSelection = e.target.id;
  let computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
}

rockBtn.addEventListener("click", playGame);
paperBtn.addEventListener("click", playGame);
scissorsBtn.addEventListener("click", playGame);

// computer choose random rock,paper,scissors

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return (randomChoice = choices[Math.floor(Math.random() * choices.length)]);
}

// Group of functions to change text labels after rounds
function playerWin() {
  ++playerWinAmount;
  playerScore.textContent = "Your score is: " + playerWinAmount;
}

function computerWin() {
  ++computerWinAmount;
  computerScore.textContent = "The computer score is: " + computerWinAmount;
}

function tieWin() {
  ++tieAmount;
  resultTie.textContent = "Tie rounds: " + tieAmount;
}

// game function

// Function that checks winning very inelegantly
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    tieWin();
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerWin();
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerWin();
  }

  if (playerSelection === "paper" && computerSelection === "rock") {
    playerWin();
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerWin();
  }

  if (playerSelection === "scissors" && computerSelection === "rock") {
    computerWin();
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerWin();
  }

  if (computerWinAmount === 5) {
    alert("You lost! Better luck next time :(");
    reset();
  } else if (playerWinAmount === 5) {
    alert("You won! Congratulations! :)");
    reset();
  }
}

// to reset the game after 5 wins

function reset() {
  computerWinAmount = 0;
  playerWinAmount = 0;
  tieAmount = 0;

  playerScore.textContent = "Your score is: 0";
  computerScore.textContent = "The computer score is: 0";
  resultTie.textContent = "Tie rounds: 0";
}
