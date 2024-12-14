const mongoose = require('mongoose');

const dht22Schema = new mongoose.Schema({
    temperature: { type: Number, required: true }, // Suhu
    humidity: { type: Number, required: true },    // Kelembapan
    timestamp: { type: Date, default: Date.now },  // Waktu pencatatan
});

module.exports = mongoose.model('Dht22', dht22Schema);
