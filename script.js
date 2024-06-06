// Computer choice logic
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

// Human choice logic
function getHumanChoice() {
    let humanChoice = prompt("Pick 'Rock', 'Paper' or 'Scissors'.");
    humanChoice = humanChoice.toLowerCase();
    console.log(humanChoice);
    return humanChoice
}

// player scores
humanScore = 0;
computerScore = 0;



