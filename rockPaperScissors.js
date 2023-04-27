function getComputerChoice() {
  // Randomly return either 'rock', 'paper', or 'scissors'.
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  // Convert player selection to lowercase to ensure case-insensitive input
  playerSelection = playerSelection.toLowerCase();

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

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 1; i <= 5; i++) {
    const playerSelection = prompt("Rock, paper, or scissors?"); // Get player selection
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    console.log(result);

    if (result.includes("win")) {
      playerScore++;
    } else if (result.includes("lose")) {
      computerScore++;
    }
  }

  if (playerScore > computerScore) {
    console.log(
      `You win the game! Final score: ${playerScore}-${computerScore}`
    );
  } else if (computerScore > playerScore) {
    console.log(
      `You lose the game! Final score: ${playerScore}-${computerScore}`
    );
  } else {
    console.log(`It's a tie! Final score: ${playerScore}-${computerScore}`);
  }
}

game(); // Call the game function
