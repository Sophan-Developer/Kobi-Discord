const Discord = module.require("discord.js");

module.exports = {
  name: "newtext",
  description: "Buat channel teks di Server Anda",
  userPerms: ["MANAGE_CHANNELS"],
  botPerms: ["EMBED_LINKS", "MANAGE_CHANNELS"],
  run: async (client, message, args) => {
    if (!args[0]) {
      return message.channel.send("Tolong sebutkan nama Channelnya");
    }
    message.guild.channels.create(args.slice(0).join(" "), { type: "text" });

    const embed = new Discord.MessageEmbed()
      .setTitle("Channel Updates")
      .setDescription(`Channel udah di buat`)
      .setColor("RANDOM");
    message.channel.send({ embeds: [embed] });
  },
};
