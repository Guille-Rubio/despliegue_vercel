const express = require('express');
const pets = express.Router();
const petsControllers = require('../controllers/pets');


pets.get('/', petsControllers.getPets);
pets.post('/', petsControllers.createPet);


module.exports = pets;