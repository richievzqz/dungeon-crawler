module.exports = {
    name: 'why',
    description: 'Ask me any question!',
    execute(message, args) {
        if(!args[0] == 'you') {
            console.log('true');
            return;
        }
        message.channel.send('Because nobody loves him')
    },
};