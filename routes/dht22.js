const express = require('express');
const router = express.Router();

const postDht22 = require('../handlers/dht22/PostSensorDht22');
const getDht22 = require('../handlers/dht22/GetSensorDht22');

router.post('/', postDht22);
router.get('/', getDht22);

module.exports = router;
