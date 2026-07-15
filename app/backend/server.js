const app = require("./src/app");
const config = require("./src/config/config");
const initializeDatabase = require("./src/database/initDatabase");

// Initialize SQLite database
initializeDatabase();

// Start Express server
app.listen(config.port, () => {
    console.log(`🚀 FinGuard Backend is running on port ${config.port}`);
});