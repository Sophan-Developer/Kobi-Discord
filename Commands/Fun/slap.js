const Discord = module.require("discord.js");

module.exports = {
  name: "slap",
  description: "Tampar seseorang",
  run: async (client, message, args) => {
    let member = message.mentions.members.first();
    if (!member) {
      return message.reply("Kamu perlu mention seseorang");
    }
  const embed = new Discord.MessageEmbed()
    .setTitle(message.author.name + " slapped :raised_back_of_hand: " +
          member.displayName +
          ", " +
          member.displayName +
          " Mampuss masuk rumahsakit!!! :hospital:")
      .setColor("RANDOM");
    await message.reply({ embeds: [embed] });
  },
};
