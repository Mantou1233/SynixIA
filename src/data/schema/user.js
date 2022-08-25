const mongoose = require("mongoose");
const moment = require('moment')

const dateNow = `${moment().format("MMM Do YYY ~ h:mm:ss")}`;
const userModel = new mongoose.Schema({
    _id: { type: String, required: true },
    _ip: { type: String, default: '', required: false },
    _token: { type: String, required: false },
    _datas: {
        _roles: {
            _isIntern: {
                type: { type: Number, default: 0, required: true },
                group: { type: String, default: 'User', required: true },
                _date: { type: String, default: dateNow, required: false }
            },
            _isPremium: {
                isPremium: { type: Boolean, default: false, required: true },
                _code: { type: String, default: '', required: false },
                _date: { type: String, default: dateNow, required: false }
            },
            _isTester: {
                PreAlpha: { type: Boolean, default: false, required: true },
                PreBeta: { type: Boolean, default: false, required: true },
                Alpha: { type: Boolean, default: false, required: true },
                Beta: { type: Boolean, default: false, required: true },
                _date: { type: String, default: dateNow, required: false }
            },
            _isBanned: {
                isBanned: { type: Boolean, default: false, required: true },
                reason: { type: String, default: 'No Reason', required: true },
                _expires: { type: String, default: '', required: false },
                _date: { type: String, default: dateNow, required: false }
            }
        },
        _account: {
            username: { type: String, default: '', required: false },
            discriminator: { type: String, default: '', required: false },
            avatarURL: { type: String, default: '', required: false },
            guilds: { type: Array, default: [0], required: false },
            _credencials: {
                email: { type: String, default: '', required: false },
                password: { type: String, default: '', required: false },
                pin: { type: String, default: '1234', required: true },
                _2FA: {
                    email: { type: Boolean, default: false, required: true },
                    pin: { type: Boolean, default: false, required: true }
                },
                _login: {
                    accessToken: { type: String, default: '', required: false },
                    refreshToken: { type: String, default: '', required: false },
                    secretAccessToken: { type: String, default: '', required: false },
                    expires: { type: Date, default: '', required: false },
                    lastUpdated: { type: String, defalt: '', required: false },
                }
            }
        },
        _commands: {
            hasExecuted: { type: Number, default: 0, required: false },
            _intereactions: {
                _hasRecived: {
                    _sfw: {
                        bite: { type: Number, default: 0, required: true },
                        blush: { type: Number, default: 0, required: true },
                        bonk: { type: Number, default: 0, required: true },
                        bored: { type: Number, default: 0, required: true },
                        bully: { type: Number, default: 0, required: true },
                        bye: { type: Number, default: 0, required: true },
                        chase: { type: Number, default: 0, required: true },
                        cringe: { type: Number, default: 0, required: true },
                        cry: { type: Number, default: 0, required: true },
                        cuddle: { type: Number, default: 0, required: true },
                        dab: { type: Number, default: 0, required: true },
                        dance: { type: Number, default: 0, required: true },
                        die: { type: Number, default: 0, required: true },
                        facepalm: { type: Number, default: 0, required: true },
                        feed: { type: Number, default: 0, required: true },
                        glomp: { type: Number, default: 0, required: true },
                        hi: { type: Number, default: 0, required: true },
                        highfive: { type: Number, default: 0, required: true },
                        happy: { type: Number, default: 0, required: true },
                        hug: { type: Number, default: 0, required: true },
                        kill: { type: Number, default: 0, required: true },
                        kiss: { type: Number, default: 0, required: true },
                        laugh: { type: Number, default: 0, required: true },
                        lick: { type: Number, default: 0, required: true },
                        love: { type: Number, default: 0, required: true },
                        lurk: { type: Number, default: 0, required: true },
                        nervous: { type: Number, default: 0, required: true },
                        nope: { type: Number, default: 0, required: true },
                        pampering: { type: Number, default: 0, required: true },
                        panic: { type: Number, default: 0, required: true },
                        pat: { type: Number, default: 0, required: true },
                        peck: { type: Number, default: 0, required: true },
                        pout: { type: Number, default: 0, required: true },
                        run: { type: Number, default: 0, required: true },
                        sad: { type: Number, default: 0, required: true },
                        shoot: { type: Number, default: 0, required: true },
                        shrug: { type: Number, default: 0, required: true },
                        slap: { type: Number, default: 0, required: true },
                        sleep: { type: Number, default: 0, required: true },
                        stare: { type: Number, default: 0, required: true },
                        tease: { type: Number, default: 0, required: true },
                        think: { type: Number, default: 0, required: true },
                        thumbsup: { type: Number, default: 0, required: true },
                        tickle: { type: Number, default: 0, required: true },
                        triggered: { type: Number, default: 0, required: true },
                        wag: { type: Number, default: 0, required: true },
                        wave: { type: Number, default: 0, required: true },
                        wink: { type: Number, default: 0, required: true },
                        yes: { type: Number, default: 0, required: true },
                    },
                    _nsfw: {
                        fuck: { type: Number, default: 0, required: true },
                        gmasturbate: { type: Number, default: 0, required: true },
                        boobjob: { type: Number, default: 0, required: true }
                    }
                },
                _hasSent: {
                    _sfw: {
                        bite: { type: Number, default: 0, required: true },
                        blush: { type: Number, default: 0, required: true },
                        bonk: { type: Number, default: 0, required: true },
                        bored: { type: Number, default: 0, required: true },
                        bully: { type: Number, default: 0, required: true },
                        bye: { type: Number, default: 0, required: true },
                        chase: { type: Number, default: 0, required: true },
                        cringe: { type: Number, default: 0, required: true },
                        cry: { type: Number, default: 0, required: true },
                        cuddle: { type: Number, default: 0, required: true },
                        dab: { type: Number, default: 0, required: true },
                        dance: { type: Number, default: 0, required: true },
                        die: { type: Number, default: 0, required: true },
                        facepalm: { type: Number, default: 0, required: true },
                        feed: { type: Number, default: 0, required: true },
                        glomp: { type: Number, default: 0, required: true },
                        hi: { type: Number, default: 0, required: true },
                        highfive: { type: Number, default: 0, required: true },
                        happy: { type: Number, default: 0, required: true },
                        hug: { type: Number, default: 0, required: true },
                        kill: { type: Number, default: 0, required: true },
                        kiss: { type: Number, default: 0, required: true },
                        laugh: { type: Number, default: 0, required: true },
                        lick: { type: Number, default: 0, required: true },
                        love: { type: Number, default: 0, required: true },
                        lurk: { type: Number, default: 0, required: true },
                        nervous: { type: Number, default: 0, required: true },
                        nope: { type: Number, default: 0, required: true },
                        pampering: { type: Number, default: 0, required: true },
                        panic: { type: Number, default: 0, required: true },
                        pat: { type: Number, default: 0, required: true },
                        peck: { type: Number, default: 0, required: true },
                        pout: { type: Number, default: 0, required: true },
                        run: { type: Number, default: 0, required: true },
                        sad: { type: Number, default: 0, required: true },
                        shoot: { type: Number, default: 0, required: true },
                        shrug: { type: Number, default: 0, required: true },
                        slap: { type: Number, default: 0, required: true },
                        sleep: { type: Number, default: 0, required: true },
                        stare: { type: Number, default: 0, required: true },
                        tease: { type: Number, default: 0, required: true },
                        think: { type: Number, default: 0, required: true },
                        thumbsup: { type: Number, default: 0, required: true },
                        tickle: { type: Number, default: 0, required: true },
                        triggered: { type: Number, default: 0, required: true },
                        wag: { type: Number, default: 0, required: true },
                        wave: { type: Number, default: 0, required: true },
                        wink: { type: Number, default: 0, required: true },
                        yes: { type: Number, default: 0, required: true },
                    },
                    _nsfw: {
                        fuck: { type: Number, default: 0, required: true },
                        gmasturbate: { type: Number, default: 0, required: true },
                        boobjob: { type: Number, default: 0, required: true }
                    }
                },
            }
        },
        _virtual: {
            _currency: {
                inBank: { type: Number, default: 0, required: true },
                inPocket: { type: Number, default: 0, required: true }
            }
        }
    }
}, { _id: false, timestamps: true })

module.exports = mongoose.model("users", userModel); 