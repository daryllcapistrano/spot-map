const mongoose = require('mongoose');

const spotSchema = new mongoose.Schema({
	title: String,
	type: String,
	body: String,
	bustFactor: Number
});

module.exports = Spot = mongoose.model('spot', spotSchema);
