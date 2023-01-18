const express = require('express');
const films = express.Router();
const filmsControllers = require('../controllers/films');

films.get('/', filmsControllers.getAllFilmsView);
films.get('/favorite', filmsControllers.getFavouriteFilmView);
films.get('/scrap', filmsControllers.scrapFilms);

module.exports = films;