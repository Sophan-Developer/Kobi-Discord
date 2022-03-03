const Discord = require("discord.js");

module.exports = {
  name: "announce",
  description: "Buat pesan siaran di servermu",
  userPerms: ["MANAGE_MESSAGES"],
  botPerms: ["EMBED_LINKS", "MANAGE_MESSAGES"],
  run: async (client, message, args) => {
    const anchannel = message.mentions.channels.first();
    if (!anchannel) {
      return message.channel.send("`Usage: k!announce <channel> <msg>`");
    }
    if (!args.slice(1).join(" ")) {
      return message.channel.send(
        "Kamu perlu memasukkan text untuk membuat siaran"
      );
    }

    let embed = new Discord.MessageEmbed()
      .setTitle(`<:ann:748176925792665721> Pengumuman Server Baru`)
      .setDescription(args.slice(1).join(" "), {
        allowedMentions: { parse: ["users"] },
      })
      .setColor("RANDOM")
      .setFooter(`Pengumuman dari ${message.author.username}`);
    anchannel.send({ embeds: [embed] });

    let anembed = new Discord.MessageEmbed()
      .setTitle("Done!")
      .setDescription(`pengumuman udah di kirim ke ${anchannel}`)
      .setColor("RANDOM");

    message.channel.send({ embeds: [anembed] });
    message.delete();
  },
};
