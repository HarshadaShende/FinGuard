const express = require("express");

const authController = require("./auth.controller");
const authenticate = require("../../middleware/auth.middleware");

const {
    loginValidationRules,
    validate
} = require("./auth.validator");

const router = express.Router();

router.post(
    "/login",
    loginValidationRules,
    validate,
    authController.login
);

router.get(
    "/profile",
    authenticate,
    authController.profile
);

router.post(
    "/refresh",
    authenticate,
    authController.refreshToken
);

router.post(
    "/logout",
    authenticate,
    authController.logout
);

module.exports = router;