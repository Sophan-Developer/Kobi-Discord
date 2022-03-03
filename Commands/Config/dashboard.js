const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require('discord.js');

module.exports = {
    name: "dashboard",
    description: "Melihat dasbor untuk kategori yang diperlukan.",
    botPerms: ["MANAGE_GUILD"],
    userPerms: ["ADMINISITRATOR"],
    run: async(client, message, args)=>{
        if (!args[0]){
            return message.channel.send(`Please specify an option! Available Options:\`\`\`js\nadmin\nwelcomer\nlogging\n\`\`\``);
        }
        if (args[0] === "admin") {
            const adminMenu = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                .setCustomId("adminMenu")
                .setPlaceholder("Admin Menu")
                .setMinValues(1)
                .setMaxValues(1)
                .addOptions([
                    {
                        label: "Antilink",
                        description: "Aktifkan atau nonaktifkan sistem Antilink!",
                        value: "antilink",
                    },
                    {
                        label: "AutoRole",
                        description: "Aktifkan atau nonaktifkan sistem AutoRole!",
                        value: "autorole",
                    },
                    {
                        label: "AutoMod",
                        description: "Aktifkan atau nonaktifkan sistem AutoMod!",
                        value: "automod",
                    },
                    {
                        label: "Prefix",
                        description: "Ganti prefix bot untuk server!",
                        value: "prefix"
                    }
                ])
            )

            return message.channel.send({ content: "Admin Settings", components: [adminMenu]})

        } else if (args[0] === "welcomer") {
            const welcomerMenu = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                .setCustomId("welcomerMenu")
                .setPlaceholder("Welcomer Menu")
                .setMinValues(1)
                .setMaxValues(1)
                .addOptions([
                    {
                        label: "Welcome Channel",
                        description: "Atur welcome channel setiap server!",
                        value: "welcome_channel",
                    },
                    {
                        label: "Leave Channel",
                        description: "Atur leave channel setiap server!",
                        value: "leave_channel",
                    },
                    {
                        label: "Welcome Message",
                        description: "Atur welcome message setiap server!",
                        value: "welcome_message",
                    },
                    {
                        label: "Leave Message",
                        description: "Atur leave message setiap server!",
                        value: "leave_message",
                    },
                    {
                        label: "Variables untuk Welcomer",
                        description: "Lihat semua yang tersedia variables untk di gunakan custom messages",
                        value: "variables",
                    }
                ])
            )

            return message.channel.send({ content: "Welcomer Settings" ,components: [welcomerMenu]})

        } else if (args[0] === "logging") {
            const loggingMenu = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                .setCustomId("loggingMenu")
                .setPlaceholder("Logging Menu")
                .setMinValues(1)
                .setMaxValues(1)
                .addOptions([
                    {
                        label: "Channel Updates",
                        description: "Atur channel untuk logging channel",
                        value: "channel_logs",
                    },
                    {
                        label: "Member Updates",
                        description: "Atur channel untuk logging member",
                        value: "member_updates",
                    },
                    {
                        label: "Message Logs",
                        description: "Atur channel untuk message logs",
                        value: "message_logs",
                    },
                    {
                        label: "Role Updates",
                        description: "Atur channel untuk logging role",
                        value: "role_updates",
                    },
                    {
                        label: "Server Updates",
                        description: "Atur channel untuk logging server",
                        value: "server_updates",
                    },
                    {
                        label: "Voice State Updates",
                        description: "Atur channel untuk logging voice state updates",
                        value: "voice_state_updates",
                    }
                ])
            )

            return message.channel.send({ content: "Logging Settings" ,components: [loggingMenu]})
        } else {
            return message.channel.send("That option doesn't seem to exist!")
        }
    }
}