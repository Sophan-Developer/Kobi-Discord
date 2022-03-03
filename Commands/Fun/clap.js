const Discord = module.require("discord.js");

module.exports = {
  name: "clap",
  description: "Menambahkan emoji tepuk tangan di antara setiap kata",
  run: async (client, message, args) => {
    if (!args.length) {
      return message.channel.send("`Usage: k!clap <msg>`");
    }
    message.channel.send(args.join(" ").replace(/ /g, " 👏 "));
  },
};
