const db = require("../../database/database");

function findUserById(userId) {
    return new Promise((resolve, reject) => {
        db.get(
            `
            SELECT
                id,
                status
            FROM users
            WHERE id = ?
            `,
            [userId],
            (err, row) => {
                if (err) {
                    return reject(err);
                }

                resolve(row);
            }
        );
    });
}

function getLatestAccountNumber() {
    return new Promise((resolve, reject) => {
        db.get(
            `
            SELECT
                account_number
            FROM accounts
            ORDER BY account_number DESC
            LIMIT 1
            `,
            [],
            (err, row) => {
                if (err) {
                    return reject(err);
                }

                resolve(row);
            }
        );
    });
}

function createAccount(account) {
    return new Promise((resolve, reject) => {
        db.run(
            `
            INSERT INTO accounts
            (
                user_id,
                account_number,
                account_type,
                balance,
                currency,
                status
            )
            VALUES (?, ?, ?, ?, ?, ?)
            `,
            [
                account.userId,
                account.accountNumber,
                account.accountType,
                account.balance,
                account.currency,
                account.status
            ],
            function (err) {
                if (err) {
                    return reject(err);
                }

                resolve({
                    id: this.lastID,
                    ...account
                });
            }
        );
    });
}

module.exports = {
    findUserById,
    getLatestAccountNumber,
    createAccount
};