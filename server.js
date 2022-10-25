const express = require('express')
const dotenv  = require('dotenv')
const listEndpoints = require('express-list-endpoints')
const connectDB = require('./config/db')

const bootcamps_routes = require('./routes/bootcamp')

connectDB()

const app = express()
app.use(express.json())
const port = 5050

app.use('/api/v1/bootcamps' , bootcamps_routes)



console.log(listEndpoints(app));
app.listen(port, console.log(`Ejecutando servidor en ${port}`))
