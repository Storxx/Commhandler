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

    const selectMenu = new StringSelectMenuBuilder()
      .setCustomId("test_select_menu")
      .setPlaceholder("Select an option")
      .addOptions(options);

    const row = new ActionRowBuilder().addComponents(selectMenu);

    await interaction.reply({
      content: "Here is a select menu for you to test!",
      components: [row],
    });
  },
};
