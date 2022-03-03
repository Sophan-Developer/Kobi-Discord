const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "spellcast",
    description: "Play spellcast.io in Discord",
    run: async(client, message, args) => {

      if (!message.member.voice.channelId) {
        return message.channel.send('Kamu perlu join voice channel dulu cok!')
      }
        client.discordTogether.createTogetherCode(message.member.voice.channelId, 'spellcast').then(async(invite) => {
            
            let embed = new MessageEmbed()
            .setTitle("SpellCast.io")
            .setDescription(`[Klik disini](${invite.code}) Untuk akses SpellCast.io!\n\`\`\`\nNote: Fitur ini tidak tersedia untuk pengguna ponsel!\`\`\``)
            .setColor("GREEN")
            .setFooter(`Permintaan Dari: ${message.author.tag}`)
            
            return message.channel.send({ embeds: [embed] });
        });
    }
}