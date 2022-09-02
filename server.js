//Dependencies
const express = require('express')
const mongoose = require('mongoose')

//Environment variables
const app = express()
const mongoURI = process.env.MONGO_URI
const PORT = process.env.PORT || 3001

const db = mongoose.connection

// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true },
    () => console.log('MongoDB connection established:', mongoURI)
)

// Error / Disconnection
db.on('error', err => console.log(err.message + ' is Mongod not running?'))
db.on('disconnected', () => console.log('mongo disconnected'))

// Middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(express.static('public'))

//Routes
const todosController = require('./controllers/todos')
app.use('/todos', todosController)


app.listen(PORT, () => {
    console.log(`*** Listening on http://localhost:${PORT} ***`)
}) 