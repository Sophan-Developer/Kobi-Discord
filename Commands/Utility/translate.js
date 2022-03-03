const discord = require("discord.js");
const translate = require('@iamtraction/google-translate');

module.exports = {
  name: "translate",
  description: "Menerjemahkan pesan yang diberikan.",
  run: async (client, message, args) => {
        const txt = args.slice(1).join(" ")
        const lang = args[0]
        if(!lang) return message.channel.send("Berikan kode ISO bahasa.")
        if(!txt) return message.channel.send("Berikan teks untuk diterjemahkan.")
        translate(txt, { to: lang }).then(res => {
          const embed = new discord.MessageEmbed()
          .setDescription(res.text)
          .setColor("RANDOM")
          message.channel.send({ embeds: [embed] });
    }).catch(err => {
      message.channel.send("Harap berikan kode bahasa ISO yang valid.")
    });
  },
};
