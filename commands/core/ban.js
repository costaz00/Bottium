const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

const data = new SlashCommandBuilder()
	.setName('ban')
	.setDescription('Select a member and ban them.')
	.addUserOption(option =>
		option
			.setName('target')
			.setDescription('The member to ban')
			.setRequired(true))
	.setDefaultMemberPermissions(PermissionFlagsBits.BanMembers);