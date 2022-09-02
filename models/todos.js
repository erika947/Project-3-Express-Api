const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    name: { type: String, required: true },
    element: { type: String, required: true },
    weapon: { type: String, required: true },
    info: { type: String, required: true },
    image: { type: String, required: true }
});

const Todos = mongoose.model('Todo', todoSchema);

module.exports = Todos;