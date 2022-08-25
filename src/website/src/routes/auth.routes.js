const { Router } = require("express");
const passport = require("passport");
const router = Router();

router.get("/", passport.authenticate("discord"));

router.get(
  "/redirect",
  passport.authenticate("discord", {
    failureRedirect: "/", //other you could use are /forbiddent,/failure, etc
    successRedirect: "/dashboard",
  })
);

router.get("/logout", function (req, res, next) {
  if (req.user) {
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      res.redirect('/');
    })
  }
});

module.exports = router;
