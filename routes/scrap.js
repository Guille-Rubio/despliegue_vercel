const express = require('express');
const films = express.Router();
const scrapers = require('../controllers/scrap');


films.get('/', scrapers.scrapProducts);


module.exports = films;