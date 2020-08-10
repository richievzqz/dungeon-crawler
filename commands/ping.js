/* eslint-disable no-unused-vars */
module.exports = {
	name: 'ping',
	description: 'Ping!',
	cooldown: 5,
	execute(message, args) {
		message.channel.send('Pong.');
		const filter = m => m.author.id === message.author.id;
		const collector = message.channel.createMessageCollector(filter, {time: 15000});

		collector.on('collect', m => {
			console.log(`Collected ${m.content}`);
		});

		collector.on('end', collected => {
			const arr = collected.array()
			let str = ``;
			for (const msg of arr) {
				str += `${msg} `;
			}
			message.channel.send(str);
		});
	},
};