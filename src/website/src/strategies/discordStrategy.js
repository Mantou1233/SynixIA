const { Strategy } = require("passport-discord");
const passport = require("passport");
const User = require("../../../data/schema/user");

passport.serializeUser((user, done) => {
  done(null, user.id);
  console.log("hi2")
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  if (user) done(null, user);
  console.log("hi1")
});

passport.use(
  new Strategy(
    {
      clientID: client.config.main._bot._id,
      clientSecret: client.config.main._bot._clientSecret,
      callbackURL: client.config.dashboard._auth.redirectURI,
      scope: ["identify", "email", "guilds"],
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log("hi")
      try {
        const user = await User.findOne({ _id: profile.id });

        if (user) return done(null, user);

        const savedUser = client.fetchUser(profile)

        client.log.event(`${accessToken}\n ${refreshToken}\n ${profile}\n OMG THIS IS Elon Ma${done}`)
        done(null, savedUser);
      } catch (error) {
        console.error(error);
        return done(err, null);
      }
    }
  )
);
