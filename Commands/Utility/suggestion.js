const Discord = module.require("discord.js");

module.exports = {
  name: "suggestion",
  description: "Anything",
  botPerms: ["EMBED_LINKS", "MANAGE_MESSAGES", "ADD_REACTIONS"],
  run: async (client, message, args) => {
    const msg = args.join(" ");
    message.delete();
    if (!msg) {
      return message.channel.send("Tolong tambahkan saran");
    }
    const suggestionchannel = message.guild.channels.cache.find(
      (c) => c.name === "saran"
    );
    if (!suggestionchannel) {
      return message.channel.send(
        'Server ini tidak memiliki saluran bernama "saran", jika saluran ada dengan beberapa nama lain, saya sarankan Anda untuk mengubah nama saluran menjadi `saran`'
      );
    }
    await message.channel.send(
      `${message.author}, Saran Anda telah dikirimkan!`
    );

    const embed = new Discord.MessageEmbed()
      .setTitle("saran bru")
      .setDescription(`${msg}`)
      .setFooter(`saran dari ${message.author.tag}`)
      .setColor("RANDOM");

    suggestionchannel
      .send({ embeds: [embed] })
      .then(function (message, str) {
        message.react(":yes:747387883123376181");
        message.react(":no:747388029202595881");
      })
      .catch(function () {});
  },
};
