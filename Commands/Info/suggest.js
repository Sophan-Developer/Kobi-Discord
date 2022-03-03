const Discord = module.require("discord.js");

module.exports = {
  name: "suggest",
  description: "Kirim masukkan ke kobi",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    const avatar = message.author.avatarURL;
    const suggestchannel = client.channels.cache.get("944869535515828224");
    const suggestion = args.join(" ");
    if (!suggestion) {
      return message.channel.send("Kamu perlu memasukkan masukan");
    }
    message.channel.send(
      "Terima kasih telah Menyarankan Fitur untuk Kobi. Tim Mod kami akan memberi tahu Anda apakah Saran Anda diterima atau tidak!"
    );
    const embed = new Discord.MessageEmbed()
      .setAuthor(`Masukan baru!`, avatar)
      .setDescription(`${suggestion} \n\nBy: ${message.author.tag}`)
      .setFooter(`ID: ${message.author.id}`)
      .setColor("RANDOM");

    suggestchannel.send({ embeds: [embed] });
  },
  catch(error) {
    const errorlogs = client.channels.cache.get("944627274873995314");
    message.channel.send(
      "Sepertinya terjadi kesalahan. Kesalahan telah dilaporkan ke Bagian Laporan"
    );
    errorlogs.send(`Error in Suggest Command! \nError: \n` + error);
  },
};
