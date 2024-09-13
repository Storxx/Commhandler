module.exports = async (interaction) => {
  if (interaction.isModalSubmit()) {
    if (interaction.customId === "test_modal") {
      const userInput = interaction.fields.getTextInputValue("test_input");

      await interaction.reply({
        content: `You submitted: ${userInput}`,
        ephemeral: true,
      });
    }
  }
};
