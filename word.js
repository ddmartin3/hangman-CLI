var Letter = require("./letter.js");

var Word = function(word){
    this.value = word;
    this.charArray = word.split(""); 
    this.letterArray = [];
}

Word.prototype.toString = function(){
    console.log(this.letterArray.join(""));
};

Word.prototype.letterBuilder = function(){
    for (let i = 0; i < this.charArray.length; i++) {
       var gameLetter = new Letter(this.charArray[i]);
        this.letterArray.push(gameLetter); 
    }
}

Word.prototype.search = function(playLetter){
    for (let i = 0; i < this.letterArray.length; i++) {
        if (this.letterArray[i].value == playLetter) {
            this.letterArray[i].correctGuess();
        }        
    }
}

module.exports = Word;


//tests 

// var gameWord = new Word("youtube");
// console.log(gameWord.value);
// console.log(gameWord.charArray);
// gameWord.letterBuilder();
// console.log(gameWord.letterArray);
// gameWord.toString();

// gameWord.search("u");
// gameWord.toString();

// gameWord.search("e");
// gameWord.toString();

// gameWord.search("y");
// gameWord.toString();


