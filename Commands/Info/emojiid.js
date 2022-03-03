const Discord = module.require("discord.js");

module.exports = {
  name: "emojiid",
  description: "Dapatkan ID dari emojis",
  run: async (client, message, args) => {
    const name = args.join(" ");
    const emoji = message.guild.emojis.cache.find((r) => r.name === name);
    if (!name) {
      return message.channel.send("Kamu perlu memaksukkan nama emojo dulu");
    }
    if (!emoji) {
      return message.channel.send(
        "Tidak dapat menemukan Emoji dengan nama yang disediakan. Pastikan nama Emoji sudah benar"
      );
    }
    new message.channel.send(`\`\`\`${emoji}\`\`\``);
  },
};
