window.onload = function(){
	document.getElementById('morseInputForm').setAttribute("placeholder", textToMorse(document.getElementById('textInputForm').getAttribute("placeholder")));
	
	var inputText = document.getElementById('textInputForm');
	var inputMorse = document.getElementById('morseInputForm');

	inputText.oninput = function() {
		document.getElementById('morseInputForm').innerHTML = textToMorse(inputText.value);
	}
	inputMorse.oninput = function() {
		document.getElementById('textInputForm').innerHTML = morseToText(inputMorse.value);
	}
}

function textToMorse (string) {
	var morseString = '';
	for (var i = 0; i < string.length; i++) {
		if(!TABLE_OF_SYMBOLS[string[i].toLowerCase()]) alert(string[i] + " cannot be translated");
		else{
			morseString+=TABLE_OF_SYMBOLS[string[i].toLowerCase()];
			if(i!=string.length-1) morseString+=" ";
		}	
	}
	return morseString;
}

function morseToText (string) {
	var textString = '';
	var symbol = '';
	for (var i = 0; i < string.length; i++) {
		if(string[i]!=' ') symbol+=string[i];
		if(string[i]==' ' || i == string.length-1){
			if(!TABLE_OF_MCODES[string[i]]) alert(string[i] + " cannot be translated");
			else{
				textString+=TABLE_OF_MCODES[symbol];
				symbol='';
				if(~string.indexOf("  ", i-1)){
					textString+=' ';
					i++;
				}
			}			
		}
	}
	return textString;
}