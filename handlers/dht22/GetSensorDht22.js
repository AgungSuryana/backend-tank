const Dht22 = require('../../models/Dht22');

module.exports = async (req, res) => {
    try {
        const data = await Dht22.find().sort({ timestamp: -1 }); // Urutkan dari data terbaru
        res.status(200).json({ message: "DHT22 data retrieved successfully", data });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
};
