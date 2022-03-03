const prefixModel = require("../../database/guildData/leavechannel");

module.exports = {
  name: "leavechannel",
  description: "Ganti pesan Goodbye setiap server!",
  userPerms: ["MANAGE_CHANNELS"],
  botPerms: ["MANAGE_CHANNELS"],
  run: async (client, message, args) => {
    if (!args[0]) {
      return message.channel.send("`Usage: k!leavechannel <#channel|off>`");
    }
    if (message.mentions.channels.first()) {
      const data = await prefixModel.findOne({
        GuildID: message.guild.id,
      });

      if (data) {
        await prefixModel.findOneAndRemove({
          GuildID: message.guild.id,
        });

        message.channel.send(
          `Leave Channel atur ke ${message.mentions.channels.first()}`
        );

        let newData = new prefixModel({
          Bye: message.mentions.channels.first().id,
          GuildID: message.guild.id,
        });
        newData.save();
      } else if (!data) {
        message.channel.send(
          `Leave Channel atur ke ${message.mentions.channels.first()}`
        );

        let newData = new prefixModel({
          Bye: message.mentions.channels.first().id,
          GuildID: message.guild.id,
        });
        newData.save();
      }
    } else if (args[0] === "off") {
      const data2 = await prefixModel.findOne({
        GuildID: message.guild.id,
      });

      if (data2) {
        await prefixModel.findOneAndRemove({
          GuildID: message.guild.id,
        });

        message.channel.send(`Leave channel udah mode off!`);
      } else if (!data2) {
        return message.channel.send(`Leave channel belum di atur!`);
      }
    }
  },
};
