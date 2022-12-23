const { ChatInputCommandInteraction, Client } = require("discord.js");

module.exports = {
    name: 'newtest',
    description: 'Replies with Test!',
    options: [],
    /**
     * @param {ChatInputCommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {
        await interaction.reply('Test!');
    },
};