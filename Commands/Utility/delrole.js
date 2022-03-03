const Discord = module.require("discord.js");

module.exports = {
  name: "delrole",
  description: "Hapus role",
  userPerms: ["MANAGE_ROLES"],
  botPerms: ["EMBED_LINKS", "MANAGE_ROLES"],
  run: async (client, message, args) => {
    const role = message.mentions.roles.first();
   
    if (!role) {
      return message.channel.send("`Usage: k!delrole <role>`");
    }
    role.delete();
    const embed = new Discord.MessageEmbed()
      .setTitle("Roles Update")
      .setDescription(`${role} role sudah di hapus`)
      .setColor("RANDOM");
    await message.channel.send({ embeds: [embed] });
  },
};
