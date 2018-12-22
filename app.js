//game values

let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again Event listener 
  game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again') {
    window.location.reload();
  }
});


//Listen for guess btn
  guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);

//Validate

  if(isNaN(guess) || guess < min || guess > max){
  setMessage(`Please enter a number between ${min} and ${max}`, 'red');
}
  // check if won
  if(guess === winningNum) {
    gameOver(true, `${winningNum} is correct! You won!`);
  } else if(isNaN(guess)){
    // setMessage(`Enter a number. You did not lose a turn!`);
  } else{
    // wrong number subtract a play
    guessesLeft -= 1;

    if(guessesLeft === 0) {
      // game over
      gameOver(false, `Game over. Correct number was ${winningNum}`);
    } else {
      //game continues
      // set message
    setMessage(`${guess} is incorrect. You have ${guessesLeft} guesses left`, 'red');
    // change border color
    guessInput.style.borderColor = 'red';

    //clear input
    guessInput.value = '';
    }
  }
});

  //Game over
  function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';
    //disable the input
    guessInput.disabled = true;
    //change border color
    guessInput.style.borderColor = color;
    // text color
    message.style.color = color;
    // set message
    setMessage(msg);

    // play again
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
  }

  // Get winning number
  function getRandomNum(min, max) {
   return Math.floor(Math.random() * (max - min +1) + min);
  }
  console.log(winningNum);

// Message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}