// get the packages
const { Events } = require('discord.js');
// start coding
module.exports = {
    // command name
    name: Events.InteractionCreate,
    async execute(interaction, client) {
        // check if the interaction is a command
        if (!interaction.isChatInputCommand()) return;
        // get the command
        const command = interaction.client.commands.get(interaction.commandName);
        // check if the command is not found
        if (!command) return interaction.reply({ content: `No command matching ${interaction.commandName} was found.`, ephemeral: true });
        // execute the command
        try {
            await command.execute(interaction, client);
        } catch (error) {
            interaction.reply({ content: `Error executing ${interaction.commandName}`, ephemeral: true });
            console.error(error);
        }
    },
};