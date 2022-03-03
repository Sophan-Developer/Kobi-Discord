const Discord = require("discord.js");

module.exports = {
  name: "invite",
  description: "dapatkan kobi ke server mu",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    let embed = new Discord.MessageEmbed()
      .setTitle("Invite Me")
      .setColor("RANDOM")
      .setDescription(
        "**Dapatkan Link Invite Kobi [Disin](https://discord.com/oauth2/authorize?client_id=944857704139227137&permissions=1584921983&scope=bot)*"
      )
      .setFooter(`Requested By: ${message.author.username}`);
    message.channel.send({ embeds: [embed] });
  },
};
