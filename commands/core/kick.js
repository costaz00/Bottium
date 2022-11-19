const discord = require('discord.js')

const {
    MessageEmbed
} = require('discord.js');

module.exports.run = async (client, message, args) => {
    if (!message.member.permissions.has("KICK_MEMBERS")) return message.channel.send("You don't have permission to kick people");
    if (!message.guild.me.permissions.has("KICK_MEMBERS")) return message.channel.send("I don't have permission to kick people.");

    if (!args[0]) return message.channel.send("Specify a member.");

    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);

    // Just add the below line

    if (!member) return message.channel.send("That was not a member.")

    // If member doesn't return a member, then it will kill it


    if (member.id == client.user.id) {
        return message.channel.send("I can't kick myself.")
    }

    if (message.member.roles.highest.comparePositionTo(message.mentions.members.first().roles.highest) < 1) {
        return message.channel.send("I have lower role.");
    }

    if (message.member.id === member.id) return message.channel.send("I can't kick you.");

    if (message.mentions.roles) {
        return;
    }

    var args2 = args.slice(1).join(" ");
    if (!args2) {
        var args2 = "No reason provided.";
    }
    await member.kick({
        reason: `${args2}`
    })
    const embed = new MessageEmbed()
        .setTitle("Member Kicked")
        .setDescription(`> ${member} just got kicked.`)
        .setColor('#00ff00')
        .setFooter(`Requested by ${message.author.username}`)
        .setTimestamp();

    message.channel.send({
        embeds: [embed]
    })
}


module.exports.config = {
    name: "kick",
    aliases: []
}
