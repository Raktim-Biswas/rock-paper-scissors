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
  let humanChoiceText = document.querySelector("#human-choice");
  humanChoiceText.textContent = 'You picked Rock!';

  let computerChoice = getComputerChoice();
  let computerChoiceText = document.querySelector("#computer-choice");
  computerChoiceText.textContent = `Computer picked ${computerChoice}!`;
  console.log(`Computer choice: ${computerChoice}`);

  let humanChoice = "rock";
  playGame(humanChoice, computerChoice);
}

function clickPaper() {
  let humanChoiceText = document.querySelector("#human-choice");
  humanChoiceText.textContent = 'You picked Paper!';

  let computerChoice = getComputerChoice();
  let computerChoiceText = document.querySelector("#computer-choice");
  computerChoiceText.textContent = `Computer picked ${computerChoice}!`;
  console.log(`Computer choice: ${computerChoice}`);

  let humanChoice = "paper";
  playGame(humanChoice, computerChoice);
}

function clickScissors() {
  let humanChoiceText = document.querySelector("#human-choice");
  humanChoiceText.textContent = 'You picked Scissors!';

  let computerChoice = getComputerChoice();
  let computerChoiceText = document.querySelector("#computer-choice");
  computerChoiceText.textContent = `Computer picked ${computerChoice}!`;
  console.log(`Computer choice: ${computerChoice}`);

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
      console.log("It's a tie! You both picked Rock")
    } else if (computerChoice === "paper") {
      console.log("You lose! Paper beats Rock")
    } else if (computerChoice === "scissors") {
      console.log("You win! Rock beats Scissors!")
    }
  }

  if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      console.log("You win! Paper beats Rock!")
    } else if (computerChoice === "paper") {
      console.log("It's a tie! You both picked Paper")
    } else if (computerChoice === "scissors") {
      console.log("You lose! Scissors beats Paper")
    }
  }

  if (humanChoice === "scissors") {
    if (computerChoice === "rock") {
      console.log("You lose! Rock beats Scissors")
    } else if (computerChoice === "paper") {
      console.log("You win! Scissors beats Paper!")
    } else if (computerChoice === "scissors") {
      console.log("It's a tie! You both picked Scissors")
    }
  }

  updateScore();
}

// event listeners
const rock = document.querySelector("#rock");
rock.addEventListener("click", clickRock);

const paper = document.querySelector("#paper");
paper.addEventListener("click", clickPaper);

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", clickScissors);

// updates scores
function updateScore() {
  let computerScoreText = document.querySelector("#computer-score");
  computerScoreText.textContent = `Computer Score: ${computerScore}`;

  let humanScoreText = document.querySelector("#human-score");
  humanScoreText.textContent = `Player Score: ${humanScore}`;
}


// for (let i = 0; i <= 5; i++) {
//   playGame()

//   if (humanScore > computerScore) {
//     let gameOutcome = document.querySelector("#game-outcome");
//     gameOutcome.textContent = "Game over! You won!";
//   } else if (computerScore > humanScore) {
//     let gameOutcome = document.querySelector("#game-outcome");
//     gameOutcome.textContent = "Game over! You lost!";
//   } else {
//     let gameOutcome = document.querySelector("#game-outcome");
//     gameOutcome.textContent = "Game over! It's a tie!";
//   }
//}

