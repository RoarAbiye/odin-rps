  function game() {
    /** change it with a function 
      * the function should check if the player's input are only the 3 choices
      * and the player's input should convert to lower cases
    */
    let playerSelection   = prompt("rock, paper, scissor").toLowerCase()
    let computerSelection = getComputerChoice();

    playRound(playerSelection, computerSelection)
  }

/**Function to return computer choices */

  function getComputerChoice() {

    //setting computer choice to the numbers 1,2 or 3
    let computerChoice =  Math.floor(Math.random()*3+1)

    return computerChoice === 1 ? "rock"
            : computerChoice === 2 ? "paper"
            : "scissor";

  }


/**Function to take two choices and return a winner */

function playRound(player, computer) {

  if (player ==="rock") {
    if (computer === "rock") {
      return " DRAW 🟰"
    }
    else if (computer === "scissor") {
      return "You Win 🎇!  rock beats scissor"
    }
    else if (computer === "paper") {
      return "You Loose 😭! paper beats rock"
    }
  }

  if (player ==="paper") {
    if (computer === "paper") {
      return " DRAW 🟰"
    }
    else if (computer === "rock") {
      return "You Win 🎇! paper paper rock "
    }
    else if (computer === "scissor") {
      return "You Win 😭! scissor beats paper"
    }
  }

  if (player ==="scissor") {
    if (computer === "scissor") {
      return " DRAW 🟰"
    }
    else if (computer === "rock") {
      return "You Win 🎇! rock beats scissor"
    }
    else if (computer === "paper") {
      return "You Win 🎇! scissor beats paper"
    }
  }
}
