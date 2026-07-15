const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authRepository = require("./auth.repository");
const config = require("../../config/config");
const { AUTH_MESSAGES } = require("./auth.constants");
const ApiError = require("../../errors/ApiError");

async function login(email, password) {
    const user = await authRepository.findUserByEmail(email);

    if (!user) {
        throw new ApiError(401, AUTH_MESSAGES.INVALID_CREDENTIALS);
    }

    if (user.status !== "ACTIVE") {
        throw new ApiError(403, AUTH_MESSAGES.ACCOUNT_INACTIVE);
    }

    const passwordMatched = await bcrypt.compare(
        password,
        user.password_hash
    );

    if (!passwordMatched) {
        throw new ApiError(401, AUTH_MESSAGES.INVALID_CREDENTIALS);
    }

    const token = generateToken(user);

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

async function getProfile(userId) {

    const user = await authRepository.findUserById(userId);

    if (!user) {
        throw new ApiError(404, "User not found.");
    }

    return {
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        role: user.role,
        status: user.status
    };
}

async function refreshToken(userId) {

    const user = await authRepository.findUserById(userId);

    if (!user) {
        throw new ApiError(404, "User not found.");
    }

    const token = generateToken(user);

    return {
        token
    };
}

function generateToken(user) {

    return jwt.sign(
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
}

module.exports = {
    login,
    getProfile,
    refreshToken
};