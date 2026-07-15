const { body, validationResult } = require("express-validator");

const { ACCOUNT_TYPES } = require("./account.constants");

const createAccountValidationRules = [
    body("accountType")
        .trim()
        .notEmpty()
        .withMessage("Account type is required.")
        .isIn(Object.values(ACCOUNT_TYPES))
        .withMessage("Invalid account type.")
];

function validate(req, res, next) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            message: "Validation failed.",
            errors: errors.array().map(error => ({
                field: error.path,
                message: error.msg
            }))
        });
    }

    next();
}

module.exports = {
    createAccountValidationRules,
    validate
};