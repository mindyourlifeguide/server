const mongoose = require('mongoose');

const { Schema, model, ObjectId } = mongoose;

const FilmsSchema = new Schema({
	id: ObjectId,
	title: String,
	release_year: Number,
	format: String,
	stars: Array,
});

const Film = model('film', FilmsSchema);

module.exports = Film;
