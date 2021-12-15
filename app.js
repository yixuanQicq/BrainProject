const express = require("express");
const app = express();

const path = require('path');

const host = `0.0.0.0`;
const port = process.env.PORT || 8000;

if (process.env.NODE_ENV === "production") {
    app.use(express.static("dist"));
    app.get("*", (req, res) => {
        req.sendFile(path.join(__dirname, "dist", "index.html"));
    })
}

app.get("*", (req, res, next) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(port, host, (err) => {
    if (err) return console.log(err);
    console.log("Server running on port: ", port);
})
