const choices = ["rock", "paper", "scissors"];
let userChoice = "";
let computerChoice = "";
let result = "";
let playerScore = 0;
let computerScore = 0;

const choiceButtons = document.querySelectorAll(".choice");
const playAgainButton = document.getElementById("play-again");

choiceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Get the user's choice from the button's id (rock, paper, or scissors)
    userChoice = button.id;

    // Generate a random choice for the computer
    computerChoice = choices[Math.floor(Math.random() * 3)];

    // Compare the choices and determine the result
    result = determineWinner(userChoice, computerChoice);

    // Update the UI with the choices and result
    updateUI(userChoice, computerChoice, result);

    // Update the score
    updateScore();
  });
});

function determineWinner(user, computer) {
  if (user === computer) {
    document.querySelector("body").style.backgroundColor = "#D3D3D3";
    return "It's a tie";
  }
  if (
    (user === "rock" && computer === "scissors") ||
    (user === "scissors" && computer === "paper") ||
    (user === "paper" && computer === "rock")
  ) {
    document.querySelector("body").style.backgroundColor = "#149635";
    return "You win!";
  }
  document.querySelector("body").style.backgroundColor = "#a74c10";
  return "Computer wins!";
}

function updateUI(user, computer, result) {
  document.querySelector(".result").textContent = `You chose ${user}. Computer chose ${computer}. ${result}`;
  document.querySelector("#computer-choice").textContent = computer;
  document.querySelector("#result-text").textContent = result;
}

function updateScore() {
  if (result === "You win!") {
    playerScore++;
  } else if (result === "Computer wins!") {
    computerScore++;
  }
  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("computer-score").textContent = computerScore;
}

playAgainButton.addEventListener("click", () => {
  // Reset the game
  userChoice = "";
  computerChoice = "";
  result = "";

  // Clear the UI
  document.querySelector(".result").textContent = "Choose your move";
  document.querySelector("#computer-choice").textContent = "?";
  document.querySelector("#result-text").textContent = "";
  document.querySelector("body").style.backgroundColor = "#FFFFFF";

  // Reset the scores
  playerScore = 0;
  computerScore = 0;
  updateScore();
});
