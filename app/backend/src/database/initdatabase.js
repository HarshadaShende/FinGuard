const fs = require("fs");
const path = require("path");

const db = require("./database");
const seedAdminUser = require("./seed");

function initializeDatabase() {
    const schemaPath = path.join(__dirname, "schema.sql");
    const schema = fs.readFileSync(schemaPath, "utf8");

    db.exec(schema, (err) => {
        if (err) {
            console.error("❌ Failed to initialize database:", err.message);
            process.exit(1);
        }

        console.log("✅ Database schema initialized.");

        seedAdminUser();
    });
}

module.exports = initializeDatabase;