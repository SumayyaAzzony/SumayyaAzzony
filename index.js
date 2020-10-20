/* 21 October 2020
Sumayya Azzony
ID:2001768
Random dice game
*/

function diceFunction() //the random dice function
{
  var firstNumber = Math.random(); // first number generating
  var secondNumber = Math.random(); // second number generating
  firstNumber = firstNumber * 6; // since the generated number is between 0 & 1, in this line it multiplies by 6 to ensure it will be in range 1 to 6
  secondNumber = secondNumber * 6; // since the generated number is between 0 & 1, in this line it multiplies by 6 to ensure it will be in range 1 to 6
  firstNumber = Math.floor(firstNumber) + 1; // to converted it to integer number
  secondNumber = Math.floor(secondNumber) + 1; // to converted it to integer number
  if (firstNumber == 1) // if the first number equal to 1, so the dice with one will display
    document.getElementById("dice1").src = "dice 1.png";
  else if (firstNumber == 2) // if the first number equal to 2, so the dice with two will display
    document.getElementById("dice1").src = "dice 2.png";
  else if (firstNumber == 3) // if the first number equal to 3, so the dice with three will display
    document.getElementById("dice1").src = "dice 3.png";
  else if (firstNumber == 4) // if the first number equal to 4, so the dice with four will display
    document.getElementById("dice1").src = "dice 4.png";
  else if (firstNumber == 5) // if the first number equal to 5, so the dice with five will display
    document.getElementById("dice1").src = "dice 5.png";
  else // the remaining case is the first number equal to 6, so the dice with six will display
    document.getElementById("dice1").src = "dice 6.png";
  //
  if (secondNumber == 1) // if the second number equal to 1, so the dice with one will display
    document.getElementById("dice2").src = "dice 1.png";
  else if (secondNumber == 2) // if the second number equal to 2, so the dice with two will display
    document.getElementById("dice2").src = "dice 2.png";
  else if (secondNumber == 3) // if the second number equal to 3, so the dice with three will display
    document.getElementById("dice2").src = "dice 3.png";
  else if (secondNumber == 4) // if the second number equal to 4, so the dice with four will display
    document.getElementById("dice2").src = "dice 4.png";
  else if (secondNumber == 5) // if the second number equal to 5, so the dice with five will display
    document.getElementById("dice2").src = "dice 5.png";
  else // the remaining case is the second number equal to 6, so the dice with six will display
    document.getElementById("dice2").src = "dice 6.png";

  var whoWin; //this variable holds which player wins, either the one with first number or with the second number
  if (firstNumber > secondNumber) { //incase first number is larger, so the player 1 will win
    whoWin = this.firstNumber; //assign value of first number to whoWin
    document.querySelector("h2").innerHTML = "The winner is Player 1 who got " + firstNumber + " Congrats!"; // to display result on h2 in HTML
    audio.play(); //to playing claps for the winner
  } else if (firstNumber == secondNumber) // incase the two players got the same numbers
  {
    whoWin = this.firstNumber; //here you can assign first or second number since they are equals
    document.querySelector("h2").innerHTML = "Both of players got " + firstNumber + " So,you are equal!"; // to display result on h2 in HTML

  } else { //if the second number is greater than first one
    whoWin = this.secondNumber; //assign value of number two to whoWin
    document.querySelector("h2").innerHTML = "The winner is Player 2 who got " + secondNumber + " Congrats!"; //to display result on h2 in HTML
    audio.play(); //playing claps sound to the winner
  }
}

function play() //function for playing clapps sound
{
  var aud = document.getElementById("audio");
  audio.play();
}
