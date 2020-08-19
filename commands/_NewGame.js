module.exports = {
    name: 'newgame',    
    description: 'Start a new game.',
    execute(message, args) {
        console.log("New Game created");
        return true;
    }
}