const { ActivityType } = require("discord.js");

module.exports = {
  name: "ready",
  once: true,
  async execute(client) {
    console.log(`${client.user.tag} is online.`);

    try {
      await client.user.setActivity({
        name: "famq.gg",
        type: ActivityType.Listening,
      });
      // console.log('Status set successfully!');
    } catch (error) {
      console.error("Error setting status:", error);
    }
  },
};
