const Discord = require("discord.js");
const { parse } = require("twemoji-parser");
const { MessageEmbed } = require("discord.js");
const Color = `#ffffff`;

module.exports = {
  name: "enlargemoji",
  category: "fun",
  description: "Converting Server emoji ke PNG/GIF!",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    const authoravatar = message.author.avatarURL();
    const emoji = args[0];
    if (!emoji) return message.channel.send(`Kamu pelu beri aku Emoji!`);

    let customemoji = Discord.Util.parseEmoji(emoji);

    if (customemoji.id) {
      const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${
        customemoji.animated ? "gif" : "png"
      }`;

      const Added = new MessageEmbed()
        .setAuthor(`Enlarged Emoji`, authoravatar)
        .setColor(`${Color}`)
        .setDescription(`\`${customemoji.name}\` \`${customemoji.id}\``)
        .setImage(Link);
      return message.channel.send({ embeds: [Added] });
    } else {
      let CheckEmoji = parse(emoji, { assetType: "png" });
      if (!CheckEmoji[0])
        return message.channel.send(`beri saya Emoji valid!`);
      message.channel.send(
        `Kamu Dapat Menggunakan Emoji Normal Tanpa Menambahkan Di Server!`
      );
    }
  },
};
