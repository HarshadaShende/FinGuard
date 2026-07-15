const ApiError = require("../../errors/ApiError");

const accountRepository = require("./account.repository");

const {
    ACCOUNT_STATUS,
    ACCOUNT_NUMBER_PREFIX,
    ACCOUNT_NUMBER_START,
    DEFAULT_CURRENCY,
    INITIAL_BALANCE,
    ACCOUNT_MESSAGES
} = require("./account.constants");

async function createAccount(userId, accountType) {

    const user = await accountRepository.findUserById(userId);

    if (!user) {
        throw new ApiError(
            404,
            ACCOUNT_MESSAGES.USER_NOT_FOUND
        );
    }

    if (user.status !== ACCOUNT_STATUS.ACTIVE) {
        throw new ApiError(
            403,
            ACCOUNT_MESSAGES.USER_ACCOUNT_INACTIVE
        );
    }

    const latestAccount = await accountRepository.getLatestAccountNumber();

    const accountNumber = generateAccountNumber(latestAccount);

    const account = {
        userId,
        accountNumber,
        accountType,
        balance: INITIAL_BALANCE,
        currency: DEFAULT_CURRENCY,
        status: ACCOUNT_STATUS.ACTIVE
    };

    const createdAccount = await accountRepository.createAccount(account);

    return {
        id: createdAccount.id,
        accountNumber: createdAccount.accountNumber,
        accountType: createdAccount.accountType,
        balance: createdAccount.balance,
        currency: createdAccount.currency,
        status: createdAccount.status
    };
}

async function getAccounts(userId) {

    const user = await accountRepository.findUserById(userId);

    if (!user) {
        throw new ApiError(
            404,
            ACCOUNT_MESSAGES.USER_NOT_FOUND
        );
    }

    if (user.status !== ACCOUNT_STATUS.ACTIVE) {
        throw new ApiError(
            403,
            ACCOUNT_MESSAGES.USER_ACCOUNT_INACTIVE
        );
    }

    const accounts = await accountRepository.getAccountsByUserId(userId);

    return accounts.map(account => ({
        id: account.id,
        accountNumber: account.account_number,
        accountType: account.account_type,
        balance: account.balance,
        currency: account.currency,
        status: account.status
    }));
}

function generateAccountNumber(latestAccount) {

    if (!latestAccount || !latestAccount.account_number) {
        return `${ACCOUNT_NUMBER_PREFIX}${ACCOUNT_NUMBER_START}`;
    }

    const latestNumber = parseInt(
        latestAccount.account_number.replace(
            ACCOUNT_NUMBER_PREFIX,
            ""
        ),
        10
    );

    const nextNumber = latestNumber + 1;

    return `${ACCOUNT_NUMBER_PREFIX}${nextNumber}`;
}

module.exports = {
    createAccount,
    getAccounts
};