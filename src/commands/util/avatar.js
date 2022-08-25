const Discord = require("discord.js");

module.exports._src = {
    async newCommand(client, message, args) {
        try {
            const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member

            const Avatar_Embed = new Discord.EmbedBuilder()
                .setAuthor({ name: `${member.user.username}\'s Avatar`, iconURL: member.user.displayAvatarURL({ dynamic: true }) })
                .addFields(
                    {
                        name: '\u200B', value: `[[PNG]](${member.user.displayAvatarURL({ size: 4096, dynamic: true, format: "png" })}) [[JPG]](${member.user.displayAvatarURL({ size: 4096, dynamic: true, format: "jpg" })}) [[JPEG]](${member.user.displayAvatarURL({ size: 4096, dynamic: true, format: "jpeg" })}) [[WEBP]](${member.user.displayAvatarURL({ size: 4096, dynamic: true, format: "webp" })})`
                    },
                )
                .setColor(member.displayHexColor || 'BLUE')
                .setImage(member.user.displayAvatarURL({ size: 4096, dynamic: true, format: "png" }))
                .setFooter({ text: `Requested By: ${message.author.tag}, Avatar: ${member.user.tag}` })

            return message.channel.send({ embeds: [Avatar_Embed] });
        } catch (err) {
            client.log.error(`${err}`)
        }
    },

    async slash(client, interaction) {
        try {
            const member = (interaction.options._hoistedOptions.find((e) => e.name === "user") && interaction.options._hoistedOptions.find((e) => e.name === "user").member) || interaction;

            const Avatar_Embed = new Discord.MessageEmbed()
                .setAuthor({ name: `${member.user.username}\'s Avatar`, iconURL: member.user.displayAvatarURL({ dynamic: true }) })
                .addFields(
                    {
                        name: '\u200B', value: `[[PNG]](${member.user.displayAvatarURL({ size: 4096, dynamic: true, format: "png" })}) [[JPG]](${member.user.displayAvatarURL({ size: 4096, dynamic: true, format: "jpg" })}) [[JPEG]](${member.user.displayAvatarURL({ size: 4096, dynamic: true, format: "jpeg" })}) [[WEBP]](${member.user.displayAvatarURL({ size: 4096, dynamic: true, format: "webp" })})`
                    },
                )
                .setColor(member.displayHexColor || 'BLUE')
                .setImage(member.user.displayAvatarURL({ size: 4096, dynamic: true, format: "png" }))
                .setFooter({ text: `Requested By: ${interaction.user.tag}, Avatar: ${member.user.tag}` })

            return interaction.reply({ embeds: [Avatar_Embed] });
        } catch (err) {
            client.log.error(`${err}`)
        }
    }
}

module.exports.newStructure = {
    name: "avatar", // Name (Command/Slash Name)
    descriptions: [ // Desc (Command)
        "Get User Avatar With Diferent Types"
    ],
    aliases: [ // Aliases (Command)
        "av",
    ],
    category: "Util", // Category (Command)
    _command: { // Command Settings
        isEnabled: true// isCommand Enabled
    },
    _slash: { // Slash Settings
        isEnabled: false, // isSlash Enabled
        ephemeral: true, // ephmeral ???
        options: [
            {
                name: 'user',
                description: "Display User Avatar Of",
                type: 6,
                required: false
            }
        ],
    },
    _timeout: { // timeout
        isEnabled: true, // isTimeout Enabled
        timeout: {
            count: 15,
            _premium: {
                enabledBypass: true,
                discount: 65,
            }
        } // timeout time
    },
    _premiumOnly: {
        isGuildPremiumOnly: false,
        isUserPremiumOnly: false,
    }, // premiumOnly Command
    _permissions: {
        ownerOnly: false, // onwerOnly Command
        devOnly: false, // developerOnly Command
        allowBot: false,
        _channel: {
            allowDM: false, // isAllowed to run in DM
            nsfwOnly: false, // isOnly Allowed In NSFW Channels
        },
        _bot: [ // botPermissions
        ], // permission to use Command
        _user: [ // userPermissions
        ]
    },
}