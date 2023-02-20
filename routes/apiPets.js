const express = require('express');
const apiPets = express.Router();
const apiControllers = require('../controllers/apiFilms');


apiPets.get('/', apiControllers.getAllFilms);
apiPets.get('/favorite', apiControllers.getFavouriteFilms);
