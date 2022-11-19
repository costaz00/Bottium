const Command = require("../structures/Command.js");
const { Permissions } = require('discord.js');

module.exports = new Command({
    name: "unlock",
    description: "unlock the channel that the command is executed",

    async run(message, args, client) {
        if (message.author.bot) return;
        if (message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)){
            let role = message.guild.roles.cache(r => r.id === "895151537511362600");
            role.overwritePermissions(UserResolvable, {
    VIEW_CHANNEL: true,
    SEND_MESSAGES: true,
    READ_MESSAGE_HISTORY: true,
    ATTACH_FILES: true
});            
        } else message.reply(`why do you want to use a mod command when you're not a mod`)

    }
});