module.exports = async (interaction) => {
  if (interaction.isStringSelectMenu()) {
    if (interaction.customId === "test_select_menu") {
      const selectedOption = interaction.values[0]; // Get the selected value

      await interaction.reply({
        content: `You selected: ${selectedOption}`,
        ephemeral: true,
      });
    }
  }
};
