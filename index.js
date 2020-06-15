const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content === '!ping') {
		message.channel.send('Pong.');
	}
});

client.login('Njk0ODE4NjA3ODg4MzM0ODUw.XubL1w.XZwPa87h110p98SGZr0JQak3J98');