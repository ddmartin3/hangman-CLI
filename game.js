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
    
    //tests
    console.log(gameWord);
    console.log(gameWordObj);

    
    //In game prompts
    letterPrompt();

    //prompt until player loses:
    function letterPrompt() {
        if (loose == 0) {
            console.log("Game Over");
        }else{ 
            console.log("Letters Guessed: "+previousPlayArr.toString());
            console.log("Guesses Left: " + loose);
            prompt.start();
            prompt.get(['letter'], function (err, result) {
                playLetter = result.letter;
                previousPlayArr.push(playLetter);
                gameWordObj.search(playLetter);
                gameWordObj.toString();
                if(gameWordObj.charArray.indexOf(playLetter) == -1 ){loose= (loose - 1)};
                letterPrompt();
            });
        }
    }

}

    // Start the prompt 
    prompt.start();

    prompt.get(['Select_game'], function (err, result) {
        choice = result.Select_game;
        start(choice);
    });






// tests
//  start("cars");
