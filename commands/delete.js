module.exports = {
    name: 'delete',
    description: 'Deletes last 10 messages',
    cooldown: '10',
    execute(message, args) {
        if (args[0] == 'pass' && !isNaN(args[1])) message.channel.bulkDelete(args[1], true).catch(err => {
            console.error(err);
        });
    },
}