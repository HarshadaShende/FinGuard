const authService = require("./auth.service");
const ApiResponse = require("../../utils/apiResponse");
const { AUTH_MESSAGES } = require("./auth.constants");

async function login(req, res, next) {
    try {
        const { email, password } = req.body;

        const result = await authService.login(email, password);

        return ApiResponse.success(
            res,
            AUTH_MESSAGES.LOGIN_SUCCESS,
            result
        );
    } catch (error) {
        next(error);
    }
}

async function profile(req, res, next) {
    try {
        const profile = await authService.getProfile(req.user.id);

        return ApiResponse.success(
            res,
            AUTH_MESSAGES.PROFILE_FETCH_SUCCESS,
            profile
        );
    } catch (error) {
        next(error);
    }
}

async function refreshToken(req, res, next) {
    try {
        const token = await authService.refreshToken(req.user.id);

        return ApiResponse.success(
            res,
            AUTH_MESSAGES.TOKEN_REFRESH_SUCCESS,
            token
        );
    } catch (error) {
        next(error);
    }
}

async function logout(req, res, next) {
    try {

        return ApiResponse.success(
            res,
            AUTH_MESSAGES.LOGOUT_SUCCESS,
            null
        );

    } catch (error) {
        next(error);
    }
}

module.exports = {
    login,
    profile,
    refreshToken,
    logout
};