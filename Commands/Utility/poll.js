const Discord = module.require("discord.js");

module.exports = {
  name: "poll",
  description: "mulai polling",
  userPerms: ["MANAGE_SERVER"],
  run: async (client, message, args) => {
    const pll = args.join(" ");
    if (!message.member.hasPermission("MANAGE_SERVER")) {
      return message.channel.send("kamu gak memiliki cukup Izin");
    }
    if (!pll) {
      return message.channel.send("Masukkan beberapa teks untuk Polling");
    }
    let embed = new Discord.MessageEmbed()
      .setTitle("Poll Time")
      .setDescription(`${pll}`)
      .setFooter(`mulai dari ${message.author.username}`)
      .setColor("RANDOM");
    message.channel
      .send({ embeds: [embed] })
      .then(function (message, str) {
        message.react("👍");
        message.react("👎");
      })
      .catch(function () {});
  },
};
