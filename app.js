const express = require ("express")
const bodyParser = require("body-parser")
const dotenv = require ("dotenv")
const mongoose = require("mongoose")
const connectDB = require('./config/db')

//Initialize Express
const app = express()
app.use(bodyParser.json())
//Routes
// app.get('/', (req, res) => {
//     console.log("Nathan is a prophet")
//     res.send("Nathan is a prophet")
// })
//Load Config
dotenv.config({path: './config/config.env'});
connectDB()

//Routes
app.use('/', require('./routes/index'))


app.listen(3000);