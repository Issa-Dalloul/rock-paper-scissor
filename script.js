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
    userChoice = button.id;

    computerChoice = choices[Math.floor(Math.random() * 3)];

    result = determineWinner(userChoice, computerChoice);

    updateUI(userChoice, computerChoice, result);

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
  userChoice = "";
  computerChoice = "";
  result = "";

  document.querySelector(".result").textContent = "Choose your move";
  document.querySelector("#computer-choice").textContent = "?";
  document.querySelector("#result-text").textContent = "";
  document.querySelector("body").style.backgroundColor = "#FFFFFF";

  playerScore = 0;
  computerScore = 0;
  updateScore();
});
