const db = require("../../database/database");

function findUserByEmail(email) {
    return new Promise((resolve, reject) => {
        db.get(
            `
            SELECT
                id,
                first_name,
                last_name,
                email,
                password_hash,
                role,
                status
            FROM users
            WHERE email = ?
            `,
            [email],
            (err, row) => {
                if (err) {
                    return reject(err);
                }

                resolve(row);
            }
        );
    });
}

function findUserById(id) {
    return new Promise((resolve, reject) => {
        db.get(
            `
            SELECT
                id,
                first_name,
                last_name,
                email,
                role,
                status
            FROM users
            WHERE id = ?
            `,
            [id],
            (err, row) => {
                if (err) {
                    return reject(err);
                }

                resolve(row);
            }
        );
    });
}

module.exports = {
    findUserByEmail,
    findUserById
};