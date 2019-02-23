var freq = 550;
var speed = 0.07;
function playString (string) {
	var context = new (window.AudioContext || window.webkitAudioContext());
	var oscillator = context.createOscillator();
	var gain = context.createGain();
	
	oscillator.frequency.value = freq;
	oscillator.type = 'sine';
	oscillator.connect(gain);
	
	gain.connect(context.destination);

	var binCode = [];
	for (var i = 0; i < string.length; i++) {
		if(string[i]==='.'){
			binCode.push(1);
			if(i!=string.length-1){
				binCode.push(0);
			}
		}
		else if(string[i]==='-'){
			binCode.push(1);
			binCode.push(1);
			if(i!=string.length-1){
				binCode.push(0);
			}
		}
		else{
			binCode.push(0);
		}
	}
	binCode.push(0);

	oscillator.start(0);
	now = context.currentTime;
	for (var i = 0; i < binCode.length; i++) {
		gain.gain.setValueAtTime(binCode[i], now+(i*speed));
	}
}