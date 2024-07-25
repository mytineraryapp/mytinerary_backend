require("dotenv").config();
const express = require("express");
const app = express();
const { PORT } = process.env;
const routes = require('./routes/index')

// app.get("/", (req, res) => {
//     res.send("test route") // working
// })

app.use('/', routes)
app.use((req, res) => {res.status(404).json({message: "Page does not exist."})})


app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
