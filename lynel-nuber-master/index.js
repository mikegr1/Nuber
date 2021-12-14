const express = require('express');
const cors = require('cors');
const database = require('./database/database');
require('dotenv').config();

const app = express();

// connect to Database
database.connectDatabase();

// init Middleware
app.use(express.json({ extended: false }));
app.use(cors());

// Define Routes
app.use('/driver', require('./routes/drivers'));
app.use('/rider', require('./routes/riders'));
app.use('/admin', require('./routes/admins'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
