'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

document.querySelector('.button').addEventListener('click', function(){
    let userGuess = Number(document.querySelector('.input').value);

    let currScore = Number(document.querySelector('.Reducto').textContent);

    if(!userGuess){
        document.querySelector('.guessText').textContent = 'No Number Detected';
    }else if(secretNumber === userGuess){
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.guessText').textContent = '🥳 Correct Number';
        document.querySelector('.YourHighScore').textContent = Math.max(currScore, document.querySelector('.YourHighScore').textContent);
        document.querySelector('.Qootion').textContent = secretNumber;
    }else if(secretNumber > userGuess){
        if(currScore <= 1){
            document.querySelector('.guessText').textContent = '🥹 Game Over ';
            document.querySelector('.Reducto').textContent = 0;
        }else{
            document.querySelector('.guessText').textContent = '📉 Too Low';
            document.querySelector('.Reducto').textContent = currScore - 1;
        }
    }else if(secretNumber < userGuess){
        if(currScore <= 1){
            document.querySelector('.guessText').textContent = '🥹 Game Over ';
            document.querySelector('.Reducto').textContent = 0;
        }else{
            document.querySelector('.guessText').textContent = '📈 Too High';
            document.querySelector('.Reducto').textContent = currScore - 1;
        }
    }
});

document.querySelector('#button').addEventListener('click', function(){
    document.querySelector('body').style.backgroundColor = 'rgb(37, 32, 32)';
    document.querySelector('.Reducto').textContent = 20;
    document.querySelector('.guessText').textContent = '✨ Start Guessing Number';
    document.querySelector('.Qootion').textContent = '?';
    document.querySelector('.input').value = '';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
});