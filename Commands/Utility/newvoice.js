const Discord = module.require("discord.js");

module.exports = {
  name: "newvoice",
  description: "buat Voice Channels di Server mu",
  userPerms: ["MANAGE_CHANNELS"],
  botPerms: ["EMBED_LINKS", "MANAGE_CHANNELS"],
  run: async (client, message, args) => {
    if (!args[0]) {
      return message.channel.send("Kamu perlu sebutkan nama Channelnya");
    }
    message.guild.channels.create(args.slice(0).join(" "), { type: "voice" });

    const embed = new Discord.MessageEmbed()
      .setTitle("Channel Updates")
      .setDescription(`Channel udah di buat`)
      .setColor("RANDOM");
    message.channel.send({ embeds: [embed] });
  },
};
