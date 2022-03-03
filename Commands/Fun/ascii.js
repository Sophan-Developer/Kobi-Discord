const figlet = require("figlet"); // MAKE SURE TO INSTALL FIGLET PACKAGE OR CODE WONT WORK

module.exports = {
  name: "ascii",
  aliases: [],
  category: "Fun",
  usage: "ascii <text>",
  description: "Mengembalikan teks yang disediakan dalam format ascii.",
  run: async (client, message, args) => {
    let text = args.join(" ");
    if (!text) {
      return message.channel.send(`\`Usage: k!ascii <msg>\``);
    }
    let maxlen = 20;
    if (text.length > 20) {
      return message.channel.send(
        `Harap letakkan teks yang memiliki 20 karakter atau kurang karena konversi tidak akan baik!`
      );
    }
    // AGAIN, MAKE SURE TO INSTALL FIGLET PACKAGE!
    figlet(text, function (err, data) {
      message.channel.send(data, {
        code: "AsciiArt",
      });
    });
  },
};
