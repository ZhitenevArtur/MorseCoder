var isTextMode = true;
var isLatinMode = true;

window.onload = function(){
	document.getElementById('outputForm').setAttribute("placeholder", 
		textToMorse(document.getElementById('inputForm').getAttribute("placeholder")));
	
	var inputFormElem = document.getElementById('inputForm');
	var outputFormElem = document.getElementById('outputForm');

	inputFormElem.oninput = function (){
		if(isTextMode){
			document.getElementById('outputForm').value = textToMorse(inputFormElem.value);
		}
		else{
			document.getElementById('outputForm').value = morseToText(inputFormElem.value);
		}
		autosize(inputForm);
		autosize(outputForm);
	}

	var checkbox = document.getElementById('chkbox');
	checkbox.onchange = function (){
		isLatinMode = !isLatinMode;
	}
}

window.onresize = function(){
	autosize(inputForm);
	autosize(outputForm);
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
		if(string[i].toLowerCase() in TABLE_OF_SYMBOLS){
			morseString+=TABLE_OF_SYMBOLS[string[i].toLowerCase()];
			if(i!=string.length-1) morseString+=" ";
		}
		else if(!TABLE_OF_SYMBOLS[string[i].toLowerCase()]) alert(string[i] + " cannot be translated");
	}
	return morseString;
}

function morseToText(string) {
	var textString = '';
	var mWord = '';

	for (var i = 0; i < string.length; i++) {
		if (string[i]===' ' || i == string.length-1){
			if(string[i]!=' '){
				mWord+=string[i];
			}

			if(isLatinMode){
				if(mWord in TABLE_OF_MCODES){
					textString += TABLE_OF_MCODES[mWord];
				}
			}
			else{
				if(mWord in TABLE_OF_MCODES_RUS){
					textString += TABLE_OF_MCODES_RUS[mWord];
				}
			}
			
			if(string[i+1]===' ' && string[i+2]===' ' && 
				string[i+3]===' ' && string[i+4]===' ' && 
				string[i+5]===' ' && string[i+6]===' ') {
				mWord = '/';
				if(isLatinMode){
					if(mWord in TABLE_OF_MCODES){
						textString += TABLE_OF_MCODES[mWord];
					}
				}
				else{
					if(mWord in TABLE_OF_MCODES_RUS){
						textString += TABLE_OF_MCODES_RUS[mWord];
					}
				}
				i+=6;
			}
			mWord='';
		}
		else mWord+=string[i];
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