const fs = require('fs');
module.exports = async (client) => {
    let nFiles = 0, nFolders = 0;
    fs.readdirSync("./src/events/").forEach((folder) => {
        nFolders++
        const events = fs.readdirSync(`./src/events/${folder}`).filter((file) => file.endsWith(".js"));
        for (const file of events) {
            try {
                const eventFile = require(`../events/${folder}/${file}`);
                client.log.log(`Loaded ${file}`)
                nFiles++
                client.on(file.split(".")[0], (...args) => eventFile(client, ...args));
            } catch (err) { client.log.error(err) }
        }
    })
    client.log.success(`Successfully Loaded ${nFiles} Files && ${nFolders} Folders.`)
}

