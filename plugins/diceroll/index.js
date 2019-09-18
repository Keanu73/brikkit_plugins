global.Brikkit.on('chat', evt => {
	const content = evt.getContent();
	const sender = evt.getSender().getUsername();
	if (content.includes('!roll') & /\d/.test(content) == true) {
		let numbers = [1, 6];
		let sides = 6;
		let dice = numbers[0];
		numbers = content.match(/\d+/g).map(Number);
		sides = numbers[1];
		let result = 0;

		if (dice > 100) dice = 100;

		if (sides > 1000) sides = 1000;

		if (isNaN(sides)) sides = 6;

		if (dice === 0) dice = 1;

		for (let i = 0; i < dice; i++) {
			let roll = Math.floor(Math.random() * sides) + 1;
			if (roll > sides) roll = sides;
			result += roll;
		}

		global.Brikkit.say(`${sender} rolled ${dice} d ${sides} to get ${result}`);
	}
});