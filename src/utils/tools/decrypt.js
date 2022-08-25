const CryptoJS = require('crypto-js')
module.exports = function decrypt(content, key) {
    const decrypt = CryptoJS.AES.decrypt(content, key);
    return decrypt.toString(CryptoJS.enc.Utf8);
}