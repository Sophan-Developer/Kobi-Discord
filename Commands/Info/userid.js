const Discord = module.require("discord.js");

module.exports = {
  name: "userid",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    var mention = message.guild.member(message.mentions.users.first());
    if (!mention) return message.channel.send("Kamu perlu mention seseorang buat dapetin ID");
    const lolicon = mention.user.avatarURL;
    const lolid = new Discord.MessageEmbed()
      .setThumbnail(mention.user.avatarURL)
      .setColor("RANDOM")
      .setTitle("Ini ID " + `${mention.user.username}\'Simpan baik2 yah cuk`)
      .setDescription(`${mention.id}`)
      .setThumbnail(lolicon);
    message.channel.send({ embeds: [lolid] });
  },
};
