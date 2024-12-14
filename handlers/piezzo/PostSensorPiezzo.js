const Piezzo = require('../../models/Piezzo');

module.exports = async (req, res) => {
    try {
        const { vibrationLevel } = req.body;

        if (vibrationLevel === undefined) {
            return res.status(400).json({ error: "Vibration level is required" });
        }

        const newRecord = await Piezzo.create({ vibrationLevel });
        res.status(201).json({ message: "Piezzo data saved successfully", data: newRecord });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
};
