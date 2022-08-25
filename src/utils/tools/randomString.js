module.exports = function (type, length) {
    try {
        let
            output = '',
            string = '',
            lower = 'abcdefghijklmnopqrstuvwxyz',
            upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            numbers = '0123456789',
            symbols = `!";#$%&'()*+,-./:;<=>?@[]^_\`\\{|}`;
        if (!length) {
            length = 16 // Default Lenght If Has No Lenght
        }
        for (let i = 0; i < length; i++) {
            if (type === 0) { // Lower
                string = lower;
                output = output += string.charAt(Math.floor(Math.random() * string.length));
            } else if (type === 1) { // Lower + Upper
                string = lower + upper;
                output = output += string.charAt(Math.floor(Math.random() * string.length));
            } else if (type === 2) { // Numbers
                string = numbers;
                output = output += string.charAt(Math.floor(Math.random() * string.length));
            } else if (type === 3) { // Lower + Numbers
                string = lower + numbers;
                output = output += string.charAt(Math.floor(Math.random() * string.length));
            } else if (type === 4) { // Lower + Upper + Numbers
                string = lower + upper + numbers;
                output = output += string.charAt(Math.floor(Math.random() * string.length));
            } else if (type === 5) { // Lower + Upper + Numbers  + Symbols
                string = lower + upper + numbers + symbols;
                output = output += string.charAt(Math.floor(Math.random() * string.length));
            } else if (type === 6) {
                string = lower + upper + numbers + '+./=';
                output = output += string.charAt(Math.floor(Math.random() * string.length));
            } else {
                throw new Error(`[Random String] Not Type Found.`)
            }
        }
        return output;
    } catch (err) {
        client.log.error(`${err}`)
    }
}