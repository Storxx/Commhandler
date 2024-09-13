const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("test")
    .setDescription("Replies with a simple test message."),
  async execute(interaction) {
    await interaction.reply("This is a test command!");
  },
};
