const {
  SlashCommandBuilder,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
  ActionRowBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("testmodal")
    .setDescription("Test a modal interaction"),

  async execute(interaction) {
    // Create a text input component
    const textInput = new TextInputBuilder()
      .setCustomId("test_input") // Unique ID for the text input
      .setLabel("Enter something:")
      .setStyle(TextInputStyle.Short); // Short or Paragraph

    // Create an action row to hold the text input
    const row = new ActionRowBuilder().addComponents(textInput);

    // Create a modal
    const modal = new ModalBuilder()
      .setCustomId("test_modal") // Unique ID for the modal
      .setTitle("Test Modal")
      .addComponents(row);

    // Show the modal to the user
    await interaction.showModal(modal);
  },
};
