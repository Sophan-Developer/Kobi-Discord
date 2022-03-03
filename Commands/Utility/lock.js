const Discord = module.require("discord.js");

module.exports = {
  name: "lock",
  description: "Kunci Channel",
  userPerms: ["MANAGE_CHANNELS"],
  botPerms: ["EMBED_LINKS", "MANAGE_CHANNELS"],
  run: async (client, message, args) => {
    
    message.channel.overwritePermissions([
      {
        id: message.guild.id,
        deny: ["SEND_MESSAGES"],
      },
    ]);
    const embed = new Discord.MessageEmbed()
      .setTitle("Channel Updates")
      .setDescription(`🔒 ${message.channel} udah di kunci`)
      .setColor("RANDOM");
    await message.channel.send({ embeds: [embed] });
    message.delete();
  },
};
