// create a db file in the models directory and add the following code:

const mongoose = require('mongoose');
const { mongoURI } = require('../config');

mongoose.connect(mongoURI, { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

module.exports = db;
