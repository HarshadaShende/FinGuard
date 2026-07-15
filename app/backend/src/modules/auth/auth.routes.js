const express = require("express");

const authController = require("./auth.controller");
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

module.exports = router;