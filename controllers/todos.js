const express = require('express')
const router = express.Router()
const Todos = require('../models/todos.js');

router.get('/', (req, res) => {
    res.send('index')
})

router.post('/', (req, res) => {
    Todos.create(req.body, (err, createdTodo) => {
        res.json(createdTodo);
    });
});

module.exports = router