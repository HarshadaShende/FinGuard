const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
    res.send("Welcome to FinGuard API")
});

app.listen(PORT, () => {
    console.log(`FinGuard Backend is running on port ${PORT}`)
});