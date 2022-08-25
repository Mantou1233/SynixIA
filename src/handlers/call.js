module.exports = async (client) => {
    try {
        client.log.event(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[ Start Of Synix Log ]━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`)
        function call() {
            require("./events")(client)
            require("./commands")(client)
            require("./Slash")(client)
            require("../utils/client/mongoose")(client)
            require("../utils/client/login")(client)
            require('../website/src/app')
        }
        call()
    } catch (err) {
        client.log.error(`${err}`)
    }
}