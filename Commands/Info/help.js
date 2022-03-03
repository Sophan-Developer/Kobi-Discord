const { MessageEmbed, MessageActionRow, MessageSelectMenu} = require("discord.js");

module.exports = {
  name: "help",
  description: "Get the Command List",
  aliases: ["commands", "cmd", "h"],
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    if (args[0]) {
      let command = args[0];
      let cmd = client.commands.get(command);

      if (!cmd) {
        return message.channel.send("Sepertinya kamu salah mengetik command!")
      } else if (cmd) {
        let description = cmd.description ? cmd.description : "No description available.";
        let aliases = cmd.aliases ? cmd.aliases.join(", ") : "No aliases available.";
        let botPerms = cmd.botPerms ? cmd.botPerms.join(", ") : "No permissions required.";
        let userPerms = cmd.userPerms ? cmd.userPerms.join(", ") : "No permissions required.";
        let ownerOnly = cmd.ownerOnly ? "Yes" : "No";
        let nsfwOnly = cmd.nsfwOnly ? "Yes" : "No";
        let cooldown = cmd.cooldown ? cmd.cooldown : "No cooldown.";
        let isDisabled = cmd.isDisabled ? "Yes" : "No";

        let helpEmbed = new MessageEmbed()
        .setTitle(`Help for **${cmd.name}**`)
        .addField("Name", `${cmd.name}`, true)
        .addField("Description", `${description}`, true)
        .addField("Aliases", `${aliases}`, true)
        .addField("Owner Only", `${ownerOnly}`, true)
        .addField("NSFW Only", `${nsfwOnly}`, true)
        .addField("Cooldown", `${cooldown}`, true)
        .addField("Disabled", `${isDisabled}`, true)
        .addField("Required Bot Permissions", `${botPerms}`, true)
        .addField("Required User Permissions", `${userPerms}`, true)
        .setColor("GREEN")

        return message.channel.send({ embeds: [helpEmbed] })
      }

    } else if (!args[0]) {

    let helpMenu = new MessageActionRow()
    .addComponents(
      new MessageSelectMenu()
      .setCustomId("help_menu")
      .setPlaceholder('Help Menu')
      .setMinValues(1)
      .setMaxValues(1)
      .addOptions([
        {
          label: "Settings",
          description: "Ganti bot settings",
          value: "settings",
          emoji: "🛠"
        },
        {
          label: "Activities",
          description: "Akses aktifitas Discord baru",
          value: "activities",
          emoji: "🎮"
        },
        {
          label: "Fun",
          description: "Tunjukkan Semua fun commands",
          value: "fun",
          emoji: "🎲"
        },
        {
          label: "Image",
          description: "Tunjukkan Semua image commands",
          value: "image",
          emoji: "🖼"
        },
        {
          label: "Information",
          description: "Tunjukkan Semua information commands",
          value: "info",
          emoji: "📢"
        },
        {
          label: "Moderation",
          description: "Tunjukkan Semua moderation commands",
          value: "moderation",
          emoji: "🔒"
        },
        {
          label: "Music",
          description: "Tunjukkan Semua Music commands!",
          value: "music",
          emoji: "🎵"
        },
        {
          label: "NSFW",
          description: "Tunjukkan Semua NSFW commands",
          value: "nsfw",
          emoji: "🔞"
        },
        {
          label: "Utility",
          description: "Tunjukkan Semua utility commands",
          value: "utility",
          emoji: "🔧"
        },
        {
          label: "Games",
          description: "Tunjukkan Semua game commands",
          value: "game",
          emoji: "🎮"
        }
      ])
    )

    let editEmbed = new MessageEmbed()
    .setTitle('Help Menu')
    .setDescription('Pilih opsi dari menu di bawah ini!')
    .setColor("GREEN")

      message.channel.send({ embeds: [editEmbed], components: [helpMenu]}).then(msg=>{
        setTimeout(async function () {
          await msg.delete();
        }, 180000)
      })
    }
  }
};
