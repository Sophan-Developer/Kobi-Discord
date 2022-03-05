const Discord = module.require("discord.js");

module.exports = {
  name: "kill",
  description: "kill smb",
  options: [
        {
            name: "enemy",
            description: "the enemy",
            type: "MENTIONABLE",
            required: true
        }
    ],
  run: async (client, interaction, args) => {
    let target = interaction.options.getMentionable('enemy') || args.join(" ");
    let author = interaction.member;
    let isBotOwner = require("../../config.json").OWNER_ID;
    if (args.length == 0) {
      return interaction.reply("Damn, You are trying to kill the air..??").then((msg) => setTimeout(() => msg.deleteReply(), 2300));
    }
    var kills = [
      ` Setelah sekian lama jomblo, ${target} buat ramuan cabai campur soda dan tiba2 ${target} Mati sambil mencret.`,
      `${author} Bunuh ${target} dengan racun tikus!`,
      `${author} merobek isi dada lalu memakan jantung ${target}.`,
      `${author} ngajak ${target} ke kolam lele lalu melempar ${target} dan jadi makanan lele.`,
      `${author} pukul keras kontol ${target} dengan palu.`,
      `${author} pukul kepala ${target} dengan cangkul.`,
      `${author} intimindasi ${target} sampe setress.`,
      `${author} Tarik ${target} Lalu lempar ke sumur!.`,
      `${author} lempar ${target} ke jurang.`,
      `${author} lempar ${target} lumpur lapindo*`,
      `${author} racun ${target} dengan soda campur bensin!`,
      `${author} ngajak mabuk ${target} lalu lempar ke pinggir kali.`,
      `${author} membuat jatuh cinta ${target}. dan ${target}  patah hati .`,
      `${author} memasukkan ${target}, kedalam kulkas.`,
      `${author} tau kalau ${target} homo`,
      `${author} cincang ${target} lalu mimum darah ${target} sampai mati.`,
      `${author} tarik tangan ${target} lalu masukin tanggannya ke blender buah.`,
      `${author} sebenarnya aku ingin membunuhmu, tap ${target} yatim piatu`,
      `${author} peluk ${target} sekeras mungkin.`,
      `${author} ngajak ke kuburan ${target} lalu siram kuburannya pake bensin.`,
      `${author} bunuh ${target} dengan pensil.`,
      `${author} bunuh ${target} dengan garpu.`,
      `${author} bunuh ${target} dengan sendok`,
      `${author} bunuh ${target} racun tikus`,
      `${author} bunuh ${target} dengan cangkul.`,
      `${author} apa bener kamu mau bunuh ${target} ?? dia itu fans blackpink.`,
      `${author} alt+F4 ${target}`,
      `${author} apa bener kamu mau bunuh ${target}. Dia itu homo.`,
      `${author} lari kerumah ${target} lalu memasukkan nya ke oven.`,
      `${author} tembak ${target} di kepala.`,
      `${author} tembak ${target} dengan ak47, tiba2 ${target} jadi zombie dan ${target} memburumu.`,
      `${author} tembak ${target} dengan panah, ternyata salah sasaran!`,
      `${author} tampar keras ${target}'dengan batang kelamin.`,
      `${author} santet keluarga ${target}.`,
      `${target} mati karena AIDS.`,
      `${target} mati karena suntik sapi.`,
      `${target} mati dimakan cicak.`,
      `${target} mati dimakan kucing.`,
      `${target} di lempar ke sumur lalu ${author} tutup sumur pake pasir.`,
      `${target} mati, lalu pindah alam ke bikini bottoms`,
      `${target} mati.`,
      `setelah sekian lama, ${target} bisa bunuh balik ${author}`,
      `${target} tersangkut di atas pohon kelapa.`,
      `${target} mabuk lalu keracunan oplosan.`,
      `${target} mati karena tetangganya dangdutan.`,
      `${target} download bokep. lalu auto impotens.`,
      `${target} minum air putih, ternyata yg di minum bensin`,
      `${target} main Pokemon Go. tiba2 hp dia blank lalu setres. :iphone:`,
      `${target} main POU. tiba2 hp dia blank lalu setres. :iphone:.`,
      `${target} di tabrak delman.`,
      `${target} di tabrak becak. ${author} ketawa terbahak-bahak`,
      `${target} patah hati.`,
      `setelah sekian lama musuhan dengan ${author}, ${target} tetap gabisa di bunuh.`,
      `abis main roblox, ${target} mati terkena kanker.`,
      `Aids, ${target} mati karena aids.`,
    ];
    await interaction.reply(kills[Math.floor(Math.random() * kills.length)]);
  },
};
