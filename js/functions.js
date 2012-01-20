// JavaScript Document


var letter;

while (!letter) {
	letter = prompt('What is your favourite letter of the alphabet?');
}

console.log(letter);


var writeLetterTenTimes = function () {
	for (var i = 0; i < 10; i++ ) {
		document.write('<br>' + letter);
	}
};

writeLetterTenTimes();


