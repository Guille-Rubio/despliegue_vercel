require('dotenv').config();
const express = require('express');
const app = express();
require('pg');
const {connectMongoDb}= require('./config/mongoDbConnection');
const path = require('path');
require('./utils/scraping/scraper');
const PORT = process.env.PORT || 3000;

const api = require('./routes/api');
const films = require('./routes/films');
const scrap = require('./routes/scrap');
const pets = require('./routes/pets');

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: false }));
app.use(express.static('public'))
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.use('/api', api);
app.use('/film', films);
app.use('/scrap', scrap);
app.use('/pets',pets);

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
  await connectMongoDb();
});




