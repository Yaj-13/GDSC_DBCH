// get the packages
const ascii = require('ascii-table');
const table = new ascii('Events').setJustify();
const fs = require('fs');
const { REST, Routes, ApplicationCommandType, Collection, Events } = require('discord.js');
const config = require('../config/config.json');
const rest = new REST({ version: '10' }).setToken(config.token);
//code here
module.exports = (client) => {
// an array for the commands
    const commands = [];
    // a collection for the commands from the package
    client.commands = new Collection();
// read the folders and files
    fs.readdirSync('./slashCommands').forEach(folder => {
        const commandFiles = fs.readdirSync(`./slashCommands/${folder}`).filter(file => file.endsWith('.js'));
        for (const file of commandFiles) {
            const command = require(`../slashCommands/${folder}/${file}`);
            // check if there is an commands in first method
            if (command.name && command.description) {
                commands.push({
                    type: ApplicationCommandType.ChatInput,
                    name: command.name,
                    description: command.description,
                    options: command.options || []
                });
                client.commands.set(command.name, command);
                table.addRow(`/${command.name}`, '🟢 Working');
            } // check if there is an commands in second method
            else if (command.data?.name && command.data?.description) {
                commands.push(command.data.toJSON());
                client.commands.set(command.data.name, command);
                table.addRow(`/${command.data.name}`, '🟢 Working');
            } else {
                table.addRow(file, '🔴 Not working');
            }
        }
    });
    // print the table to see what is working
    console.log(table.toString());
// register the commands to the bot
    client.once(Events.ClientReady, async c => {
        try {
            console.log(`Started refreshing ${commands.length} application (/) commands.`);
            const data = await rest.put(
                Routes.applicationCommands(config.botID),
                { body: commands }
            );
            console.log(`Successfully reloaded ${data.length} application (/) commands.`);
        } catch (error) {
            console.error(error);
        }
    });

};