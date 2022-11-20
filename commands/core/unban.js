const { SlashCommandBuilder } = require("@discordjs/builders")
const { Permissions,MessageEmbed  } = require('discord.js');
const command = new SlashCommandBuilder()
    .setName("unban")
    .setDescription("Unbans a specified discord id")
    .addStringOption(option =>
        option
            .setName("user")
            .setDescription("The user to be unbanned")
            .setRequired(true))

module.exports = {
    data: command,
    execute: async (client, interaction) => {
        const user = interaction.options.getString("user")
      const embed_unex_error = new MessageEmbed()
                                        .setTitle("There has been an error")
                                        .setDescription(`Warning there has been an unexcpeted error while executing the command`)
                                        .setColor('#b03350')
                                        .setTimestamp()
      const embed_permission_error = new MessageEmbed()
                                        .setTitle("You dont have perimissions to execute that command")
                                        .setDescription(`Please check your role permissions`)
                                        .setColor('#b03350')
                                        .setTimestamp()
        if(!interaction.guild) return interaction.reply({ embeds: [embed_unex_error] })
        const member = await interaction.guild.members.fetch(interaction.user.id)
        if(!member.permissions.has([Permissions.FLAGS.BAN_MEMBERS])) return interaction.reply({ embeds: [embed_permission_error] })
        const user_fetched = await client.fetchUser()
      const embed_success = new MessageEmbed()
                                        .setTitle("Success!")
                                        .setDescription(`${user_fetched.username} has successfully been unbanned`)
                                        .setColor('#82db5c')
                                        .setTimestamp()
        await interaction.guild.members.unban(user)
          .then(interaction.reply({ embeds: [embed_success] }))
          .catch(() => interaction.reply({ embeds: [embed_unex_error] }))
    }
}