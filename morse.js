var isTextMode = true;
var isLatinMode = true;

window.onload = function(){
	document.getElementById('outputForm').setAttribute("placeholder", 
		textToMorse(document.getElementById('inputForm').getAttribute("placeholder")));
	
	var inputText = document.getElementById('inputForm');
	var inputMorse = document.getElementById('outputForm');

	inputText.oninput = function() {
		document.getElementById('outputForm').value = textToMorse(inputText.value);
		autosize(inputForm);
		autosize(outputForm);
	}
}

//via Yair Even Or https://codepen.io/vsync/pen/czgrf
function autosize(elem){
	setTimeout(function(){
		elem.style.cssText = 'height:auto; padding:0';
		elem.style.cssText = 'height:' + elem.scrollHeight + 'px';
	},0);
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

function swapInputs () {
	isTextMode = !isTextMode;

	var temp = document.getElementById('inputForm').getAttribute("placeholder");
	document.getElementById('inputForm').setAttribute("placeholder", 
		document.getElementById('outputForm').getAttribute("placeholder"));
	document.getElementById('outputForm').setAttribute("placeholder", temp);

	temp = document.getElementById('inputForm').value;
	document.getElementById('inputForm').value = document.getElementById('outputForm').value;
	document.getElementById('outputForm').value = temp;
}

/* TO DO
	Main page
		-!!Swap position on the screen for user inputs!!-
		-!!Auto expanding text area!!-
		Two modes of translator (eng/rus)
		Sounds for Morse code

	About Morse page
		Page with information about Samuel Morse, how whole system was made, russian Morse alphabet, etc.

	Learning page
		Learning system for letters(eng/rus), numbers, signs
	
*/