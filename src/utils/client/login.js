module.exports = async (client) => {
    const token = client.config.main._bot._token;
    if(!token) throw new Error('Client Token Is Missing, Cannot Loging.')
    client.login(token).then(() => client.log.success(`${client.user.username} Has Logged Into Discord, With [ID]: ${client.user.id}`))
}