//ITU standard http://www.itu.int/rec/R-REC-M.1677-1-200910-I/
var TABLE_OF_SYMBOLS = {
	" ": "     ",
	//Figures
	"0": "-----",
	"1": ".----",
	"2": "..---",
	"3": "...--",
	"4": "....-",
	"5": ".....",
	"6": "-....",
	"7": "--...",
	"8": "---..",
	"9": "----.",
	//ENG Letters
	"a": ".-",
	"b": "-...",
	"c": "-.-.",
	"d": "-..",
	"e": ".",
	"f": "..-.",
	"g": "--.",
	"h": "....",
	"i": "..",
	"j": ".---",
	"k": "-.-",
	"l": ".-..",
	"m": "--",
	"n": "-.",
	"o": "---",
	"p": ".--.",
	"q": "--.-",
	"r": ".-.",
	"s": "...",
	"t": "-",
	"u": "..-",
	"v": "...-",
	"w": ".--",
	"x": "-..-",
	"y": "-.--",
	"z": "--..",
	//RUS Letters
	"а": ".-",
	"б": "-...",
	"в": ".--",
	"г": "--.",
	"д": "-..",
	"е": ".",
	"ё": ".",
	"ж": "...-",
	"з": "--..",
	"и": "..",
	"й": ".---",
	"к": "-.-",
	"л": ".-..",
	"м": "--",
	"н": "-.",
	"о": "---",
	"п": ".--.",
	"р": ".-.",
	"с": "...",
	"т": "-",
	"у": "..-",
	"ф": "..-.",
	"х": "....",
	"ц": "-.-.",
	"ч": "---.",
	"ш": "----",
	"щ": "--.-",
	"ъ": "--.--",
	"ы": "-.--",
	"ь": "-..-",
	"э": "..-..",
	"ю": "..--",
	"я": ".-.-",
	//Punctuation marks and miscellaneous signs 
	".": ".-.-.-",
	",": "--.--",
	":": "---.",
	"?": "..--..",
	"'": ".----.",
	"-": "-....-",
	"/": "-..-.",
	"(": "-.--.",
	")": "-.--.-",
	"\"": ".-..-.",
	"+": ".-.-.",
	"*": "-..-",
	"@": ".--.-.",	
	"!": "-.-.--",
	"&": ".-...",
	"=": "-...-"
}

var TABLE_OF_MCODES = {
	" ": " ",
	"       ": " ",
	"/": " ",
	//Figures
	"-----": "0",
	".----": "1",
	"..---": "2",
	"...--": "3",
	"....-": "4",
	".....": "5",
	"-....": "6",
	"--...": "7",
	"---..": "8",
	"----.": "9",
	//ENG Letters
	".-": "a",
	"-...": "b",
	"-.-.": "c",
	"-..": "d",
	".": "e",
	"..-.": "f",
	"--.": "g",
	"....": "h",
	"..": "i",
	".---": "j",
	"-.-": "k",
	".-..": "l",
	"--": "m",
	"-.": "n",
	"---": "o",
	".--.": "p",
	"--.-": "q",
	".-.": "r",
	"...": "s",
	"-": "t",
	"..-": "u",
	"...-": "v",
	".--": "w",
	"-..-": "x",
	"-.--": "y",
	"--..": "z",
	//Punctuation marks and miscellaneous signs 
	".-.-.-": ".",
	"--.--": ",",
	"---.": ":",
	"..--..": "?",
	".----.": "'",
	"-....-": "-",
	"-..-.": "/",
	"-.--.": "(",
	"-.--.-": ")",
	".-..-.": "\"",
	".-.-.": "+",
	"-..-": "*",
	".--.-.": "@",
	"-.-.--": "!",
	".-...": "&",
	"-...-": "="
}

var TABLE_OF_MCODES_RUS = {
	" ": " ",
	"       ": " ",
	"/": " ",
	//Figures
	"-----": "0",
	".----": "1",
	"..---": "2",
	"...--": "3",
	"....-": "4",
	".....": "5",
	"-....": "6",
	"--...": "7",
	"---..": "8",
	"----.": "9",
	//RUS Letters
	".-" : "а",
	"-..." : "б",
	".--" : "в",
	"--." : "г",
	"-.." : "д",
	"." : "е",
	"...-" : "ж",
	"--.." : "з",
	".." : "и",
	".---" : "й",
	"-.-" : "к",
	".-.." : "л",
	"--" : "м",
	"-." : "н",
	"---" : "о",
	".--." : "п",
	".-." : "р",
	"..." : "с",
	"-" : "т",
	"..-" : "у",
	"..-." : "ф",
	"...." : "х",
	"-.-." : "ц",
	"---." : "ч",
	"----" : "ш",
	"--.-" : "щ",
	"--.--" : "ъ",
	"-.--" : "ы",
	"-..-" : "ь",
	"..-.." : "э",
	"..--" : "ю",
	".-.-" : "я",
	//Punctuation marks and miscellaneous signs 
	".-.-.-": ".",
	"--.--": ",",
	"---.": ":",
	"..--..": "?",
	".----.": "'",
	"-....-": "-",
	"-..-.": "/",
	"-.--.": "(",
	"-.--.-": ")",
	".-..-.": "\"",
	".-.-.": "+",
	"-..-": "*",
	".--.-.": "@",
	"-.-.--": "!",
	".-...": "&",
	"-...-": "="
}