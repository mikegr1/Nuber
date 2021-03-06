const mongoose = require('mongoose');

const RiderSchema = mongoose.Schema({
	firstName: {
		type: String,
		required: true,
		trim: true,
	},
	lastName: {
		type: String,
		required: true,
		trim: true,
	},
	email: {
		type: String,
		required: true,
		trim: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	rating: {
		type: Number,
		default: 2,
	},
});

module.exports = mongoose.model('rider', RiderSchema);
