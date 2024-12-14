const mongoose = require('mongoose');

const dbURI = process.env.MONGODB_URI || "mongodb+srv://davinarisandi:itenasjuara1_@davinarisandi.q5pzj.mongodb.net/tank?retryWrites=true&w=majority";
let isConnected = false;

/**
 * Fungsi untuk koneksi ke database MongoDB
 */
async function connectToDatabase() {
    if (isConnected) return;
    await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
    isConnected = true;
    console.log("MongoDB connected successfully");
}

module.exports = connectToDatabase;