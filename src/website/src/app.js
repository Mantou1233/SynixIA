const express = require("express");
const session = require("express-session");
const passport = require("passport");
const path = require("path");
const MongoStore = require("connect-mongo");

const app = express();
require("./strategies/discordStrategy");

// Settings
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// Middlewares
app.use(
  session({
    secret: "Secret",
    cookie: {
      maxAge: 60000 * 60 * 24, // 1 day
      // secure: true
    },
    saveUninitialized: false,
    resave: false,
    name: "discord-oauth2",
    store: MongoStore.create({
      mongoUrl: client.config.database._authURI
    }),
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Global variables
app.use((req, res, next) => {
  client.log.log(`- [${req.method}] ~ [${res.statusCode}]: [${req.url}] ([IP]: [ ${req.ip} ] ([REAL]]: [ ${req.ip} ] )`)
  next()
})
app.use((req, res, next) => {
  app.locals.user = req.user;
  //console.log(req.user)
  next();
});
// Routes
app.use("/", require("./routes/index.routes"));
app.use("/auth", require("./routes/auth.routes"));
app.use("/dashboard", require("./routes/dashboard.routes"));

//app.listen(client.config.dashboard._ports[0] , () => client.log.event(`Listening On Port: ${client.config.dashboard._ports[0]}`))

/**
 * TEMP
 */
const fs = require('fs');
const https = require('https');
const server = https.createServer({ key: fs.readFileSync('./src/website/certificates/localhost.key'), cert: fs.readFileSync('./src/website/certificates/localhost.crt') }, app);
let ports = client.config.dashboard._ports[0] || client.config.dashboard._ports[1] || client.config.dashboard._ports[2]
server.once('error', function(err) {
  if (err.code === 'EADDRINUSE') {
    client.log.error(`Port Is Already In Use! [Port]: ${ports}`)
  }
});
server.listen(ports, () => {
  client.log.success(`Listening On Port: ${ports}`)
})