function isAuthorized(req, res, next) {
  if (req.user) {
    client.log.log(`[Authorized] User Has Logged In! - [Method]: ${req.method} [URL]: ${req.url} [STATUS]:${res.statusCode} (IP: ${req.ip})`)
    //console.log(req.user);
    next();
  } else {
    res.redirect("/");
  }
}

function isNotAuthorized(req, res, next) {
  if (req.user) {
    client.log.log(`[No Authorized] User Has Logged In! - [Method]: ${req.method} [URL]: ${req.url} [STATUS]:${res.statusCode} (IP: ${req.ip})`)
    res.redirect("/dashboard");
  } else {
    next();
  }
}

module.exports = {
  isAuthorized,
  isNotAuthorized,
};