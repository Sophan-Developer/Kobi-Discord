const Discord = require("discord.js");

module.exports = {
  name: "giverole",
  description: "Beri roles ke users",
  userPerms: ["MANAGE_ROLES"],
  botPerms: ["EMBED_LINKS", "MANAGE_ROLES"],
  run: async (client, message, args) => {
    const user = message.mentions.members.first();
    if (!user)
      return message.channel.send(
        "Sebutkan pengguna yang ingin Anda beri role"
      );
    const name = args.slice(1).join(" ");
    if (!name) return message.channel.send("Silakan ketik nama role");
    const role = message.mentions.roles.first();
    if (!role) return message.channel.send("Tidak dapat menemukan role yang Disediakan");
    await user.roles.add(role),
      message.channel.send(`${user} sekarang memiliki ${role} role`);
  },
};
