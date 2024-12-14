const mongoose = require('mongoose');

const piezzoSchema = new mongoose.Schema({
    vibrationLevel: { type: Number, required: true }, // Tingkat getaran
    timestamp: { type: Date, default: Date.now },    // Waktu pencatatan
});

module.exports = mongoose.model('Piezzo', piezzoSchema);
