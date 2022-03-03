const prefixModel = require("../../database/guildData/prefix");

module.exports = {
  name: "prefix",
  description: "Ganti Kode prefix setiap server!",
  userPerms: ["MANAGE_GUILD"],
  run: async (client, message, args) => {
  
    const data = await prefixModel.findOne({
      GuildID: message.guild.id,
    });

    if (!args[0])
      return message.channel.send("Kamu perlu memasukkan **prefix baru**!");

    if (args[0].length > 5)
      return message.channel.send(
        "Kata awalan perlu di bawah `5` karakter coy!"
      );

    if (data) {
      await prefixModel.findOneAndRemove({
        GuildID: message.guild.id,
      });

      message.channel.send(`kata awalan udah di ganti ke **\`${args[0]}\`**`);

      let newData = new prefixModel({
        Prefix: args[0],
        GuildID: message.guild.id,
      });
      newData.save();
    } else if (!data) {
      message.channel.send(`kata awalan udah di ganti ke **\`${args[0]}\`**`);

      let newData = new prefixModel({
        Prefix: args[0],
        GuildID: message.guild.id,
      });
      newData.save();
    }
  },
};