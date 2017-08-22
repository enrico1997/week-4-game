// Global Variables
// *****************************************
var numToMatch = 0;
var winCount = 0;
var lossCount = 0;
var accumScore = 0;
var numOptions = [1, 3, 6, 9];
var increment = numOptions[Math.round(Math.random())];

// Functions (reusable blocks of code)
// *****************************************
function startGame() {
	//random # to match
	numToMatch = Math.floor((Math.random() * 101) + 19);
	console.log("random number to match: " + numToMatch);

	// Reset variables
	accumScore = 0;

	// Change HTML with generated values
	$("#numToMatch").text(numToMatch);
}

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
	$("#totalScore").text(accumScore);

	//Testing and Debugging, cicking any crystal triggers a console message
	console.log("accumulated score: " + accumScore);

	//Scoreboard
 	if (accumScore === numToMatch) {
	alert("You win!");
	winCount++;
	$("#winCounter").text(winCount);
	}
	else if (accumScore > numToMatch) {
	alert("You lost!");
	lossCount++;
	$("#lossCounter").text(lossCount);
	}

});

// Main Process
// *****************************************
startGame();