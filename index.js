const express = require("express");
const app = express()

app.get('/', (req, res) => {
	res.append("X-Custom-Header", "My custom value!");
	res.send('Hello World!');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))