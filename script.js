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

// human choice logic
function getHumanChoice() {
  let userInput = prompt("Pick 'Rock', 'Paper' or 'Scissors'.");
  userInput = userInput.toLowerCase();
  console.log(userInput);
  return userInput
}

// full game logic with 5 rounds

function playGame() {

  // player scores
  humanScore = 0;
  computerScore = 0;

  // single round logic
  function playRound(humanChoice, computerChoice) {

    humanChoice = getHumanChoice();
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

  for (i = 0; i <= 5; i++) {
    playRound()
    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
  }

  if (humanScore > computerScore) {
    console.log("Game over! You won!")
  } else if (computerScore > humanChoice) {
    console.log("Game over! You lost!")
  } else {
    console.log("Game over! It's a tie!")
  }
}

playGame();






