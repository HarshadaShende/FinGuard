const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authRepository = require("./auth.repository");
const config = require("../../config/config");
const { AUTH_MESSAGES } = require("./auth.constants");

async function login(email, password) {
    const user = await authRepository.findUserByEmail(email);

    if (!user) {
        throw new Error(AUTH_MESSAGES.INVALID_CREDENTIALS);
    }

    if (user.status !== "ACTIVE") {
        throw new Error(AUTH_MESSAGES.USER_INACTIVE);
    }

    const passwordMatched = await bcrypt.compare(
        password,
        user.password_hash
    );

    if (!passwordMatched) {
        throw new Error(AUTH_MESSAGES.INVALID_CREDENTIALS);
    }

    const token = jwt.sign(
        {
            id: user.id,
            email: user.email,
            role: user.role
        },
        config.jwt.secret,
        {
            expiresIn: config.jwt.expiresIn
        }
    );

    return {
        token,
        user: {
            id: user.id,
            firstName: user.first_name,
            lastName: user.last_name,
            email: user.email,
            role: user.role
        }
    };
}

module.exports = {
    login
};