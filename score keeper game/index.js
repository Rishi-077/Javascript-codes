const number1 = document.querySelector('#number1');
const number2 = document.querySelector('#number2');
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
const resetBtn = document.querySelector('#reset')
const selectopt = document.querySelector('#selopt');

let p1score = 0;
let p2score = 0;
let winningScore = 5;
let isGameover = false;

player1.addEventListener('click', function(e) {
    if (!isGameover) {
        p1score += 1;
    }
    if (p1score === winningScore) {
       isGameover = true;
       number1.classList.add('winner')
       number2.classList.add('loser')
       player1.disabled = true;
       player2.disabled = true;
    }
    number1.textContent = p1score;
})

player2.addEventListener('click', function(e) {
    if (!isGameover) {
        p2score += 1;
    }
    if (p2score === winningScore) {
       isGameover = true;
       number2.classList.add('winner')
       number1.classList.add('loser')
       player1.disabled = true;
       player2.disabled = true;
    }
    number2.textContent = p2score;
})

selectopt.addEventListener('change',function () {
    winningScore = parseInt(this.value);
    reset()
})

resetBtn.addEventListener('click', reset);

function reset() {
  isGameover = false;
  p1score = 0;
  p2score = 0;
  number1.textContent = 0;
  number2.textContent = 0;   
  number1.classList.remove('winner','loser')
  number2.classList.remove('winner','loser')
  player1.disabled = false;
  player2.disabled = false;

};