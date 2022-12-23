// get the packages
const { Events } = require('discord.js');
// start coding
module.exports = {
    // event name
    name: Events.ClientReady,
    once: true,
    execute(client) {
        console.log(`Ready! Logged in as ${client.user.tag}`);
    },
};