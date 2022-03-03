const Discord = module.require("discord.js");

module.exports = {
  name: "wiki",
  description: "Dapatkan Pencarian Dari Wikipedia",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    const search = args.join("_");
    const msg = args.join(" ");
    if (!msg) {
      return message.channel.send("Kamu perlu memasukkan yang kamu cari cuk!!!");
    }
    const link = `https://www.wikipedia.org/w/index.php?search=${search}&ns0=1`;
    const embed = new Discord.MessageEmbed()
      .setTitle("Pencarian Wikipedia")
      .addField(`Pencarian mu untuk:`, `${msg}`)
      .addField(`Hasil:`, `[Ini yang saya temukan](${link})`)
      .setColor("RANDOM");

    message.channel.send({ embeds: [embed] });
  },
};
