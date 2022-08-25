module.exports = {
    main: {
        _bot: {
            _token: `OTMzNDQ1ODU4NTMwMjk5OTI0.GPN5Oi.bcjvQslpqt4XrA-UBrsMnz_4LB4WNwzIkAgSdc`, // bot token
            _id: `933445858530299924`, // bot id
            _clientSecret: `MmbqbqHBSg9YrPAhdDmh_OXUh8oonxzI` // bot client secret
        },
        _development: {
            _isEnabled: false, // is in development?
            _users: {
                developers: [], // developers
                allowed: [] // allowed
            }
        },
        _default: {
            _lang: {
                user: `en_US`, // default user lang
                guild: `en_US` // default guild lang
            },
            _prefix: `.` // default user prefix
        },
        _keys: {
            /* All Not Data & Token Keys */
            _default: {
                key: `Qz%.zzPU5dWmh#%_Dn0UN]3$VhQjguCW+reU97#GvKi)nhi2-a` // random key for encryption
            },
            /* All Saved Data Keys */
            _database: {
                key: `ShD6F;'mz$IX1V$w3%-9QAkTRkN[I^jQMkqmez}#F,J&WIy&ux` // random key for database encryption
            },
            _github: {
                key: `0Cys1jz2phq3TNPdOeTIfMUc9krROOsL`
            }
        }
    },
    profile: {
        _status: {
            /* Types: online, idle, invisible, dnd ~ DEFAULT: online*/
            type: `idle` // Discord Status 
        },
        _rcp: {
            /**
             * 1 ActivityType.Playing
             * 2 ActivityType.Listening
             * 3 ActivityType.Watching
             * 4 -
             * 5 -
             * 6?
             */
            timeout: `5`,
            type: 2,
            _version: `| v1.3.5 Pre-ALPHA`,
            _messages: [
                `In {guilds} Servers`,
                `With {users} Users`,
                `{prefix}help`,
                'I Am Currently Updating To .14!'
            ]
        }
    },
    database: {
        /* DataBase Auth URI */
        _authURI: `mongodb+srv://Synix_Bot:EQm18CdS6ClScKIhh0Ai6f8S8izzYx28JgyYnNCvrz@synix-db.34gkl.mongodb.net/Data?retryWrites=true&w=majority`
    },
    dashboard: {
        _enabled: true, /* Enable/Disable Dashboard ~ DEFAULT: false */
        _ports: {
            /* Some Ports For Dashboard ~ DEFAULT: 80, 90 */
            0: 80,
            1: 90,
            2: 3000
        },
        _auth: {
            redirectURI: `/auth/redirect`
        }
    },
    embeds: {
        _colors: {
            default: `0x2f3136`,
            blurple: `0x5865F2`,
            success: `0x57F287`,
            warn: `0xFEE75C`,
            error: `0xED4245`
        }
    },
    webhook: {
        _discord: {
            error: {
                id: `943672526503034880`,
                token: `kYXZhNmXpC1qLR5odHL39Dk2Lj9kvxO714vJRQzwEsUppgAm5gNqMtoUMXTt7TpLPa9A`
            },
            warn: {
                id: `975390100412325909`,
                token: `_PggL_DjJvLw4LU8EROxPBLUreD6W9ceWL_L58SP5lOmjgbbILvS38XoKidVx-RJ00X5`
            },
            ratelimit: {
                id: `978730073018495096`,
                token: `Q_9icAU5Y21eqBiHs2qp1KOq49DaH0HGfDhhusfTlVZN4up2ivrq7tkqH6sBUaBphATJ`
            }
        }
    }
}