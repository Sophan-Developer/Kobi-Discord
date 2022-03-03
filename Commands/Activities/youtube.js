const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "youtube",
    description: "Nonton Youtube di Discord!",
    run: async(client, message, args) => {

      if (!message.member.voice.channelId) {
        return message.channel.send('Kamu perlu join voice channel dulu cok!')
      }
        client.discordTogether.createTogetherCode(message.member.voice.channelId, 'youtubeDev').then(async(invite) => {
            
            let embed = new MessageEmbed()
            .setTitle("Youtube Together")
            .setDescription(`[Klik disini](${invite.code}) Untuk akses youtube!\n\`\`\`\nNote: Fitur ini tidak tersedia untuk pengguna ponsel!\`\`\``)
            .setColor("RED")
            .setFooter(`Permintaan dari: ${message.author.tag}`)
            
            return message.channel.send({ embeds: [embed] });
        });
    }
}