const Films = require('../schemas/films');


const getAllFilms = async (req, res) => {
    const allFilms = await Films.findAll();
    res.status(200).json(allFilms);
};


const getFavouriteFilms = async (req, res) => {
    try {
        const favFilms = await Films.findAll({ where: { favorite: true } });
        res.status(200).json(favFilms);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
};

const saveFilm = async (req, res) => {
    try {
        const newFilm = await Films.create({ title: req.body.title });
        res.status(201).json({ created: newFilm })
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
};

const saveFilmAsFavorite = async (req, res) => {
    try {
        const editFilm = await Films.update({ favorite: true }, { where: { title: req.body.title } });
        res.status(200).json({ edited: editFilm });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
};




const apiControllers = {
    getAllFilms,
    getFavouriteFilms,
    saveFilm,
    saveFilmAsFavorite
};

module.exports = apiControllers;