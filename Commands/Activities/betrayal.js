const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "betrayal",
    description: "Play betrayal.io in Discord",
    run: async(client, message, args) => {

      if (!message.member.voice.channelId) {
        return message.channel.send('Kamu perlu join voice channel dulu cok!')
      }
        client.discordTogether.createTogetherCode(message.member.voice.channelId, 'betrayal').then(async(invite) => {
            
            let embed = new MessageEmbed()
            .setTitle("Betrayal.io")
            .setDescription(`[Klik disini](${invite.code}) Untuk akses Betrayal.io!\n\`\`\`\nNote: Fitur ini tidak tersedia untuk pengguna ponsel!\`\`\``)
            .setColor("GREEN")
            .setFooter(`Permintaan Dari: ${message.author.tag}`)
            
            return message.channel.send({ embeds: [embed] });
        });
    }
}