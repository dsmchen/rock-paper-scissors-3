type Choice = 'rock' | 'paper' | 'scissors';

function getComputerChoice(): Choice {
  const choices = ['rock', 'paper', 'scissors'] as const;
  return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice(): string | null {
  return prompt('Enter choice: rock, paper or scissors.');
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice: string | null, computerChoice: Choice) {
  const formattedHumanChoice = humanChoice?.toLowerCase().trim();

  if (
    formattedHumanChoice !== 'rock' &&
    formattedHumanChoice !== 'paper' &&
    formattedHumanChoice !== 'scissors'
  ) {
    console.log('Invalid choice!');
    return;
  }

  let msg = '';

  if (formattedHumanChoice === computerChoice) {
    msg = 'You draw!';
  } else if (
    (computerChoice === 'rock' && formattedHumanChoice === 'scissors') ||
    (computerChoice === 'paper' && formattedHumanChoice === 'rock') ||
    (computerChoice === 'scissors' && formattedHumanChoice === 'paper')
  ) {
    msg = `You lose, ${computerChoice} beats ${formattedHumanChoice}!`;
    computerScore++;
  } else {
    msg = `You win, ${formattedHumanChoice} beats ${computerChoice}!`;
    humanScore++;
  }

  console.log(msg);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
