const { Player } = require('discord-player');
const { Client, GatewayIntentBits } = require('discord.js');

const prefix = '!'

global.client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.MessageContent
    ],
   disableMentions: 'everyone',
});

client.config = require('./config');

global.player = new Player(client, client.config.opt.discordPlayer);

require('./src/loader');
require('./src/events');

client.on('ready', () => {
    console.log('bot is ready');

});

client.login(client.config.app.token);