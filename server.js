const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'))
app.use('/mario/', express.static('public/js/sprites/Mario/'))
app.use('/scripts', express.static(`${__dirname}/node_modules`))

app.listen(port,() => {
	console.log('jamming out on %d', port);
})

