var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var compGuess = letters[Math.floor(Math.random()*letters.length)];

var guessesLimit = 9;
var guessesLeftNum = guessesLimit;

var guessesArr = [];

var winsCount = 0;
var losesCount = 0;

startGame();


function startGame () {
	var wins = document.querySelector('#wins');
	var loses = document.querySelector('#loses');
	var guessesLeft = document.querySelector('#guesses_left');
	var guesses = document.querySelector('#guesses');

	wins.innerHTML = winsCount;
	loses.innerHTML = losesCount;
	guesses.innerHTML = "";
	guessesLeft.innerHTML = guessesLeftNum;
}

function callback (event) {
	var userGuess = event.key;

	if(letters.indexOf(userGuess) === -1){
		return;
	}

	if(guessesArr.indexOf(userGuess) === -1) {
		guessesArr.push(userGuess);
	}

	document.querySelector('#guesses').innerHTML = guessesArr.join(', ');
	guessesLeftNum--;

	document.querySelector('#guesses_left').innerHTML = guessesLeftNum;

	if(userGuess.toLowerCase() === compGuess.toLowerCase()) {
		winsCount++;
		guessesLeftNum = guessesLimit;
		guessesArr = [];
		startGame();
	} else if(guessesLeftNum <= 0) {
		losesCount++;
		guessesLeftNum = guessesLimit;
		guessesArr = [];
		startGame();
	}
}


document.onkeyup = callback;