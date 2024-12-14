const express = require('express');
const router = express.Router();

const postPiezzo = require('../handlers/piezzo/PostSensorPiezzo');
const getPiezzo = require('../handlers/piezzo/GetSensorPiezzo');

router.post('/', postPiezzo);
router.get('/', getPiezzo);

module.exports = router;
