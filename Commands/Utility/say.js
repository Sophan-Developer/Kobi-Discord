module.exports = {
  name: "say",
  description: "Buat bot mengatakan pesan mu",
  botPerms: ["MANAGE_MESSAGES"],
  run: async (client, message, args) => {
    if (!args.join(" ")) {
      message.channel.send("Tolong tambahkan beberapa teks untuk saya ulangi");
    }
    message.channel.send(args.join(" "), {
      allowedMentions: { parse: ["users"] },
    });
    message.delete();
  },
};
