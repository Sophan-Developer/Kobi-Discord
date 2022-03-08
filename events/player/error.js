module.exports = async(queue, error, client) => {

    client.say.queueMessage(client, queue, "Terjadi kesalahan saat bermain. Maaf atas ketidaknyamanannya.", "RED");

    return client.utils.sendErrorLog(client, { stack: `${error.message}`, name: "PLAYER_ERROR", code: `${queue.id}` }, "error");
};
