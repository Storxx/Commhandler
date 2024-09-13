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

    const textInput = new TextInputBuilder()
      .setCustomId("test_input")
      .setLabel("Enter something:")
      .setStyle(TextInputStyle.Short);

    const row = new ActionRowBuilder().addComponents(textInput);

    const modal = new ModalBuilder()
      .setCustomId("test_modal")
      .setTitle("Test Modal")
      .addComponents(row);

    await interaction.showModal(modal);
  },
};
