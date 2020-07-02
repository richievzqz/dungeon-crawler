const Discord = require('discord.js');
module.exports = {
    name: 'help',
    description: 'Help page',
    execute(message, args) {
        const embed = new Discord.MessageEmbed(); 
        embed.setTitle('Help is here!');
        embed.setDescription('Here`s a list of available commands.');
        for (const command of message.client.commands.keys())
        {
            embed.addField(`${message.client.commands.get(command).name}`,
             `${message.client.commands.get(command).description}`);
        }
        message.author.send(embed);
        //message.channel.send(embed);
    }
};