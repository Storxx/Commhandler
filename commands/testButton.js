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
    // Create a button
    const button = new ButtonBuilder()
      .setCustomId("test_button") // Unique ID for the button
      .setLabel("Click Me!")
      .setStyle(ButtonStyle.Primary);

    // Create an action row to hold the button
    const row = new ActionRowBuilder().addComponents(button);

    // Send the reply with the button
    await interaction.reply({
      content: "Here is a button for you to test!",
      components: [row],
    });
  },
};
