module.exports = {
    name: 'who',
    description: 'Find out who`s your daddy',
    execute(message, args) {
        message.channel.send('I`m your daddy.')
    }
};