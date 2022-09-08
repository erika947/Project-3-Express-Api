const mongoose = require('mongoose');

const genshinSchema = new mongoose.Schema({
    name: { type: String, required: true },
    element: { type: String, required: true },
    weapon: { type: String, required: true },
    info: { type: String, required: true },
    portrait: { type: String, required: true},
    image: { type: String, required: true }
});

const Genshin = mongoose.model('Todo', genshinSchema);

module.exports = Genshin;