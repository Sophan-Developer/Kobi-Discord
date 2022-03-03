const Discord = module.require("discord.js");

module.exports = {
  name: "report",
  description: "Report bug",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    const reportchannel = client.channels.cache.get("944868073159131187");
    const report = args.join(" ");
    if (!report) {
      return message.channel.send(
        "Masukkan deskripsi tentang bug yang kamu temukan!"
      );
    }
    message.channel.send(
      `${message.author}, Laporan Anda telah berhasil disampaikan. Tim Mod kami akan membalas Anda sesegera mungkin`
    );
    const embed = new Discord.MessageEmbed()
      .setTitle("New Bug Report")
      .setDescription(`${report} \n\nBy: ${message.author.tag}`)
      .setFooter(`User ID: ${message.author.id}`)
      .setColor("RANDOM");

    reportchannel.send({embeds: [embed]});
  },
  catch(error) {
    const errorlogs = client.channels.cache.get("944627274873995314");
    message.channel.send(
      "Sepertinya kesalahan telah terjadi. Kesalahan telah dilaporkan ke Bagian Laporan!"
    );
    errorlogs.send("Error on Report Command \nError: \n" + error);
  },
};
