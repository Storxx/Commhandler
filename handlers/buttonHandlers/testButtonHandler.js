module.exports = async (interaction) => {
  if (interaction.isButton()) {
    if (interaction.customId === "test_button") {
      await interaction.reply({ content: "Button clicked!", ephemeral: true });
    }
  }
};
