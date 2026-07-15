const ACCOUNT_TYPES = Object.freeze({
    SAVINGS: "SAVINGS",
    CURRENT: "CURRENT"
});

const ACCOUNT_STATUS = Object.freeze({
    ACTIVE: "ACTIVE",
    INACTIVE: "INACTIVE",
    FROZEN: "FROZEN",
    CLOSED: "CLOSED"
});

const ACCOUNT_NUMBER_PREFIX = "FG";
const ACCOUNT_NUMBER_START = 10000001;

const DEFAULT_CURRENCY = "INR";

const INITIAL_BALANCE = 0.00;

const ACCOUNT_MESSAGES = {
    ACCOUNT_CREATED_SUCCESS: "Account created successfully.",

    ACCOUNT_TYPE_REQUIRED: "Account type is required.",
    INVALID_ACCOUNT_TYPE: "Invalid account type.",

    USER_NOT_FOUND: "User not found.",
    USER_ACCOUNT_INACTIVE: "User account is inactive.",

    ACCOUNT_CREATION_FAILED: "Unable to create account."
};

module.exports = {
    ACCOUNT_TYPES,
    ACCOUNT_STATUS,
    ACCOUNT_NUMBER_PREFIX,
    ACCOUNT_NUMBER_START,
    DEFAULT_CURRENCY,
    INITIAL_BALANCE,
    ACCOUNT_MESSAGES
};