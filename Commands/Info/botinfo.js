/**
* READ THIS BEFORE YOU CHANGE THE CONTENT OF THIS COMMAND!
* You are not allowed to change lines about this repo in this command.
* You can change bot name and owner name, but not the source of this bot.
* You are also not allowed to remove the credits from the footer to the orginal owner from this bot.
* If you want to change the description, you will have to add the line that: "[YOUR BOT NAME] is an modified instance of Reaper-2.0 bot made by Simpleboy353.
* These points are not optional, but remarks from the dev team of Reaper-2.0.
*/

const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
module.exports = {
  name: "botinfo",
  description: "Informasi Tentang Kobi",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    const duration = moment
      .duration(client.uptime)
      .format(" D [days], H [hrs], m [mins], s [secs]");

    let embed = new Discord.MessageEmbed()
      .setAuthor("KOBI DISCORD INDONESIA", client.user.avatarURL())
      .setColor("RANDOM")
      .setDescription(
        `**Nama Bot: **Kobi \n**Owner: **[Armitage#4935] \n**Total Kategori: **8 \n**Total Commands: **${client.commands.size} \n**User:** ${
          client.users.cache.size
        } \n**Servers:** ${client.guilds.cache.size} \n**Channels:** ${
          client.channels.cache.size
        }`
      )
      .addField(
        "Tentang KOBI",
        "Kobi adalah bot discord indonesia yang menyediakan berbagai feature"
      )
      .addField(
        "Fitur Kobi",
        "*Game, Fun, MOD, NSFW, IMAGE, Info, Aktifitas, ultilitas*"
      )
      .setFooter("Salam Manis, Kobi Development Team");
    message.channel.send({ embeds: [embed] });
  },
};
