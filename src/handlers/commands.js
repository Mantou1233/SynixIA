const fs = require('fs');
module.exports = async (client) => {
    let nFiles = 0, nFolders = 0;
    fs.readdirSync("./src/commands/").forEach((folder) => {
        nFolders++
        const commands = fs.readdirSync(`./src/commands/${folder}`).filter((file) => file.endsWith(".js"));
        for (const file of commands) {
            try {
                const cmdFiles = require(`../commands/${folder}/${file}`);
                if (!cmdFiles.newStructure || !cmdFiles.newStructure.name) {
                    client.log.error(`[/${folder}/${file}] => This Command Ins't Configured.`)
                    continue;
                }
                if (cmdFiles.newStructure.name) {
                    if (cmdFiles.newStructure.aliases && Array.isArray(cmdFiles.newStructure.aliases)) cmdFiles.newStructure.aliases.forEach((alias) => client.aliases.set(alias, cmdFiles.newStructure.name));
                    client.commands.set(cmdFiles.newStructure.name, cmdFiles);
                    client.log.log(`Loaded ${file}.`)
                    nFiles++
                }
            } catch (err) { client.log.error(err) }
        }

    });
    client.log.success(`Successfully Loaded ${nFiles} Files && ${nFolders} Folders.`);
}


