
const roleData = require("../../database/guildData/autorole");

module.exports = {
  name: "autorole",
  description: "Ganti autorole setiap server!",
  permissions: "MANAGE_ROLES",
  botPermissions: "MANAGE_ROLES",
  args: "Yes",
  usage: "!autorole <Role|off>",
  aliases: ["ar", "joinrole"],
  userPerms: ["MANAGE_ROLES"],
  botPerms: ["MANAGE_ROLES"],

  run: async (client, message, args) => {
   
    if (!args[0]) {
      return message.channel.send(`\`Usage: ${message.client.prefix}autorole <@role|off>\``)
    }
    if (message.mentions.roles.first()) {
      const data = await roleData.findOne({
        GuildID: message.guild.id
      });

      if (data) {
        await roleData.findOneAndRemove({
          GuildID: message.guild.id
        });

        message.channel.send(`Autorole Aktif dan sudak di atur ke ${message.mentions.roles.first()}`);

        let newData = new roleData({
          Role: message.mentions.roles.first().id,
          GuildID: message.guild.id
        });
        newData.save();
      } else if (!data) {
        message.channel.send(`Autorole Aktif dan sudak di atur ke ${message.mentions.roles.first()}`);

        let newData = new roleData({
          Role: message.mentions.roles.first().id,
          GuildID: message.guild.id
        });
        newData.save();
      }
    } else if (args[0] === "off") {
      const data2 = await roleData.findOne({
        GuildID: message.guild.id
      });

      if (data2) {
        await roleData.findOneAndRemove({
          GuildID: message.guild.id
        });

        return message.channel.send(`Autorole udah mode off!`);

      } else if (!data2) {
        return message.channel.send(`Autorole belum di atur!`)
      }
    }
  }
}