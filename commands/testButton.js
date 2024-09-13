const {
  SlashCommandBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("testbutton")
    .setDescription("Test a button interaction"),

  async execute(interaction) {
    
    const button = new ButtonBuilder()
      .setCustomId("test_button")
      .setLabel("Click Me!")
      .setStyle(ButtonStyle.Primary);

    const row = new ActionRowBuilder().addComponents(button);

    await interaction.reply({
      content: "Here is a button for you to test!",
      components: [row],
    });
  },
};
