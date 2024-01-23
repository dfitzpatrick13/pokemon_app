const express = require('express');
const app = express();
const port = 3000;

const pokemon = require('./models/pokemon'); 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
  res.send('Welcome to the Pokemon App!');
});

app.get('/pokemon', (req, res) => {
  res.render('views/Index', { pokemon });
});

app.get('/pokemon/:id', (req, res) => {
  res.render('views/Show', { pokemon });
});
