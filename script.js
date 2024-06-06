// Computer picks "rock", "paper" or "scissors"
function getComputerChoice() {
  let randomNumber = (Math.random() * 100 + 1);
  if (randomNumber <= 1/3 * 100) {
    return "Rock"
  } else if (randomNumber >= 2/3 * 100) {
    return "Paper"
  } else {
    return "Scissors"
  }
}

