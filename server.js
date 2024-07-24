require("dotenv").config();
const express = require("express");
const app = express();
const { PORT } = process.env;

app.get("/", (req, res) => {
    res.send("test route") // working
})

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
