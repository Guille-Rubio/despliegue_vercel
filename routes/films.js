const express = require('express');
const films = express.Router();

films.get('/', (req, res) => {
    try {
        res.status(200).render('film.pug', { data: "Batman" });
    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: error.message });
    }
});

films.get('/favorite', (req, res) => {
    try {
        res.status(200).render('film.pug', { data: "Superman" });
    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: error.message });
    }
});

module.exports = films;