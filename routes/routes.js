const express = require('express');

const router = express.Router();
const Films = require('../models/films');

router.get('/films', (req, res) => {
	Films.find({}).then(film => {
		res.send(film);
	});
});

router.post('/films', (req, res) => {
	Films.create(req.body).then(film => {
		res.send(film);
	});
});

router.delete('/films/:id', (req, res) => {
	Films.deleteOne({ _id: req.params.id }).then(film => {
		res.send(film);
	});
});

module.exports = router;
