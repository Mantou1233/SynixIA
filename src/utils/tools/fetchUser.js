const UserSchema = require('../../data/schema/user')
const CryptoJS = require('crypto-js')
const moment = require('moment')
module.exports = async function fetchUserData(user) {
    return await new Promise(async (resolve) => {
        const dateNow = `${moment().format("MMM Do YYY ~ h:mm:ss")}`;
        await client.users.fetch(user.id).then((async (UserData) => {
            await UserSchema.findOne({ _id: user.id }).then(async (data, err) => {
                if (err) {
                    client.log.error(`${err}`)
                }
                if (data) {
                    UserData._id = data._id;
                    UserData._ip = data._ip;
                    UserData._token = data._token;
                    UserData._createdAt = data.createdAt
                    UserData._updateddAt = data.updatedAt
                    UserData._datas = {
                        _roles: {
                            _isIntern: {
                                type: data._datas._roles._isIntern.type,
                                group: data._datas._roles._isIntern.group,
                                _date: data._datas._roles._isIntern._date
                            },
                            _isPremium: {
                                isPremium: data._datas._roles._isPremium.isPremium,
                                _code: data._datas._roles._isPremium._code,
                                _date: data._datas._roles._isPremium._date
                            },
                            _isTester: {
                                PreAlpha: data._datas._roles._isTester.PreAlpha,
                                PreBeta: data._datas._roles._isTester.PreBeta,
                                Alpha: data._datas._roles._isTester.Alpha,
                                Beta: data._datas._roles._isTester.Beta
                            },
                            _isBanned: {
                                isBanned: data._datas._roles._isBanned.isBanned,
                                reason: data._datas._roles._isBanned.reason,
                                _expires: data._datas._roles._isBanned._expires,
                                _date: data._datas._roles._isBanned._date
                            }
                        },
                        _account: {
                            username: data._datas._account.username,
                            discriminator: data._datas._account.discriminator,
                            avatarURL: data._datas._account.avatarURL,
                            guilds: data._datas._account.guilds,
                            _credencials: {
                                email: data._datas._account._credencials.email,
                                password: data._datas._account._credencials.password,
                                pin: data._datas._account._credencials.pin,
                                _2FA: {
                                    email: data._datas._account._credencials._2FA.email,
                                    pin: data._datas._account._credencials._2FA.pin
                                },
                                _login: {
                                    accessToken: data._datas._account._credencials._login.accessToken,
                                    refreshToken: data._datas._account._credencials._login.refreshToken,
                                    secretAccessToken: data._datas._account._credencials._login.secretAccessToken,
                                    expires: data._datas._account._credencials._login.expires,
                                    lastUpdated: data._datas._account._credencials._login.lastUpdated
                                }
                            }
                        },
                        _commands: {
                            hasExecuted: data._datas._commands.hasExecuted,
                            _intereactions: {
                                _hasRecived: {
                                    _sfw: {
                                        bite: data._datas._commands._intereactions._hasRecived._sfw.bite,
                                        blush: data._datas._commands._intereactions._hasRecived._sfw.blush,
                                        bonk: data._datas._commands._intereactions._hasRecived._sfw.bonk,
                                        bored: data._datas._commands._intereactions._hasRecived._sfw.bored,
                                        bully: data._datas._commands._intereactions._hasRecived._sfw.bully,
                                        bye: data._datas._commands._intereactions._hasRecived._sfw.bye,
                                        chase: data._datas._commands._intereactions._hasRecived._sfw.chase,
                                        cringe: data._datas._commands._intereactions._hasRecived._sfw.cringe,
                                        cry: data._datas._commands._intereactions._hasRecived._sfw.cry,
                                        cuddle: data._datas._commands._intereactions._hasRecived._sfw.cuddle,
                                        dab: data._datas._commands._intereactions._hasRecived._sfw.dab,
                                        dance: data._datas._commands._intereactions._hasRecived._sfw.dance,
                                        die: data._datas._commands._intereactions._hasRecived._sfw.die,
                                        facepalm: data._datas._commands._intereactions._hasRecived._sfw.facepalm,
                                        feed: data._datas._commands._intereactions._hasRecived._sfw.feed,
                                        glomp: data._datas._commands._intereactions._hasRecived._sfw.glomp,
                                        hi: data._datas._commands._intereactions._hasRecived._sfw.hi,
                                        highfive: data._datas._commands._intereactions._hasRecived._sfw.highfive,
                                        happy: data._datas._commands._intereactions._hasRecived._sfw.happy,
                                        hug: data._datas._commands._intereactions._hasRecived._sfw.hug,
                                        kill: data._datas._commands._intereactions._hasRecived._sfw.kill,
                                        kiss: data._datas._commands._intereactions._hasRecived._sfw.kiss,
                                        laugh: data._datas._commands._intereactions._hasRecived._sfw.laugh,
                                        lick: data._datas._commands._intereactions._hasRecived._sfw.lick,
                                        love: data._datas._commands._intereactions._hasRecived._sfw.love,
                                        lurk: data._datas._commands._intereactions._hasRecived._sfw.lurk,
                                        nervous: data._datas._commands._intereactions._hasRecived._sfw.nervous,
                                        nope: data._datas._commands._intereactions._hasRecived._sfw.nope,
                                        pampering: data._datas._commands._intereactions._hasRecived._sfw.pampering,
                                        panic: data._datas._commands._intereactions._hasRecived._sfw.panic,
                                        pat: data._datas._commands._intereactions._hasRecived._sfw.pat,
                                        peck: data._datas._commands._intereactions._hasRecived._sfw.peck,
                                        pout: data._datas._commands._intereactions._hasRecived._sfw.pout,
                                        run: data._datas._commands._intereactions._hasRecived._sfw.run,
                                        sad: data._datas._commands._intereactions._hasRecived._sfw.sad,
                                        shoot: data._datas._commands._intereactions._hasRecived._sfw.shoot,
                                        shrug: data._datas._commands._intereactions._hasRecived._sfw.shrug,
                                        slap: data._datas._commands._intereactions._hasRecived._sfw.slap,
                                        sleep: data._datas._commands._intereactions._hasRecived._sfw.sleep,
                                        stare: data._datas._commands._intereactions._hasRecived._sfw.stare,
                                        tease: data._datas._commands._intereactions._hasRecived._sfw.tease,
                                        think: data._datas._commands._intereactions._hasRecived._sfw.think,
                                        thumbsup: data._datas._commands._intereactions._hasRecived._sfw.thumbsup,
                                        tickle: data._datas._commands._intereactions._hasRecived._sfw.tickle,
                                        triggered: data._datas._commands._intereactions._hasRecived._sfw.triggered,
                                        wag: data._datas._commands._intereactions._hasRecived._sfw.wag,
                                        wave: data._datas._commands._intereactions._hasRecived._sfw.wave,
                                        wink: data._datas._commands._intereactions._hasRecived._sfw.wink,
                                        yes: data._datas._commands._intereactions._hasRecived._sfw.yes,
                                    },
                                    _nsfw: {
                                        fuck: data._datas._commands._intereactions._hasRecived._nsfw.fuck,
                                        gmasturbate: data._datas._commands._intereactions._hasRecived._nsfw.gmasturbate,
                                        boobjob: data._datas._commands._intereactions._hasRecived._nsfw.boobjob
                                    }
                                },
                                _hasSent: {
                                    _sfw: {
                                        bite: data._datas._commands._intereactions._hasSent._sfw.bite,
                                        blush: data._datas._commands._intereactions._hasSent._sfw.blush,
                                        bonk: data._datas._commands._intereactions._hasSent._sfw.bonk,
                                        bored: data._datas._commands._intereactions._hasSent._sfw.bored,
                                        bully: data._datas._commands._intereactions._hasSent._sfw.bully,
                                        bye: data._datas._commands._intereactions._hasSent._sfw.bye,
                                        chase: data._datas._commands._intereactions._hasSent._sfw.chase,
                                        cringe: data._datas._commands._intereactions._hasSent._sfw.cringe,
                                        cry: data._datas._commands._intereactions._hasSent._sfw.cry,
                                        cuddle: data._datas._commands._intereactions._hasSent._sfw.cuddle,
                                        dab: data._datas._commands._intereactions._hasSent._sfw.dab,
                                        dance: data._datas._commands._intereactions._hasSent._sfw.dance,
                                        die: data._datas._commands._intereactions._hasSent._sfw.die,
                                        facepalm: data._datas._commands._intereactions._hasSent._sfw.facepalm,
                                        feed: data._datas._commands._intereactions._hasSent._sfw.feed,
                                        glomp: data._datas._commands._intereactions._hasSent._sfw.glomp,
                                        hi: data._datas._commands._intereactions._hasSent._sfw.hi,
                                        highfive: data._datas._commands._intereactions._hasSent._sfw.highfive,
                                        happy: data._datas._commands._intereactions._hasSent._sfw.happy,
                                        hug: data._datas._commands._intereactions._hasSent._sfw.hug,
                                        kill: data._datas._commands._intereactions._hasSent._sfw.kill,
                                        kiss: data._datas._commands._intereactions._hasSent._sfw.kiss,
                                        laugh: data._datas._commands._intereactions._hasSent._sfw.laugh,
                                        lick: data._datas._commands._intereactions._hasSent._sfw.lick,
                                        love: data._datas._commands._intereactions._hasSent._sfw.love,
                                        lurk: data._datas._commands._intereactions._hasSent._sfw.lurk,
                                        nervous: data._datas._commands._intereactions._hasSent._sfw.nervous,
                                        nope: data._datas._commands._intereactions._hasSent._sfw.nope,
                                        pampering: data._datas._commands._intereactions._hasSent._sfw.pampering,
                                        panic: data._datas._commands._intereactions._hasSent._sfw.panic,
                                        pat: data._datas._commands._intereactions._hasSent._sfw.pat,
                                        peck: data._datas._commands._intereactions._hasSent._sfw.peck,
                                        pout: data._datas._commands._intereactions._hasSent._sfw.pout,
                                        run: data._datas._commands._intereactions._hasSent._sfw.run,
                                        sad: data._datas._commands._intereactions._hasSent._sfw.sad,
                                        shoot: data._datas._commands._intereactions._hasSent._sfw.shoot,
                                        shrug: data._datas._commands._intereactions._hasSent._sfw.shrug,
                                        slap: data._datas._commands._intereactions._hasSent._sfw.slap,
                                        sleep: data._datas._commands._intereactions._hasSent._sfw.sleep,
                                        stare: data._datas._commands._intereactions._hasSent._sfw.stare,
                                        tease: data._datas._commands._intereactions._hasSent._sfw.tease,
                                        think: data._datas._commands._intereactions._hasSent._sfw.think,
                                        thumbsup: data._datas._commands._intereactions._hasSent._sfw.thumbsup,
                                        tickle: data._datas._commands._intereactions._hasSent._sfw.tickle,
                                        triggered: data._datas._commands._intereactions._hasSent._sfw.triggered,
                                        wag: data._datas._commands._intereactions._hasSent._sfw.wag,
                                        wave: data._datas._commands._intereactions._hasSent._sfw.wave,
                                        wink: data._datas._commands._intereactions._hasSent._sfw.wink,
                                        yes: data._datas._commands._intereactions._hasSent._sfw.yes,
                                    },
                                    _nsfw: {
                                        fuck: data._datas._commands._intereactions._hasSent._nsfw.fuck,
                                        gmasturbate: data._datas._commands._intereactions._hasSent._nsfw.gmasturbate,
                                        boobjob: data._datas._commands._intereactions._hasSent._nsfw.boobjob
                                    }
                                }
                            }
                        },
                        _virtual: {
                            _currency: {
                                inBank: data._datas._virtual._currency.inBank,
                                inPocket: data._datas._virtual._currency.inPocket,
                            }
                        }
                    }
                    await resolve(UserData)
                } else {
                    const newUser = await new UserSchema({
                        _id: user.id,
                        _token: `_${client.randomString(4, 3)}` + "." + CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(user.id)) + '.' + CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(moment().unix())) + '.' + client.randomString(4, 32),
                    })
                    await newUser.save().then(async (UserData) => {
                        client.log.event(`An Data Has Been Created To ${user.tag} ~ ID: ${user.id}`).catch((err) => client.log.error(`${err}`))
                        resolve(UserData)
                    })

                };
            });
        }))
    })
}