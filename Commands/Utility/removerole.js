const Discord = require("discord.js");

module.exports = {
  name: "removerole",
  description: "Ambil role dari pengguna",
  userPerms: ["MANAGE_ROLES"],
  botPerms: ["MANAGE_ROLES"],
  run: async (client, message, args) => {
   
    const user = message.mentions.members.first();
    if (!user)
      return message.channel.send(
        "Sebutkan pengguna yang ingin Anda ambil rolenya"
      );
    const role = message.mentions.roles.first();
    if (!role) return message.channel.send("Tolong sebutkan role");
    await user.roles.remove(role),
      message.channel.send(
        `${user}, ${role} role telah diambil darimu`
      );
  },
};
