const express = require('express');
const request = require('request');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

const API = 'http://www.astropical.space/astrodb/api.php?';

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(`${__dirname}/client/build`));
};

app.get('/api/stars', (req, res) => {

	request(`${API}table=stars&which=magnitude&limit=4.97&format=json`, (err, res, body) => {
		if (err) { return console.log(err); }
	})
	.pipe(res);

});

app.listen(port, () => console.log(`Listening on port ${port}`));