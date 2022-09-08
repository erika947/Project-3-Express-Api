const mongoose = require('mongoose');

const weaponsSchema = new mongoose.Schema({
    claymore: { type: String, required: true },
    claymoreImage: { type: String, required: true },
    polearm: { type: String, required: true },
    polearmImage: { type: String, required: true },
    
});

const Weapons = mongoose.model('Weapons', weaponsSchema);

module.exports = Weapons;