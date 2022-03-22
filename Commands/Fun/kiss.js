const Discord = module.require("discord.js");

module.exports = {
  name: "kiss",
  description: "Cium seseorang",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    var member = message.mentions.members.first();
    var images = [
      "https://media.giphy.com/media/11k3oaUjSlFR4I/giphy.gif",
      "https://media.giphy.com/media/11k3oaUjSlFR4I/giphy.gif",
      "https://media.giphy.com/media/11k3oaUjSlFR4I/giphy.giff",
      "https://media.giphy.com/media/11k3oaUjSlFR4I/giphy.gif",
    ];
    var image = Math.floor(Math.random() * images.length);
    if (!member) return message.channel.send("kamu perlu mention seseorang");
    let kissEmbed = new Discord.MessageEmbed()
      .setTitle(
        `${message.author.username} kamu ga bisa cium diri sendiri, apa mau ku cium?`
      )
      .setImage(String([images[image]]))
      .setColor(0xf000ff);
    if (member.id === message.author.id) return message.channel.send(kissEmbed);
    let HugEmbed2 = new Discord.MessageEmbed()
      .setTitle(
        `${message.author.username} Cium ${member.user.username}, manisnya ciumanmu`
      )
      .setImage(String([images[image]]))
      .setColor(0xf000ff);
    return message.channel.send({ embeds: [HugEmbed2] });
  },
};
