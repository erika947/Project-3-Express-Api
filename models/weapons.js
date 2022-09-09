const mongoose = require('mongoose');

const weaponsSchema = new mongoose.Schema({
    info: { type: String, required: true },
    rarity: { type: String, required: true },
    tool: { type: String, required: true },
    image: { type: String, required: true },
});

const Weapons = mongoose.model('Weapons', weaponsSchema);

module.exports = Weapons;