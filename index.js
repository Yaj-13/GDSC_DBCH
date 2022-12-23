// get your pakages
const {Client,Collection,GatewayIntentBits,Partials} = require('discord.js');
const config = require('./config/config.json');
const fs = require('fs');


// create a new client
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.MessageContent,

    ],
    partials: [
        Partials.Channel,
        Partials.Message,
        Partials.User,
        Partials.GuildMember,
        Partials.Reaction,
      ],
})

// create the readir for handlers

fs.readdirSync('./handlers').forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

// login the bot
client.login(config.token);

