let playerScore = 0;
let computerScore = 0;

function computerPlay(){
    let array = ["rock", "paper", "scissors"];
    let num = Math.floor(Math.random()*array.length);
    return array[num];
}

function playRound(playerSelection, computerSelection) {

    let computerChoice = computerPlay();
    let playerChoice = prompt("Your choice: ").toLowerCase();
    
    // YOU LOSE
    if (playerChoice === 'rock' & computerChoice === 'paper') {
    computerScore += 1;
    alert('You lose, paper beats rock!');
  } else if (playerChoice === 'paper' & computerChoice === 'scissors') {
    computerScore += 1;
    alert('You lose, scissors beat paper!');
  } else if (playerChoice === 'scissors' & computerChoice === 'paper') {
    computerScore += 1;
    alert('You lose, rock beats scissors!');
  } 

  // YOU WIN
  else if (playerChoice === 'rock' & computerChoice === 'scissors') {
    playerScore += 1;
    alert('You win, rock beats scissors!');
  } else if (playerChoice === 'paper' & computerChoice === 'rock') {
    playerScore += 1;
    alert('You win, paper beats rock!');
  } else if (playerChoice === 'scissors' & computerChoice === 'paper') {
    playerScore += 1;
    alert('You win, scissors beat paper!');
  }
  
  // DRAW
  else if (playerChoice === 'rock' & computerChoice === 'rock') {
    computerScore += 1;
    playerScore += 1;
    alert('DRAW');
  } else if (playerChoice === 'paper' & computerChoice === 'paper') {
    computerScore += 1;
    playerScore += 1;
    alert('DRAW');
  } else if (playerChoice === 'scissors' & computerChoice === 'scissors') {
    computerScore += 1;
    playerScore += 1;
    alert('DRAW');
  }
  
}

function game(){  
  playRound();

}


playerScore = 0;
computerScore = 0;

for (let i = 0; i<3; i++) {
    game();
  }


if (computerScore > playerScore) {
  console.log("YOU LOST!" + " computer: " + computerScore + " You: " + playerScore);
} else if (computerScore == playerScore){
  console.log("DRAW" + " computer: " + computerScore + " You: " + playerScore);
} else {
  console.log("YOU WIN!" + " computer: " + computerScore + " You: " + playerScore);
}