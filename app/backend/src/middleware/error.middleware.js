const ApiResponse = require("../utils/apiResponse");

function errorHandler(err, req, res, next) {

    console.error(err);

    const statusCode = err.statusCode || 500;

    return ApiResponse.error(
        res,
        err.message || "Internal Server Error",
        statusCode
    );
}

module.exports = errorHandler;