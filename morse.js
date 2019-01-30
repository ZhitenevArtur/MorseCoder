window.onload = function(){
	var input = document.getElementById('inputForm');
	input.oninput = function() {
		document.getElementById('result').innerHTML = stringToMorse(input.value);
	}
}

function stringToMorse (textString) {
	var morseString = '';
	for (var i = 0; i < textString.length; i++) {
		morseString+=TABLE_OF_SYMBOLS[textString[i].toLowerCase()]
	}
	return morseString;
}