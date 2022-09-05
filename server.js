//Dependencies
const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')
const Genshin = require('./models/todos.js')
const genshinData = require('./utilities/genshinData')

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
app.use(cors())

//Routes
const todosController = require('./controllers/todos.js')

app.use('/todos', todosController)

//Seed Route
app.get('/seed', async (req, res) => {
    await Genshin.deleteMany({});
    await Genshin.insertMany(genshinData);
    res.send('done!');
  });


app.listen(PORT, () => {
    console.log(`*** Listening on http://localhost:${PORT} ***`)
}) 