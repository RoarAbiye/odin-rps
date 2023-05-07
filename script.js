const computer_score = document.querySelector(".computer_score");
const player_score = document.querySelector(".player_score");
const play_buttons = document.querySelectorAll(".play_button");
const winner_tab = document.querySelector(".winner_tab")

/** Assigning event listners to the play buttons*/
play_buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.value);
  });
});

/**Function to return computer choices */
function getComputerChoice() {
  /**setting computer choice to the numbers 1,2 or 3*/
  let computerChoice = Math.floor(Math.random() * 3 + 1);

  return computerChoice === 1
    ? "rock"
    : computerChoice === 2
    ? "paper"
    : "scissor";
}

let playerScore = 0;
let computerScore = 0;

function playRound(choice) {
  let computersChoice = getComputerChoice();
  currentWinner = rockPaperScissor(choice, computersChoice);

  // round_result.textContent = currentWinner;

  if (currentWinner === "player") {
    playerScore++;
    player_score.textContent = playerScore.toString();
  }

  if (currentWinner === "computer") {
    computerScore++;
    computer_score.textContent = computerScore.toString();
  }

  if (computerScore === 5) {
    winner_tab.textContent = "You Loss";
    playerScore = 0;
    computerScore = 0;
  }
  if (playerScore === 5) {
    winner_tab.textContent = "You Win";
    playerScore = 0;
    computerScore = 0;
  }
}

function rockPaperScissor(player, computer) {
  if (player === computer) {
    return "Tie!";
  }

  if (player === "rock") {
    if (computer === "paper") {
      return "computer";
    } else if (computer === "scissor") {
      return "player";
    }
  }
  if (player === "paper") {
    if (computer === "scissor") {
      return "computer";
    } else if (computer === "rock") {
      return "player";
    }
  }
  if (player === "scissor") {
    if (computer === "rock") {
      return "computer";
    } else if (computer === "paper") {
      return "player";
    }
  }
}
