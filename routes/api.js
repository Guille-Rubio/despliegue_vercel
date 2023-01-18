const express = require('express');
const api = express.Router();
const apiControllers = require('../controllers/api');


api.get('/', apiControllers.getAllFilms);
//api.get('/favorite', apiControllers.getFavouriteFilms);
//api.post('/', apiControllers.saveFilm);
//api.patch('/', apiControllers.saveFilmAsFavorite);



module.exports = api;
