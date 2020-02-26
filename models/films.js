const mongoose = require('mongoose');

const { Schema, model, ObjectId } = mongoose;

const FilmsSchema = new Schema({
	id: ObjectId,
	title: String,
	releaseYear: Number,
	format: String,
	stars: Array,
});

const Films = model('Films', FilmsSchema);

module.exports = Films;
