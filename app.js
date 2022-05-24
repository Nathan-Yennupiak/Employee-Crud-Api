const express = require ("express")
const dotenv = require ("dotenv")
const mongoose = require("mongoose")
const connectDB = require('./config/db')

//Initialize Express
const app = express()

//Routes
app.get('/', (req, res) => {
    console.log("Nathan is a prophet")
    res.send("Nathan is a prophet")
})
//Load Config
dotenv.config({path: './config/config.env'});
connectDB()


app.listen(3000);