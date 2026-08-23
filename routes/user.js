const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const userConroller = require("../controller/users.js");
const user = require("../models/user.js");


router.route("/signup")
    .get(userConroller.renderSignupForm)
    .post(wrapAsync(userConroller.signup))


router.route("/login")
    .get(userConroller.renderLoginForm)
    .post(saveRedirectUrl, passport.authenticate('local', { failureRedirect: "/login", failureFlash: true }), wrapAsync(userConroller.login))



router.get("/logout", userConroller.logout);

module.exports = router;