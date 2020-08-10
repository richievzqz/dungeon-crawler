// This is Node's native file system module.
const fs = require('fs');

const Discord = require('discord.js');
const { prefix, token } = require ('./config.json');
// const { timeStamp } = require('console');

const client = new Discord.Client();

// Collections
client.commands = new Discord.Collection();
const cooldowns = new Discord.Collection();
// fs is nodes native filing system
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}
/*
	Primary message Handler
*/
client.on('message', async message => {
	if(!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();

	if(!client.commands.has(commandName)) return;

	// find the command from collection
	const command = client.commands.get(commandName);

	/*
	Check for cooldowns and set them 
	*/
	// if command is not in cooldowns, add it
	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}
	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;
	// check whether or now user has used command yet
	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) berfore reusing
			the \`${command.name}\` command.`);
		}
	}
	// If user hasn't used command, enter him into collections and then 
	// set function to delete him after cooldown has eneded
	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

	// try to execute the command along with its arguments
	// arguments are split up into an String[]
	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('There was an error trying to execute that command');
	}

});

client.login(token);
