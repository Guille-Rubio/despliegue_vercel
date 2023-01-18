const Films = require('../schemas/films');

const getAllFilmsView = async (req, res) => {
    try {
        const allFilmsRaw = await Films.findAll();
        console.log(allFilmsRaw)
        const allFilms = allFilmsRaw.map((elm, i) => {
            return elm.dataValues.title
        });
        res.status(200).render('film.pug', { allFilms });
    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: error.message });
    }
};

const getFavouriteFilmView = async (req, res) => {
    try {
        const favoriteFilmsRaw = await Films.findAll({ where: { favorite: true } })

        const favoriteFilms = favoriteFilmsRaw.map((elm, i) => {
            return elm.dataValues.title
        });
        res.status(200).render('favorite.pug', { favoriteFilms });
    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: error.message });
    }
};

const filmsControllers = {
    getAllFilmsView,
    getFavouriteFilmView
};

module.exports = filmsControllers;