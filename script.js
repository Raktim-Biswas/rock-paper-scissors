// computer choice logic
function getComputerChoice() {
  let randomNumber = (Math.random() * 100 + 1);
  if (randomNumber <= 1/3 * 100) {
    return "rock"
  } else if (randomNumber >= 2/3 * 100) {
    return "paper"
  } else {
    return "scissors"
  }
}

function clickRock() {
  humanChoiceText.textContent = 'You picked Rock!';

  let computerChoice = getComputerChoice();
  computerChoiceText.textContent = `Computer picked ${computerChoice}!`;

  let humanChoice = "rock";
  playGame(humanChoice, computerChoice);
}

function clickPaper() {
  humanChoiceText.textContent = 'You picked Paper!';

  let computerChoice = getComputerChoice();
  computerChoiceText.textContent = `Computer picked ${computerChoice}!`;

  let humanChoice = "paper";
  playGame(humanChoice, computerChoice);
}

function clickScissors() {
  humanChoiceText.textContent = 'You picked Scissors!';

  let computerChoice = getComputerChoice();
  computerChoiceText.textContent = `Computer picked ${computerChoice}!`;

  let humanChoice = "scissors";
  playGame(humanChoice, computerChoice);
}

// player scores
let humanScore = 0;
let computerScore = 0;

// single round logic
function playGame(humanChoice, computerChoice) {
  if (humanChoice === "rock") {
    if (computerChoice === "rock") {
      gameOutcome.textContent = "It's a tie! You both picked Rock";
    } else if (computerChoice === "paper") {
      gameOutcome.textContent = "You lose! Paper beats Rock";
      computerScore++;
    } else if (computerChoice === "scissors") {
      gameOutcome.textContent = "You win! Rock beats Scissors!";
      humanScore++;
    }
  }

  if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      gameOutcome.textContent = "You win! Paper beats Rock!";
      humanScore++;
    } else if (computerChoice === "paper") {
      gameOutcome.textContent = "It's a tie! You both picked Paper";
    } else if (computerChoice === "scissors") {
      gameOutcome.textContent = "You lose! Scissors beats Paper";
      computerScore++;
    }
  }

  if (humanChoice === "scissors") {
    if (computerChoice === "rock") {
      gameOutcome.textContent = "You lose! Rock beats Scissors";
      computerScore++;
    } else if (computerChoice === "paper") {
      gameOutcome.textContent = "You win! Scissors beats Paper!";
      humanScore++;
    } else if (computerChoice === "scissors") {
      gameOutcome.textContent = "It's a tie! You both picked Scissors";
    }
  }
  updateScore();
  setTimeout(endingGame, 0);
}

function endingGame() {
  if (humanScore === 5) {
    alert("Game over! You win!");
    resetScore();
  } else if (computerScore === 5) {
    alert("Game over! You lose!");
    resetScore();
  }
}

// updates scores
function updateScore() {
  computerScoreText.textContent = `Computer Score: ${computerScore}`;
  humanScoreText.textContent = `Player Score: ${humanScore}`;
}


// reset score
function resetScore() {
  humanScore = 0;
  computerScore = 0;
  updateScore();
}


// event listeners & DOM Manipulation
const rock = document.querySelector("#rock");
rock.addEventListener("click", clickRock);

const paper = document.querySelector("#paper");
paper.addEventListener("click", clickPaper);

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", clickScissors);

const gameOutcome = document.querySelector("#game-outcome");
let computerChoiceText = document.querySelector("#computer-choice");
let humanChoiceText = document.querySelector("#human-choice");
let gameResult = document.querySelector("#game-result");
let computerScoreText = document.querySelector("#computer-score");
let humanScoreText = document.querySelector("#human-score");


