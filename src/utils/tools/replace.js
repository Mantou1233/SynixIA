module.exports = function fetchUserData(content, replace, to) {
    /* Content = Content To Replace
       Replace = Replace To
    */
    if (Array.isArray(content)) {
        content = content.map(c => c.replaceAll(replace, to));
    } else {
        content = content.replaceAll(content, replace)
    }
    return content
}