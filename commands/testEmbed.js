const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("testembed")
    .setDescription("Replies with a simple embed message."),
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setColor("Red")
      .setTitle("Test Embed")
      .setDescription("This is a simple embed message!")
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  },
};
