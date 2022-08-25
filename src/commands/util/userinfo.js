const Discord = require("discord.js");
const moment = require('moment')

module.exports._src = {
    async newCommand(client, message, args) {
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        const flags = {
            DISCORD_EMPLOYEE: "Discord Employee",
            PARTNERED_SERVER_OWNER: "Discord Partner",
            BUGHUNTER_LEVEL_1: "Bug Hunter (Level 1)",
            BUGHUNTER_LEVEL_2: "Bug Hunter (Level 2)",
            HYPESQUAD_EVENTS: "HypeSquad Events",
            HOUSE_BRAVERY: "House of Bravery",
            HOUSE_BRILLIANCE: "House of Brilliance",
            HOUSE_BALANCE: "House of Balance",
            EARLY_SUPPORTER: "Early Supporter",
            TEAM_USER: "Team User",
            SYSTEM: "System",
            VERIFIED_BOT: "Verified Bot",
            EARLY_VERIFIED_BOT_DEVELOPER: "Verified Bot Developer",
            DISCORD_CERTIFIED_MODERATOR: "Discord Certified Moderator"
        };

        const nickname = member.nickname !== undefined && member.nickname !== null ? member.nickname : `None`;
        const userFlags = member.user.flags ? member.user.flags.toArray() : "";

        const UserEmbed = {
            color: client.config.embeds._colors.default,
            author: {
                name: member.user.tag,
                icon_url: member.user.displayAvatarURL(),
            },
            fields: [
                {
                    name: `Name`,
                    value: `\`\`\`${member.user.username}\`\`\``,
                    inline: true,
                },
                {
                    name: `Discriminator`,
                    value: `\`\`\`${member.user.discriminator}\`\`\``,
                    inline: true,
                },
                {
                    name: 'ID',
                    value: `\`\`\`${member.user.id}\`\`\``,
                    inline: false,
                },
                {
                    name: 'NickName',
                    value: `\`\`\`${nickname}\`\`\``,
                    inline: true,
                },
                {
                    name: 'Created',
                    value: `<t:${moment.utc(member.user.createdAt).format('X')}:f> (<t:${moment(member.user.createdAt).format("X")}:R>)`,
                    inline: false,
                },
                {
                    name: 'Joined',
                    value: `<t:${moment.utc(member.joinedAt).format('X')}:f> (<t:${moment(member.joinedAt).format("X")}:R>)`,
                    inline: false,
                },
                {
                    name: `Badges [${userFlags.length}]`,
                    value: `${userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : 'None'}`,
                    inline: false,
                },
                {
                    name: `Roles [${member.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString()).slice(0, -1).length}]`,
                    value: `${member.roles.cache.map(r => r).join(" ").replace("@everyone", " ") || "None"}`,
                    inline: false,
                },
            ],
        };

        message.channel.send({ embeds: [UserEmbed] })
    }
}

module.exports.newStructure = {
    name: "userinfo", // Name (Command/Slash Name)
    descriptions: [ // Desc (Command)
        "Get An Info Of A User."
    ],
    aliases: [ // Aliases (Command)
        "whois",
        "user-info",
        "profile",
        'info'
    ],
    category: "Util", // Category (Command)
    _command: { // Command Settings
        isEnabled: true// isCommand Enabled
    },
    _slash: { // Slash Settings
        isEnabled: false, // isSlash Enabled
        ephemeral: true, // ephmeral ???
        options: [ // Slash options
            {
                name: 'echo',
                description: "Return Echo",
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
                discount: 50,
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
};