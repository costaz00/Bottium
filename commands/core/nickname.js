const discord = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return

    let user = message.mentions.users.first()
    if(!user) return message.reply("**Please mention a user to change his nickname!**")

    let nickname = args.slice(1).join(" ")
    if(!nickname) return message.reply("**Please specify a nickname!**")

    let member = message.guild.members.cache.get(user.id)
    await member.setNickname(nick); 

    const embed = new discord.MessageEmbed()
    .setTitle("✅Done!")
    .setDescription(`Succesfully changed ${user.tag}'s nickname to ${nickname}`)
    .setColor('RANDOM')
    .setTimestamp()
    message.channel.send(embed)
}

module.exports.help = {
    name: 'nick',
    aliases: ['nickname']
}