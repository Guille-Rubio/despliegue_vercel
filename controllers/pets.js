const Pet = require('../schemas/pets');

const createPet = async (req, res) => {
    try {
        const petData = req.body;
        const newPet = await Pet.create(petData)
        res.status(201).json(newPet);
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
};

const getPets = async (req, res) => {
    try {
        const pets = await Pet.find({}).select('-_id -__v');
        console.log(pets);
        res.status(200).render('pets', {pets})
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
};

const petsControllers = {
    createPet,
    getPets
};

module.exports = petsControllers;