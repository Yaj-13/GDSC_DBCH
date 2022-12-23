// get the packages
const { Events,Collection } = require('discord.js');
const {prefix} = require("../../config/config.json");
// start coding
module.exports = {
    // command name
    name: Events.MessageCreate,
    async execute(msg, client) {
        // check if the message is from a bot
        if (msg.author.bot) return;
     
    },
};