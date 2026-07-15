const bcrypt = require("bcrypt");
const db = require("./database");
const config = require("../config/config");

async function seedAdminUser() {
    const adminEmail = "admin@finguard.com";

    db.get(
        "SELECT id FROM users WHERE email = ?",
        [adminEmail],
        async (err, row) => {
            if (err) {
                console.error("❌ Failed to check admin user:", err.message);
                return;
            }

            if (row) {
                console.log("ℹ️ Admin user already exists.");
                return;
            }

            try {
                const hashedPassword = await bcrypt.hash(
                    "Admin@123",
                    config.bcrypt.saltRounds
                );

                db.run(
                    `
                    INSERT INTO users
                    (
                        first_name,
                        last_name,
                        email,
                        password_hash,
                        role,
                        status
                    )
                    VALUES (?, ?, ?, ?, ?, ?)
                    `,
                    [
                        "System",
                        "Administrator",
                        adminEmail,
                        hashedPassword,
                        "ADMIN",
                        "ACTIVE",
                    ],
                    function (err) {
                        if (err) {
                            console.error("❌ Failed to seed admin user:", err.message);
                            return;
                        }

                        console.log("✅ Default admin user created.");
                        console.log("📧 Email    : admin@finguard.com");
                        console.log("🔑 Password : Admin@123");
                    }
                );
            } catch (error) {
                console.error("❌ Failed to hash password:", error.message);
            }
        }
    );
}

module.exports = seedAdminUser;