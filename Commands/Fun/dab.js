const Discord = module.require("discord.js");

module.exports = {
  name: "dab",
  description: "Menambahkan emoji dab setelah setiap kata",
  botPerms: ["USE_EXTERNAL_EMOJIS"],
  run: async (client, message, args) => {
    if (!args.length) {
      return message.channel.send("`Usage: k!dab <text>`");
    }
    message.channel.send(
      args.join(" ").replace(/ /g, " <a:emoji_9:726786422866182186> ")
    );
  },
};
