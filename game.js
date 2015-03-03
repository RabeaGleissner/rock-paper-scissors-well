var humanChoice = null;
var computerChoice = null;
var $humanScore = null;
var $computerScore = null;
var $winner = null;

var choices = ['rock', 'paper', 'scissors', 'well'];

$(function(){
  $('button').on('click', function(e){
    humanChoice = e.currentTarget.id;
    computerChoice = getComputerChoice(choices);
    findWinner();
    $('#humanScore').text($humanScore);
    $('#computerScore').text($computerScore);
    $('#status_computer').html('<p>Computer choice: ' + computerChoice + '</p>');
    $('#winner_message').html('<p>And the winner is... ' + $winner + '</p>');
  });

  function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
  }

function  findWinner(){
 if (humanChoice == computerChoice){
   $winner = "nobody! It's a draw.";
 } else if ((humanChoice == 'rock' && computerChoice ==  'paper') || (humanChoice == 'rock' && computerChoice == 'well') || (humanChoice == 'paper' && computerChoice == 'scissors') || (humanChoice == 'scissors' && computerChoice == 'rock') || (humanChoice == 'scissors' && computerChoice == 'well') || (humanChoice == 'well' && computerChoice == 'paper') ){
   increaseComputerScore();
   $winner = 'computer';
 } else if ((humanChoice == 'rock' && computerChoice == 'scissors') || (humanChoice == 'paper' && computerChoice == 'rock') || (humanChoice == 'paper' && computerChoice == 'well') || (humanChoice == 'scissors' && computerChoice == 'paper') || (humanChoice == 'well' && computerChoice == 'rock') || (humanChoice == 'well' && computerChoice == 'scissors')) {
   increaseHumanScore();
   $winner = 'human';
 }
}

function increaseComputerScore() {
  $computerScore += 1;
}

function increaseHumanScore() {
  $humanScore += 1;
}

});


