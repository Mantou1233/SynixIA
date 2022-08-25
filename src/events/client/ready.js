module.exports = async (client) => {
  function message() {
    let message = client.config.profile._rcp._messages
    message = client.replace(message, '{guilds}', client.guilds.cache.size)
    message = client.replace(message, '{users}', client.users.cache.size)
    message = client.replace(message, '{prefix}', client.config.main._default._prefix)
    return message;
  }

  async function Status() {
    let _messages = message()
    await client.user.setPresence({
      activities: [{ name: _messages[Math.floor(Math.random() * _messages.length)] + ` ` + client.config.profile._rcp._version, type: client.config.profile._rcp.type }],
      status: `${client.config.profile._status.type}`,
    });
  }; setInterval(Status, client.config.profile._rcp.timeout * 1000);

  client.log.success(`Client Status Has Been Set, With An Interval Of ${client.config.profile._rcp.timeout}s`)
};