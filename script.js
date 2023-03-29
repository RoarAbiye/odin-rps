function game() {
  /** change it with a function
   * the function should check if the player's input are only the 3 choices
   * and the player's input should convert to lower cases
   */

  let playerSelection;
  let computerSelection;
  let roundResult;

  let computerScore;
  let playerScore;

  for (let i = 0; i < 5; i++) {
    playerSelection = prompt("rock, paper, scissor").toLowerCase();
    computerSelection = getComputerChoice();

    roundResult = playRound(playerSelection, computerSelection);

    if (roundResult === "player") {
      playerScore++;
    } else if (roundResult === "computer") {
      computerScore++;
    }
  }
  console.log(playerScore > computerScore ? "You Win!" : "You Lose!");
}

/**Function to return computer choices */

function getComputerChoice() {
  //setting computer choice to the numbers 1,2 or 3
  let computerChoice = Math.floor(Math.random() * 3 + 1);

  return computerChoice === 1
    ? "rock"
    : computerChoice === 2
    ? "paper"
    : "scissor";
}

/**Function to take two choices and return a winner */

function playRound(player, computer) {
  if (player === "rock") {
    if (computer === "rock") {
      return null;
    } else if (computer === "scissor") {
      return "player";
    } else if (computer === "paper") {
      return "computer";
    }
  }

  if (player === "paper") {
    if (computer === "paper") {
      return null;
    } else if (computer === "rock") {
      return "player";
    } else if (computer === "scissor") {
      return "computer";
    }
  }

  if (player === "scissor") {
    if (computer === "scissor") {
      return null;
    } else if (computer === "rock") {
      return "player";
    } else if (computer === "paper") {
      return "computer";
    }
  }
}

game()
