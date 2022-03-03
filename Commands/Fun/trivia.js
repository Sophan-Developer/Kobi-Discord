const { MessageEmbed } = require("discord.js");
let questions = [
  {
    title: "Gimana bentuk anu nya burung?",
    options: ["Panjang", "Invisible", "Kotak", "Segitiga sama kaki"],
    correct: 2,
  },

  {
    title: "Hewan apa yang hobi telat ke sekolah?",
    options: ["Kaki seribu", "semut", "kucing", "sapi"],
    correct: 1,
  },

  {
    title: "Makanan apa vaporit vampir?",
    options: ["Darah segar", "Darah merah", "Darah Lama", "Orang darah tinggi"],
    correct: 4,
  },

  {
    title: "Kue Apa yang bungkusnya di dalam?",
    options: ["Kue-kuean", "kue mainan", "onde-onde", "kue salah buat"],
    correct: 4,
  },

  {
    title: "Dosa Apa yang di benci setan?",
    options: ["Menggoda cewek setan", "menculik anak setan", "membohongi setan", "orang masuk setan"],
    correct: 2,
  },

  {
    title: "Lumba-lumba bernafas dengan?",
    options: ["udara", "Hidung", "izin tuhan", "Air"],
    correct: 3,
  },
  //you can also add more!
];
module.exports = {
  name: "trivia",
  description: "Test Pengetahuan dangkal mu!",
  category: "fun",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    let q = questions[Math.floor(Math.random() * questions.length)];
    let i = 0;
    const Embed = new MessageEmbed()
      .setTitle(q.title)
      .setDescription(
        q.options.map((opt) => {
          i++;
          return `${i} - ${opt}\n`;
        })
      )
      .setColor(`GREEN`)
      .setFooter(
        `Balas pesan ini dengan nomor pertanyaan yang benar! kamu memiliki 15 detik.`
      );
    message.channel.send({ embeds: [Embed] });
    try {
      let msgs = await message.channel.awaitMessages(
        (u2) => u2.author.id === message.author.id,
        { time: 15000, max: 1, errors: ["time"] }
      );
      if (parseInt(msgs.first().content) == q.correct) {
        return message.channel.send(`Tumben kamu benar!`);
      } else {
        return message.channel.send(`Salah :P.`);
      }
    } catch (e) {
      return message.channel.send(`Kamu Ga jawab apa-apa!`);
    }
  },
};
