const score_bord = document.querySelector(".score")
const round_result = document.querySelector(".result")
const play_buttons = document.querySelectorAll(".play_button")

play_buttons.forEach(button => {
  button.addEventListener("click", () => {
    playRound(button.value)
  })
});


/**Function to return computer choices */

function getComputerChoice() {

  /**setting computer choice to the numbers 1,2 or 3*/
  let computerChoice = Math.floor(Math.random() * 3 + 1);

  return computerChoice === 1
    ? "rock" : computerChoice === 2
      ? "paper" : "scissor";
}

let playerScore =0;
let computerScore=0;

function playRound(playWith) {
  let computer = getComputerChoice()
  currentWinner = rockPaperScissor(playWith, computer)

  round_result.textContent = currentWinner;

  if (currentWinner === "player") {
    playerScore++;
  }

  if (currentWinner === "computer") {
    computerScore++;
  }

  if (computerScore == 5) {
    score_bord.textContent = "Winner computer"
    playerScore = 0; computerScore=0;
  }
  if (playerScore == 5) {
    score_bord.textContent = "Winner player"
    playerScore = 0; computerScore=0;
  }
  console.log(computerScore, playerScore)
}

function rockPaperScissor(player, computer) {

  if (player === computer) { return "Tie!"; }

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
