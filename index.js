require('dotenv').config();
const express = require('express');
const app = express();
require('pg');
const path = require('path');
const PORT = process.env.PORT || 3000;

const api = require('./routes/api');
const films = require('./routes/films');

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: false }));
app.use('/favicon.ico', express.static('public/favicon.ico'));
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.use('/api', api);
app.use('/film', films);

app.get('/', (req, res) => {
  try {
    res.status(200).render('index.pug');
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: error.message });
  }
});

app.get('/send-file', (req, res) => {
  try {
    res.status(200).sendFile(__dirname + '/views/index.html');
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: error.message });
  }
});

app.listen(PORT, async () => {
  console.log(`Server is running in PORT ${PORT}`)
});




