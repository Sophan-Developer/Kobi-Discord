const discord = require("discord.js");
const got = require("got"); //MAKE SURE TO INSTALL THE PACKAGE "GOT" ELSE THE CODE WOULD NOT WORK

module.exports = {
  name: "milf",
  category: "NSFW",
  description: "Sends milf pics",
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
      got("https://www.reddit.com/r/milf/random.json")
        .then((response) => {
          let content = JSON.parse(response.body);
          var title = content[0].data.children[0].data.title;
          var amazeme = content[0].data.children[0].data.url;
          let wow = new discord.MessageEmbed()
            .setDescription(`**` + title + `**`)
            .setImage(amazeme)
            .setFooter(`Umphh.. susu ibu2 emang nikmat yah`)
            .setColor("RANDOM");
          message.channel.send({ embeds: [wow] });
        })
        .catch(console.error);
    } catch (err) {
      const errorlogs = client.channels.cache.get("944627274873995314");

      message.channel.send(
        `Whoops, We got a error right now! This error has been reported to Support center!`
      );

      errorlogs.send(
        `Error in ${message.guild.name}  by ${message.author.username} on  milf commands!\n\nError:\n\n ${err}`
      );
    }
  },
};
