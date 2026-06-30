type Choice = 'rock' | 'paper' | 'scissors';

function getComputerChoice(): Choice {
  const choices = ['rock', 'paper', 'scissors'] as const;
  return choices[Math.floor(Math.random() * 3)];
}

console.log(getComputerChoice());
