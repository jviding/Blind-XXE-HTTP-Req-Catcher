const express = require('express')
const app = express()
const port = process.env.PORT

var arr = []

app.get('*', (req, res) => {
	const response = req.protocol + '://' + req.get('host') + req.originalUrl
	arr.push(response)
	res.send(arr)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))