const express = require('express');
const router = express.Router();
const Driver = require('../models/DriverModel');

router.get('/', (req, res) => {
	res.send({ msg: 'this is a test' });
});

module.exports = router;
