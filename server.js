const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const PORT = 5000;

// test BD
const MONGODB_URI = `mongodb+srv://bohdan:1234567890@cluster0-9y4ev.mongodb.net/test?retryWrites=true&w=majority`;

// Real BD
// const MONGODB_URI = `mongodb+srv://bohdan:1234567890@cluster0-3yq8a.azure.mongodb.net/test?retryWrites=true&w=majority`;

const app = express();
mongoose.connect(MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
	console.log('DB is connected');
});

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept',
	);
	next();
});
app.use(bodyParser.json());
app.use('/api', require('./routes/routes'));

app.listen(PORT, () => {
	console.log(`server is running on port ${PORT}`);
});
