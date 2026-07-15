const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const DB_PATH = path.join(__dirname, "../../finguard.db");

const db = new sqlite3.Database(DB_PATH, (err) => {
    if (err) {
        console.error("❌ Failed to connect to SQLite database:", err.message);
        process.exit(1);
    }

    console.log("✅ SQLite database connected.");
});

module.exports = db;