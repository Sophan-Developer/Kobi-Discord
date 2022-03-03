const Discord = module.require("discord.js");
const flip = require("flip-text");

module.exports = {
  name: "fliptext",
  description: "Membalik beberapa teks",
  usage: "fliptext <text>",
  type: "Fun",
  run: async (client, message, args) => {
    if (args.length < 1) {
      return message.channel.send("Kamu perlu memasukkan text untuk di balik");
    }
    args.reverse();
    var flipped = [];

    args.forEach((arg) => {
      flipped.push(flip(arg));
    });

    message.channel.send(flipped.join(" "));
  },
};
