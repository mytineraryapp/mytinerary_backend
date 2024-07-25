require("dotenv").config();
const express = require("express");
const app = express();
const { PORT } = process.env;
const routes = require('./routes/index')
const cors = require("cors")

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use('/', routes)
app.use((req, res) => {res.status(404).json({message: "Page does not exist."})})


app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
//test test