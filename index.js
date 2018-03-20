import express from "express";
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.append("X-Custom-Header", "My custom value!");
	res.send('Hello World!');
});

app.listen(PORT, () => console.log('Example app listening on port 3000!'))