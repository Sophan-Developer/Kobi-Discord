const discord = require("discord.js");
const got = require("got"); //MAKE SURE TO INSTALL THE PACKAGE "GOT" ELSE THE CODE WOULD NOT WORK

module.exports = {
  name: "pussy",
  category: "NSFW",
  description: "Kirim Gambar pussy",
  usage: "[command]",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    try {
      //command
      var errMessage = "Ini bukan channel NSFW. Pascol Pindah dulu";
      if (!message.channel.nsfw) {
        message.react("💢");

        return message.reply(errMessage).then((msg) => {
          setTimeout(() => msg.delete(), 3000);
        });
      }
      got("https://www.reddit.com/r/pussy/random.json")
        .then((response) => {
          let content = JSON.parse(response.body);
          var title = content[0].data.children[0].data.title;
          var amazeme = content[0].data.children[0].data.url;
          let wow = new discord.MessageEmbed()
            .setDescription(`**` + title + `**`)
            .setImage(amazeme)
            .setFooter(`Gambar memek kucing mau?`)
            .setColor("RANDOM");
          message.channel.send({ embeds: [wow] });
        })
        .catch(console.error);
    } catch (err) {
      const errorlogs = client.channels.cache.get("944627274873995314");

      message.channel.send(
        `Asu tenan, Kita mendapat kesalahan sekarang! Kesalahan ini telah dilaporkan ke pusat dukungan!`
      );

      errorlogs.send(
        `Error in ${message.guild.name}  by ${message.author.username} on  pussy commands!\n\nError:\n\n ${err}`
      );
    }
  },
};
