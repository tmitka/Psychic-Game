//create options for the computer to get a letter for the user to guess
var guessList = "abcdefghijlkmnopqrstuvwxyz";

//set the randomLetter
var randomLetter = guessList[[Math.floor(Math.random() * guessList.length)]];

function reset(){
    guessesLeft = 10;
    guessesLeftElement.textContent = ("Guesses Left: " + guessesLeft);
    guessesMade = [];
    randomLetter = guessList[[Math.floor(Math.random() * guessList.length)]];
};

//declare variables needed for the game to function guess/wins/loses/guesses made and on valid key press store user's guess
var userGuess = "";
var wins = 0;
var loses = 0;
var guessesMade = [];
var guessesLeft = 10;

//grab the html elements needed to edit
var winsElement = document.getElementById("wins");
var losesElement = document.getElementById("loses");
var guessesLeftElement = document.getElementById("guesses-left");
var guessesMadeElement = document.getElementById("guesses-made");

winsElement.textContent = ("Wins: " + wins);
losesElement.textContent = ("Loses: " + loses);
guessesLeftElement.textContent = ("Guesses Left: " + guessesLeft);
guessesMadeElement.textContent = ("Guesses Made:");


document.onkeyup = function(event){

    //if the user enters a valid letter set the guess equal to it, change the guess count, and update the guess list
    var validGuess = "abcdefghijlkmnopqrstuvwxyz"

        if (validGuess.indexOf(event.key) != -1){
        //select a random letter from the list
        guessesLeft -= 1;
        guessesLeftElement.textContent = ("Guesses Left: " + guessesLeft);
        userGuess = event.key;
        guessesMade.push(userGuess);

            //on a lose reset the game, update loses
            if (guessesLeft == 0){
                alert("You have lost, try again");
                loses += 1;
                reset();
                };

            //on a win reset the game, update wins    
            if (userGuess === randomLetter){
                alert("You Win");
                wins += 1;
                reset();
                };

    };

    winsElement.textContent = ("Wins: " + wins);
    losesElement.textContent = ("Loses: " + loses);
    guessesMadeElement.textContent = ("Guesses Made: " + guessesMade);

};