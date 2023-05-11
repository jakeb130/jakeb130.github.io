function getComputerChoice() {
  // Randomly return either 'rock', 'paper', or 'scissors'.
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  // Define possible outcomes for the game
  let outcomes = {
    rock: { beats: "scissors", "loses to": "paper" },
    paper: { beats: "rock", "loses to": "scissors" },
    scissors: { beats: "paper", "loses to": "rock" },
  };

  // Check the possible outcomes and return the result in sentence case
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (outcomes[playerSelection]["beats"] === computerSelection) {
    const winningText = `${playerSelection} beats ${computerSelection}`;
    return `You win! ${
      winningText.charAt(0).toUpperCase() + winningText.slice(1)
    }.`;
  } else {
    const losingText = `${computerSelection} beats ${playerSelection}`;
    return `You lose! ${
      losingText.charAt(0).toUpperCase() + losingText.slice(1)
    }.`;
  }
}

function updateResults(text) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = text;
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 1; i <= 5; i++) {
    let playerSelection;
    let isValidChoice = false;

    // Keep prompting for input until a valid choice is entered
    while (!isValidChoice) {
      playerSelection = prompt("Rock, paper, or scissors?"); // Get player selection

      if (
        ["rock", "paper", "scissors"].includes(playerSelection.toLowerCase())
      ) {
        isValidChoice = true;
      } else {
        alert("Invalid choice. Please enter rock, paper, or scissors.");
      }
    }

    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    updateResults(result);

    if (result.includes("win")) {
      playerScore++;
    } else if (result.includes("lose")) {
      computerScore++;
    }
  }

if (playerScore > computerScore) {
  updateResults(
    `You win the game! Final score: ${playerScore}-${computerScore}`
  );
} else if (computerScore > playerScore) {
  updateResults(
    `You lose the game! Final score: ${playerScore}-${computerScore}`
  );
} else {
  updateResults(`It's a tie! Final score: ${playerScore}-${computerScore}`);
}

// Attach the game function to the button click event
document
  .getElementById("rock")
  .addEventListener("click", () => playRound("rock", getComputerChoice()));
document
  .getElementById("paper")
  .addEventListener("click", () => playRound("paper", getComputerChoice()));
document
  .getElementById("scissors")
  .addEventListener("click", () => playRound("scissors", getComputerChoice()));

  