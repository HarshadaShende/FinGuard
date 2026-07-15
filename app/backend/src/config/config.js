const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

const config = {
    port: process.env.PORT || 3000,

    environment: process.env.NODE_ENV || "development",

    jwt: {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRES_IN
    },

    bcrypt: {
        saltRounds: Number(process.env.BCRYPT_SALT_ROUNDS) || 10
    }
};

module.exports = config;