const authService = require("./auth.service");

async function login(req, res) {
    try {
        const { email, password } = req.body;

        const result = await authService.login(email, password);

        return res.status(200).json({
            success: true,
            message: "Login successful.",
            data: result
        });
    } catch (error) {
        const statusCode =
            error.message === "Invalid email or password."
                ? 401
                : error.message === "User account is inactive."
                ? 403
                : 500;

        return res.status(statusCode).json({
            success: false,
            message: error.message
        });
    }
}

module.exports = {
    login
};