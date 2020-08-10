/* eslint-disable no-unused-vars */
/* eslint-disable indent */
module.exports = {
    name: 'react',
    description: 'Reacts to the command',
    cooldown: 5,
    async execute(message, args) {
        // react is asynchronous meaning reacts don't always happen in order
        //  if they are exectued one after another
       try {
            await message.react('😄');
            await message.react('🍏');
            await message.react('🍌');
        } catch (error) {
            console.error('One of the emojis failed to react');
        }
    },
};