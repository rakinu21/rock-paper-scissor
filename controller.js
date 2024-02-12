

export function controller() {

const player1 = document.querySelector('.player1');
const computer = document.querySelector('.computerPlayer');
const display = document.querySelector('.output');
const winnerText = document.querySelector('.winner');
const choices = document.querySelectorAll('#choices');
    
  choices.forEach((items) => {
    items.addEventListener('click', () => {
      winnerText.textContent = '';

      display.innerHTML = `<div class="player1">
         <i class="fa-solid fa-hand-fist"></i>
     </div>
     
     <div class="computerPlayer">
         <i class="fa-solid fa-hand-fist"></i>
     </div>`;

      setTimeout(() => {
        player1.innerHTML = items.innerHTML;

        const computerChoice =
          choices[Math.floor(Math.random() * choices.length)];
        computer.innerHTML = computerChoice.innerHTML;
        const playerChoice = items.classList[0];
        const computerChoiceClass = computerChoice.classList[0];

        determineWinner(playerChoice, computerChoiceClass);

        display.innerHTML = `<div class="player1">
               ${player1.innerHTML}
            </div>
            
            <div class="computerPlayer">
               ${computer.innerHTML}
            </div>`;
      }, 2000);
    });
  });
}

function determineWinner(playerChoice, computerChoice) {
    const winnerText = document.querySelector('.winner');
  winnerText.textContent = ' ';
  if (playerChoice === computerChoice) {
    winnerText.textContent = 'draw';
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissor') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissor' && computerChoice === 'paper')
  ) {
    winnerText.textContent = 'You win!';
  } else {
    winnerText.textContent = 'Computer win!';
  }
}


