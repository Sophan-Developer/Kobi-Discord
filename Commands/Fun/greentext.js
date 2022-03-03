const Discord = module.require("discord.js");

module.exports = {
  name: "greentext",
  description: "Mewarnai teks Anda dengan warna hijau",
  run: async (client, message, args) => {
    const text = args.join(" ");
    if (!text) {
      return message.channel.send("Lo perlu masukin beberapa teks");
    }
    message.channel.send(`\`\`\`css\n${text}\n\`\`\``);
  },
};
