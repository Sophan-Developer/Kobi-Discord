
module.exports = async(queue, client) => {

      return client.say.queueMessage(client, queue, "Ga ada musik yang di mainkan lagi. Keluar voice channel.");
};
