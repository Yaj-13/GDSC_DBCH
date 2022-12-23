// get the packages
const ascii = require('ascii-table');
const table = new ascii('Events').setJustify();
const fs = require('fs');
//code here
module.exports = (client) => {
    
    // read the folders and files
    fs.readdirSync('./events').forEach(folder => {
        const eventFiles = fs.readdirSync(`./events/${folder}`).filter(file => file.endsWith('.js'));
        for (const file of eventFiles) {
            const event = require(`../events/${folder}/${file}`);

            // check if there is an event 
            if (event.name) {
                // check the type of event
                if (event.once) {
                    client.once(event.name, (...args) => event.execute(...args, client));
                } else {
                    client.on(event.name, (...args) => event.execute(...args, client));
                }
                table.addRow(event.name, '🟢 Working');
            } else {
                table.addRow(file, '🔴 Not working');
            }
        }
    });
    // print the table to see what is working
    console.log(table.toString());
};