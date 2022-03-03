const Discord = module.require("discord.js");
const giphy = require("giphy-api")("W8g6R14C0hpH6ZMon9HV9FTqKs4o4rCk");

module.exports = {
  name: "gif",
  description: "Mendapatkan gif berdasarkan pencarian mu",
  botPerms: ["EMBED_LINKS", "MANAGE_MESSAGES"],
  run: async (client, message, args) => {
    if (args.length === 0) {
      message.channel.send("Ga ada yg dapat di cari!");
      return;
    }
    if (args.length === 1) {
      term = args.toString();
    } else {
      term = args.join(" ");
    }
    giphy.search(term).then(function (res) {
      // Res contains gif data!
      let id = res.data[0].id;
      let msgurl = `https://media.giphy.com/media/${id}/giphy.gif`;

      const embed = new Discord.MessageEmbed()
        .setTitle(`Hasil pencarian mu \`${term}\` di GIPHY`)
        .setImage(msgurl)
        .setFooter(
          `Powered by GIPHY`,
          `https://raw.githubusercontent.com/Giphy/GiphyAPI/f68a8f1663f29dd9e8e4ea728421eb2977e42d83/api_giphy_logo_sparkle_clear.gif`
        )
        .setColor("RANDOM");
      message.channel.send({ embeds: [embed] });
    });

    message.delete();
  },
};
