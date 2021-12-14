const express = require('express');
const router = express.Router();
const Admin = require('../models/AdminModel');
const Rider = require('../models/RiderModel');

// @Route	Post /admin/newRider
// @desc	Adds new rider to database

router.post('/newRider', async (req, res) => {
	const { firstName, lastName, email, password } = req.body;

	try {
		const rider = new Rider({
			firstName,
			lastName,
			email,
			password,
		});

		await rider.save();

		return res.json(rider);
	} catch (error) {
		console.error(error.message);
		return res.status(500).send('A server error has occured...');
	}
});

// @Route	Delete /admin/deleteRider
// @desc	Delete a existing rider from the database

router.delete('/deleteRider', async (req, res) => {
	const { email } = req.body;

	try {
		const user = await Rider.findOne({ email: email });

		if (!user) {
			return res.status(400).json({ msg: 'Invalid input' });
		}

		await Rider.deleteOne({ email: email });

		return res.json({ msg: `Rider with the email: ${email} has been deleted` });
	} catch (error) {
		console.error(error.message);
		return res.status(500).send('A server error has occured...');
	}
});

module.exports = router;
