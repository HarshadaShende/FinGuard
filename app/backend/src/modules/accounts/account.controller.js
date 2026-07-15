const accountService = require("./account.service");
const ApiResponse = require("../../utils/apiResponse");

const {
    ACCOUNT_MESSAGES
} = require("./account.constants");

async function createAccount(req, res, next) {
    try {

        const { accountType } = req.body;

        const account = await accountService.createAccount(
            req.user.id,
            accountType
        );

        return ApiResponse.success(
            res,
            ACCOUNT_MESSAGES.ACCOUNT_CREATED_SUCCESS,
            account
        );

    } catch (error) {
        next(error);
    }
}

async function getAccounts(req, res, next) {
    try {

        const accounts = await accountService.getAccounts(
            req.user.id
        );

        return ApiResponse.success(
            res,
            ACCOUNT_MESSAGES.ACCOUNT_FETCH_SUCCESS,
            accounts
        );

    } catch (error) {
        next(error);
    }
}

module.exports = {
    createAccount,
    getAccounts
};