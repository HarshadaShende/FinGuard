const express = require("express");

const accountController = require("./account.controller");
const authenticate = require("../../middleware/auth.middleware");

const {
    createAccountValidationRules,
    validate
} = require("./account.validator");

const router = express.Router();

router.post(
    "/",
    authenticate,
    createAccountValidationRules,
    validate,
    accountController.createAccount
);

router.get(
    "/",
    authenticate,
    accountController.getAccounts
);

module.exports = router;