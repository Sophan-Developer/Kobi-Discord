const Discord = module.require("discord.js");
const imdb = require("imdb-api");

module.exports = {
  name: "imdb",
  description: "Dapatkan informasi tentang serial dan film",
  botPerms: ["EMBED_LINKS"],
  enabled: false,
  run: async (client, message, args) => {
    const name = args.join(" ");
    if (!name) {
      return message.channel.send("Tolong Beri nama film atau serial!");
    }

    const imob = new imdb.Client({ apiKey: "5e36f0db" });

    let movie = await imob.get({ name: args.join(" ") });

    const embed = new Discord.MessageEmbed()
      .setTitle(movie.Title)
      .setColor("RANDOM")
      .setThumbnail(movie.poster)
      .setDescription(
        `Deskripsi: \`${movie.plot}\`\nRatings: \`${movie.ratings}\`\nNegara: \`${movie.country}\`\nBahasa: \`${movie.languages}\`\nTipe: \`${movie.type}\``
      );
    message.channel.send({ embeds: [embed] });
  },
};
