const discord = module.require("discord.js");

module.exports = {
  name: "ban",
  category: "moderation",
  description: "Banned siapa pun dengan satu tembakan tanpa mengetahui siapa pun xD",
  usage: "ban <@user> <alasan>",
  userPerms: ["BAN_MEMBERS"],
  botPerms: ["EMBED_LINKS", "BAN_MEMBERS"],
  run: async (client, message, args) => {
    let reason = args.slice(1).join(" ");
    if (!reason) reason = "Unspecified";

    const target = message.mentions.members.first() || message.guild.users.cache.get(args[0]);

    if (!target) {
      return message.channel.send(
        `**${message.author.username}**, Harap sebutkan orang yang ingin kamu banned coy.`
      );
    }

    if (target.id === message.author.id) {
      return message.channel.send(
        `**${message.author.username}**, Kamu ga bisa banned diri sendiri!`
      );
    }
    if (target.id === message.guild.ownerId) {
      return message.channel.send("Kamu ga bisa banned pemilik server");
    }

    let embed = new discord.MessageEmbed()
      .setTitle("Action : Ban")
      .setDescription(`Banned ${target} (${target.id})\nReason: ${reason}`)
      .setColor("#ff2050")
      .setThumbnail(target.avatarURL)
      .setFooter(`Banned by ${message.author.tag}`);

    await message.guild.bans.create(target, {
      reason: reason
    }).then(() => {
        message.channel.send({ embeds: [embed] });
      });
  },
};
