// Global Variables
// *****************************************
var numToMatch = 0;
var crystalScore = 0;
var winCount = 0;
var lossCount = 0;
var accumScore = 0;
var numOptions = [0, 0, 0, 0, 0, 0, 0, 0]; //establishes 4 crystals

// Functions (reusable blocks of code)
// *****************************************
function startGame() {
	//Generate random # for target match
	numToMatch = Math.floor((Math.random() * 101) + 19);

	// Reset variables
	accumScore = 0;
	numOptions = [];

	// Change HTML with generated values
	$("#numToMatch").text(numToMatch);
	$("#totalScore").text(accumScore);

}

// Generate unique array of numbers between 1-12
// http://stackoverflow.com/questions/962802#962890
for (var a=[],i=0; i<12; i++) a[i] = i + 1;

function shuffle(array) {
  var tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array.slice(0 , numOptions.length);
}

// Randomize Crystal Values
numOptions = shuffle(a);
console.log("Randomized Crystal Values are " + numOptions);

// Sets image and score values of crystals
for (var i = 0; i < numOptions.length; i++) {
	var wrapper = $("<div>").addClass('col-xs-3');
	$("<img>").addClass("crystal-image")
				.css("width", "100%")
				.attr("src", "assets/images/crystal" + (i + 1) + ".jpg")
				.attr("data-crystalvalue", numOptions[i])
				.appendTo(wrapper);
	$("#crystals").append(wrapper);
}

$(".crystal-image").on("click", function() {
	
	var crystalValue = ($(this).attr("data-crystalvalue"));
	crystalValue = parseInt(crystalValue);
	accumScore += crystalValue;
	// Change HTML with generated values
	$("#totalScore").html(accumScore);

	//Scoreboard and game reset
 	if (accumScore === numToMatch) {
	winCount++;
	$("#winCounter").text(winCount);
	alert("You win! The numbers match");
	startGame();
	}

	else if (accumScore > numToMatch) {
	lossCount++;
	$("#lossCounter").text(lossCount);
	alert("You lost! " + accumScore + " > " + numToMatch);
	startGame();
	}

});

// Main Process
// *****************************************
startGame();