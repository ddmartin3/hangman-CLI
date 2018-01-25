//Letter Handling  
var Letter = function(letter){
    this.value = letter;
    this.guessed = 0; 
}

Letter.prototype.correctGuess = function(){
    this.guessed = 1;
};

Letter.prototype.toString = function(){
    if (this.guessed === 0){
        return(" _ ");
    }else{
        return(this.value);
    }
};


module.exports = Letter;

//Test 

// var a =  new Letter("a");
// console.log(a.value);
// console.log(a.guessed);
// a.display();

// console.log("====================================================");

// var b = new Letter("b");
// console.log(b.value);
// b.correctGuess();
// console.log(b.guessed);
// b.display();