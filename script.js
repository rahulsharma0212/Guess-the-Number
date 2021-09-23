'use strict';


let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    
    //when there is no input
    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No number!';
    }
    //when get correct number 
    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct number';
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent = highscore;
        }


    }else if(guess!==secretNumber){
       if(score>1){
            guess>secretNumber ?  document.querySelector('.message').textContent = '📈 Too high' : document.querySelector('.message').textContent = '📉 Too low';
            score--;
            document.querySelector('.score').textContent = score;

       } else{
        document.querySelector('.message').textContent = '💥 You lost the game';
       }
    } 
  /*  else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📈 Too high';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥 You lost the game';
        }

    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📉 Too low';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥 You lost the game';
        }
    } */

});


document.querySelector('.again').addEventListener('click', () => {
score=20;
secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.message').textContent = 'Start Guessing...';
document.querySelector('.number').textContent = '?';
document.querySelector('.score').textContent = score;
document.querySelector('.guess').value = '';
document.querySelector('body').style.backgroundColor = '#222';
document.querySelector('.number').style.width = '15rem';
})

