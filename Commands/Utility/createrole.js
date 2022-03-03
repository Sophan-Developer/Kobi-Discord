const Discord = require("discord.js");
const toHex = require("colornames");

module.exports = {
  name: "createrole",
  description: "Buat role di guild",
  userPerms: ["MANAGE_ROLES"],
  botPerms: ["EMBED_LINKS", "MANAGE_ROLES"],
  run: async (client, message, args) => {
    const name = args.slice(1).join(" ");
    const regex = !/[^a-zA-Z0-9]+/g.test(name);

    if (!args[0]) {
      return message.channel.send("`Usage: k!createrole <colorname> <Name>`");
    }
    if (!name) {
      return message.channel.send("Anda perlu menentukan nama untuk role");
    }
    if (regex === false) {
      return message.channel.send(
        "Itu bukan nama role yang valid. Hanya boleh berisi huruf dan angka"
      );
    }
    if (name.length > 100) {
      return message.channel.send(
        "role kamu tidak boleh lebih dari 100 karakter"
      );
    }
    message.guild.roles.create({
      data: {
        name: name,
        color: toHex(args[0]),
      },
    });
    let embed = new Discord.MessageEmbed()
      .setAuthor(
        `${message.author.username} - (${message.author.id})`,
        message.author.displayAvatarURL()
      )
      .setColor("RANDOM").setDescription(`
**Role: ** ${name}
**Action: ** New Role Created
**Role Color: ** ${args[0]}
**Channel: ** ${message.channel}
**By: ** ${message.member}
      `);
    message.channel.send({ embeds: [embed] });
  },
};
