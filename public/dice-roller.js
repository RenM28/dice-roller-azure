// Function sets up array of 3 values to store randomized nums for
// each dice roll
// Values in array are converted using convertToLRC and displayed to
// appropriate text box
function rollDice() {
	var nums = [0,0,0]; // initialized array
	for (let i = 0; i < 3; i++) {
		// selects random num + converts
		num = convertToLRC(Math.floor(Math.random() * 5));
		nums[i] = num;
	}	
	// displays text to text boxes
	document.getElementById("dice1").value = nums[0];
	document.getElementById("dice2").value = nums[1];
	document.getElementById("dice3").value = nums[2];
}

// Function converts number to L, R, C, or . depending
// on value
// Output: String value L, R, C, or .
function convertToLRC(num) {
	if (num == 0) { // one face of dice has L
		num = "L";
	} else if (num == 1) { // one face of dice has R
		num = "R";
	} else if (num == 2) { // one face of dice has C
		num = "C";
	} else { // 3 faces of dice have .
		num = ".";
	}
	return num;
}
