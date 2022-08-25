const mongoose = require("mongoose");

module.exports = async (client, message) => {
    try {
        const accessKey = client.config.database._authURI;
        if (!accessKey) throw new Error(`Cannot Conect To Database Missing Conection String.`)
        mongoose.connect(accessKey, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        mongoose.connection.on('err', err => {
            client.log.error(err)
        })

        mongoose.connection.on('disconnected', () => {
            client.log.error(`Database has been disconected. Reconecting...`)
        })

        mongoose.connection.on('connected', () => {
            client.log.success('Conected To Database!')
        })
    } catch (err) {
        client.log.error(`${err}`)
    }
}