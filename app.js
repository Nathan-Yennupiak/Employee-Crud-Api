const express = require ("express")
const bodyParser = require("body-parser")
const dotenv = require ("dotenv")
const mongoose = require("mongoose")
const connectDB = require('./config/db')

//Initialize Express
const app = express()
app.use(bodyParser.json())

dotenv.config({path: './config/config.env'});
connectDB()

//Routes.
app.use('/', require('./routes/index'))


app.listen(process.env.PORT || 3000);