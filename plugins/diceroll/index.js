var result;
var dice;
var sides = 6;
var i;
var total;
var content;
var numbers = [1,6];
var roll;
var sender;
global.Brikkit.on('chat', evt => {
		content = evt.getContent();
		sender = evt.getSender().getUsername();
		if(content.includes('!diceroll') & /\d/.test(content) == true) {
			numbers = content.match(/\d+/g).map(Number);
			result = 0;
			dice = numbers[0];
			sides = numbers[1];
			if(dice > 100) {
				dice = 100;
			}
			if(sides > 1000) {
				sides = 1000;
			}
			if(isNaN(sides) == true) {
				sides = 6
			}
			if(dice == 0) {
				dice = 1
			}
			for (i = 0; i < dice;i++) {
				roll = Math.floor(Math.random() * sides) + 1;
				if(roll > sides) {
					roll = sides
				}
				result += roll;
			}
			global.Brikkit.say(sender+' rolled '+dice+' d '+sides+' to get '+result);
	}	
	
});