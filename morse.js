window.onload = function(){
	var input = document.getElementById('inputForm');
	input.oninput = function() {
		document.getElementById('result').innerHTML = createMorseString(input.value);
	}
}

function createMorseString (textString) {
	var morseString = '';
	for (var i = 0; i < textString.length; i++) {
		morseString+=TABLE[textString[i].toLowerCase()]
	}
	return morseString;
}