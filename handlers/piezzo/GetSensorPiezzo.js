const Piezzo = require('../../models/Piezzo');

module.exports = async (req, res) => {
    try {
        const data = await Piezzo.find().sort({ timestamp: -1 });
        res.status(200).json({ message: "Piezzo data retrieved successfully", data });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
};
