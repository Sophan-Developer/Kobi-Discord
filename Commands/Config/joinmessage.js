const prefixModel = require("../../database/guildData/joinmsg");

module.exports = {
  name: "joinmessage",
  description: "Ganti pesan masuk setiap server server!",
  aliases: ["joinmsg", "welcomemsg", "jmsg"],
  userPerms: ["MANAGE_CHANNELS"],
  run: async (client, message, args) => {
    const text = args.join(" ");
    if (!args[0]) {
      return message.channel.send(`\`Usage: k!joinmessage <Text|off>\``);
    }
    if (text !== "off") {
      const data = await prefixModel.findOne({
        GuildID: message.guild.id,
      });

      if (data) {
        await prefixModel.findOneAndRemove({
          GuildID: message.guild.id,
        });
        let newData = new prefixModel({
          JoinMsg: args.join(" "),
          GuildID: message.guild.id,
        });
        newData.save();
        message.channel.send(`Join Message atur ke ${newData.JoinMsg}`);
      } else if (!data) {
        let newData = new prefixModel({
          JoinMsg: args.join(" "),
          GuildID: message.guild.id,
        });
        newData.save();
        message.channel.send(`Join Message atur ke ${newData.JoinMsg}`);
      }
    } else if (text === "off") {
      const data2 = await prefixModel.findOne({
        GuildID: message.guild.id,
      });

      if (data2) {
        await prefixModel.findOneAndRemove({
          GuildID: message.guild.id,
        });

        return message.channel.send(`Join Message udah mode off!`);
      } else if (!data2) {
        return message.channel.send(`Join Message belum di atur!`);
      }
    }
  },
};
