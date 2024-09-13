const {
  ActionRowBuilder,
  SlashCommandBuilder,
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("testselectmenu")
    .setDescription("Test a select menu interaction"),

  async execute(interaction) {
    // Create select menu options
    const options = [
      new StringSelectMenuOptionBuilder()
        .setLabel("Option 1")
        .setValue("option_1"),
      new StringSelectMenuOptionBuilder()
        .setLabel("Option 2")
        .setValue("option_2"),
      new StringSelectMenuOptionBuilder()
        .setLabel("Option 3")
        .setValue("option_3"),
    ];

    // Create the select menu
    const selectMenu = new StringSelectMenuBuilder()
      .setCustomId("test_select_menu") // Unique ID for the select menu
      .setPlaceholder("Select an option")
      .addOptions(options);

    // Create an action row to hold the select menu
    const row = new ActionRowBuilder().addComponents(selectMenu);

    // Send the reply with the select menu
    await interaction.reply({
      content: "Here is a select menu for you to test!",
      components: [row],
    });
  },
};
