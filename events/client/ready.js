const chalk = require("chalk");
const mongoose = require("mongoose");
var os = require('os-utils');
const { mongoPass } = require("../../config.json"); 
module.exports = (client) => {

  const guildin = client.guilds.cache.size;
  const guildmember = client.users.cache.size;
  
 client.user.setPresence({ status: "online" });
let textList = ['command : k!help ',' in: ' + guildin + ' Server.' + 'Serving: ' + guildmember + ' member',`Current Cpu core : ${os.cpuCount()}`]
 client.user.setPresence({ status: "online" });
 setInterval(() => {
   var text = textList[Math.floor(Math.random() * textList.length)];
  client.user.setActivity(text, { type: "WATCHING"});
}, 3000);

  let allMembers = new Set();
  client.guilds.cache.forEach((guild) => {
    guild.members.cache.forEach((member) => {
      allMembers.add(member.user.id);
    });
  });

  let allChannels = new Set();
  client.guilds.cache.forEach((guild) => {
    guild.channels.cache.forEach((channel) => {
      allChannels.add(channel.id);
    });
  });

  console.log(
    chalk.bgMagentaBright.black(` ${client.guilds.cache.size} servers `),
    chalk.bgMagentaBright.black(` ${client.channels.cache.size} channels `),
    chalk.bgMagentaBright.black(` ${allMembers.size} members `)
  );

  mongoose
    .connect(mongoPass, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(
      console.log(
        chalk.bgGreenBright.black(
          ` ${client.user.username} connected to Mongo DB `
        )
      )
    )
    .catch((err) =>
      console.log(
        chalk.bgRedBright.black(
          ` ${client.user.username} could not connect to mongo DB `
        )
      )
    );
};
