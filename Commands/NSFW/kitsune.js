const Discord = module.require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();


module.exports = {
  name: "kitsune",
  description: "Kirim Gambar kitsune.",
  run: async (client, message, args) => {
    var errMessage = "Ini bukan channel NSFW. Pascol Pindah dulu";
    if (!message.channel.nsfw) {
      message.react("💢");

      return message.reply(errMessage).then((msg) => {
        setTimeout(() => msg.delete(), 3000);
      });
    }

    const image = await nsfw.kitsune();
    const embed = new Discord.MessageEmbed()
    .setTitle(`Kitsune`)
    .setColor("GREEN")
    .setImage(image);
    message.channel.send({ embeds: [embed] });
  },
};
