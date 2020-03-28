const express = require('express');
const app = express();
const port = 3000;
let quotes = require('random-movie-quotes'); 

app.use(express.static('public'));

app.get('/quote', (req, res) => {
  res.send({
    quote: quotes.getQuote()
  })
});


app.listen(port, () => console.log(`Awesome app started on http://localhost:${port} !`));