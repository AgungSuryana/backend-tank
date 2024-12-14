const Dht22 = require('../../models/Dht22');

module.exports = async (req, res) => {
    try {
        const { temperature, humidity } = req.body;

        if (temperature === undefined || humidity === undefined) {
            return res.status(400).json({ error: "Temperature and humidity are required" });
        }

        const newRecord = await Dht22.create({ temperature, humidity });
        res.status(201).json({ message: "DHT22 data saved successfully", data: newRecord });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
};
