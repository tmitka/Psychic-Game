//create options for the computer to get a letter for the user to guess
var guessList = "abcdefghijlkmnopqrstuvwxyz";

//select a random letter from the list
var randomLetter = guessList[[Math.floor(Math.random() * guessList.length)]];
console.log(randomLetter);

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
        guessesLeft -= 1;
        guessesLeftElement.textContent = ("Guesses Left: " + guessesLeft);
        userGuess = event.key;
        guessesMade.push(userGuess);
        console.log(userGuess);
        console.log(guessesMade);

        //on a lose reset the game, update loses
        if (guessesLeft == 0){
            alert("You have lost, try again");
            guessesLeft = 10;
            guessesLeftElement.textContent = ("Guesses Left: " + guessesLeft);
            loses += 1;
            losesElement.textContent = ("Loses: " + loses);
            var randomLetter = guessList[[Math.floor(Math.random() * guessList.length)]];
            console.log(randomLetter);
            guessesMade = [];
            };

        if (userGuess === randomLetter){
            alert("You Win");
        }

    };

    winsElement.textContent = ("Wins: " + wins);
    losesElement.textContent = ("Loses: " + loses);
    guessesMadeElement.textContent = ("Guesses Made: " + guessesMade);

};




//var newWinsElement = document.createElement("p");

//newWinsElement.textContent = "test";

//winsElement.appendChild(newWinsElement);