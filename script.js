// computer choice logic
function getComputerChoice() {
  let randomNumber = (Math.random() * 100 + 1);
  if (randomNumber <= 1/3 * 100) {
    console.log("Computer picked Rock!");
    return "rock"
  } else if (randomNumber >= 2/3 * 100) {
    console.log("Computer picked Paper!");
    return "paper"
  } else {
    console.log("Computer picked Scissors!");
    return "scissors"
  }
}

function clickRock() {
  console.log("You picked Rock!")
  let humanChoice = "rock";
  playGame(humanChoice);
}

function clickPaper() {
  console.log("You picked Paper!")
  let humanChoice = "paper";
  playGame(humanChoice);
}

function clickScissors() {
  console.log("You picked Scissors!")
  let humanChoice = "scissors";
  playGame(humanChoice);
}

// event listeners
const rock = document.querySelector("#rock");
rock.addEventListener("click", clickRock);

const paper = document.querySelector("#paper");
paper.addEventListener("click", clickPaper);

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", clickScissors);

// player scores
let humanScore = 0;
let computerScore = 0;


// single round logic
function playGame(humanChoice, computerChoice) {
  computerChoice = getComputerChoice();

  if (computerChoice === "rock") {
    if (humanChoice === "rock") {
      console.log("You both played Rock! It's a tie!")
    } else if (humanChoice === "paper") {
      console.log("You win! Paper beats Rock!");
      humanScore++;
    } else if (humanChoice === "scissors") {
      console.log("You lose! Rock beats scissors!");
      computerScore++;
    }
  } 

  if (computerChoice === "paper") {
    if (humanChoice === "rock") {
      console.log("You lose! Paper beats Rock");
      computerScore++;
    } else if (humanChoice === "paper") {
      console.log("It's a tie! You both played Paper")
    } else if (humanChoice === "scissors") {
      console.log("You win! Scissors beats Paper");
      humanScore++;
    }
  } 

  if (computerChoice === "scissors") {
    if (humanChoice === "rock") {
      console.log("You win! Rock beats Scissors");
      humanScore++;
    } else if (humanChoice === "paper") {
      console.log("You lose! Scissors beat Paper");
      computerScore++;
    } else if (humanChoice === "scissors") {
      console.log("It's a tie! You both picked Scissors!")
    }   
  }
}
