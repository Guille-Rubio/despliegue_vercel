const express = require('express');
const apiFilms = express.Router();
const apiControllers = require('../controllers/apiFilms');


apiFilms.get('/', apiControllers.getAllFilms);
apiFilms.get('/favorite', apiControllers.getFavouriteFilms);
apiFilms.post('/', apiControllers.saveFilm);
apiFilms.patch('/', apiControllers.saveFilmAsFavorite);



module.exports = apiFilms;
