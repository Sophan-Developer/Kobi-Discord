const Discord = module.require("discord.js");

module.exports = {
  name: "weather",
  description: "Menunjukkan Cuaca untuk tempat yang disediakan",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    const name = args.join(" ");
    const place = args.join("-");
    if (!place) {
      return message.channel.send(
        "Silakan masukkan nama Negara/Kota/Kota"
      );
    }
    const link = `https://wttr.in/${place}.png?m`;
    const weblink = `https://wttr.in/${place}`;
    const embed = new Discord.MessageEmbed()
      .setTitle(`${name}'Cuaca untuk 3 hari ke depan`)
      .setImage(link)
      .setFooter("Credits to Wttr.in")
      .setColor("RANDOM");
    message.channel.send({ embeds: [embed] });
  },
};
