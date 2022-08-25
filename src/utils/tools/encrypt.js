const CryptoJS = require('crypto-js')
module.exports = function encrypt(content, key) {
    return encrypt = CryptoJS.AES.encrypt(content, key).toString();
}
