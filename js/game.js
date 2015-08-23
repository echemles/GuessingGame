var chances = 10, answer = Math.ceil(Math.random()*100), input, difference, guessed = [];

function newGame(){
  answer = Math.ceil(Math.random()*100);
  chances = 10;
  guessed = [];
  document.getElementById("chances").innerHTML = chances + " Guesses Remaining";
  document.getElementById("status").innerHTML = "A new game has started.";
  document.getElementById("guessed").innerHTML = '';
  document.getElementById("hint").innerHTML = '';
  document.getElementById("guess2").reset();
}

function hint(){
  input = Number(document.getElementById("guess").value);
  if (input===NaN || input===0) {
    document.getElementById("hint").innerHTML = "You might want to guess first."
    return;
  }
  difference = Math.abs(answer-input);
  if (difference<5) document.getElementById("hint").innerHTML = "It's either you're correct or you're terribly close!";
  else if (difference<10) document.getElementById("hint").innerHTML = "That number is a little close to the answer."
  else document.getElementById("hint").innerHTML = "Your guess is far from the answer.";
}

function submit2(){
  input = Number(document.getElementById("guess").value);
  if(guessed.indexOf(input) !== -1) {
    document.getElementById("status").innerHTML = "You've guessed that one already."
    return;
  }
  if(input === NaN || input > 100 || input < 1) {
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
    if (input>answer) document.getElementById("status").innerHTML = "Your guess is incorrect.\nGo lower.";
    else document.getElementById("status").innerHTML = "Your guess is incorrect.\nGo higher.";
    document.getElementById("chances").innerHTML = chances + " Guesses Remaining";
    guessed.push(input);
    document.getElementById("guessed").innerHTML = "YOUR GUESSES: " + guessed.join(', ');
    if(guessed.length > 1){
      if (Math.abs(answer-input)<Math.abs(answer-guessed[guessed.length-2])) document.getElementById("hint2").innerHTML = "You're getting nearer.";
      else document.getElementById("hint2").innerHTML = "You're getting farther from the answer.";
    }
  }
}

