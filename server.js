const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');
const log = console.log;

//Data parsing
//using express to parse data fron the html form
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.post('/email', (req, res) => {
	//TODO
	//send e-mail
	log('Data: ', req.body);
	res.json({ message : 'Your e-mail has been received. We will contact you as soon as we can. Thank you for choosing GaleArt!'})
}); 

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'contact.html'));
});
app.listen(PORT, () => log('Server starts on PORT, ', 8080));