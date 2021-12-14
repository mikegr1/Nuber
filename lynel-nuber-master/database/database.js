const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGO_URI;

const connectDatabase = async () => {
	try {
		await mongoose.connect(uri, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useUnifiedTopology: true,
		});

		console.log('Connection to database is secure...');
	} catch (error) {
		console.error(error.message);
		process.exit(1);
	}
};

exports.connectDatabase = connectDatabase;
