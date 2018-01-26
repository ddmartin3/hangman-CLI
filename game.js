var Letter = require("./letter.js");
var Word = require("./word.js");
var prompt = require('prompt');

var carWords = ["automobile","automatic","transmission","toyota","truck","cruise","brake","thermostat","module","corvette","chevrolet","cadilac"];
var countryNames = ["japan","zambia","russia","china","cuba","syria","quatar","tailand","taiwan"];
var previousPlayArr= [];
var gameWord;
var win = 0;
var loose = 10;
var gamesWon = 0;
var gamesLost = 0;


var start = function(choice){
    if (choice == "cars") {
        gameWord = carWords[Math.floor( Math.random() * 12 )];
    }
    else if (choice == "countries") {
        gameWord = countryNames[Math.floor( Math.random() * 9 )];
    }else{
        console.log("Please Select from one of the Availiable Games")
    }
    var gameWordObj = new Word(gameWord);
        gameWordObj.letterBuilder();  
        gameWordObj.toString();
    
    
    //In game prompts
    letterPrompt();

    //prompt until player loses:
    function letterPrompt() {
        if (loose == 0) {
            console.log("Game Over! Would you like to play another?");
            restartPrompt();
        }else if(win == gameWordObj.charArray.length - 1){
            console.log("You Win!  Would you like to play another?");
            restartPrompt();
        }else{ 
            console.log("Letters Guessed: "+previousPlayArr.toString());
            console.log("Guesses Left: " + loose);
            prompt.start();
            prompt.get(['letter'], function (err, result) {
                playLetter = result.letter;
                if (previousPlayArr.indexOf(playLetter) != -1)  {
                    console.log(playLetter+" has already been played.")
                    letterPrompt();
                }else{
                    previousPlayArr.push(playLetter);
                    gameWordObj.search(playLetter);
                    gameWordObj.toString();
                    if(gameWordObj.charArray.indexOf(playLetter) == -1 ){
                        loose= (loose - 1);
                    }else{
                        win = (win + 1);
                    };
                    letterPrompt();
                }
            });
        }
    }
    function restartPrompt(){
        prompt.start();
        prompt.get(['yes_or_no'], function (err, result) {
            restartDecision = result.yes_or_no;
            if (restartDecision == "yes") {
                win = 0;
                loose = 10;
                previousPlayArr= [];
                gameLoad();
            }else{
                console.log("thanks for playing.");
            }

        });

    }

}

function gameLoad() {
    // Start the prompt 
    prompt.start();

    prompt.get(['Select_game'], function (err, result) {
        choice = result.Select_game;
        start(choice);
    });
}

gameLoad();



