var chances = 5, answer = Math.ceil(Math.random()*100), input;

function newGame(){
  answer = Math.ceil(Math.random()*100);
  chances = 5;
  document.getElementById("chances").innerHTML = chances + " Guesses Remaining";
  document.getElementById("status").innerHTML = "A new game has started.";
  document.getElementById("guess2").reset();
}

function hint(){
  input = Number(document.getElementById("guess").value);
  if (input===NaN || input > 100 || input < 1) {
    document.getElementById("hint").innerHTML = "You might want to put a proper guess first."
    return;
  }
  document.getElementById("hint").innerHTML = "You might want to add or subtract " + Math.abs(answer-input) + " to your guess."
}

function submit(){
  input = Number(document.getElementById("guess").value);
  if (input === NaN || input > 100 || input < 1) {
    document.getElementById("status").innerHTML = "That is not a valid guess.\nEnter a number from 1 to 100."
    return;
  }
  chances--;
  if(chances<1) { 
    alert("You have reached the maximum tries.");
    return newGame();
  } else if (input===answer) {
    alert("You've guessed the number!");
    return newGame();
  } else {
    document.getElementById("status").innerHTML = "Your guess is incorrect.\nPlease try again.";
    document.getElementById("chances").innerHTML = chances + " Guesses Remaining";
  }
}

