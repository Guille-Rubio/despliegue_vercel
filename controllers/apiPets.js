const Pets = require('../schemas/pets');



const getPets = async (req, res) => {
    try {
        const pets = await Pets.find({});
        res.status(200).json(pets)
    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: error.message });
    }
};

const createPet = async (req, res) => {
    try {
        const newPet = await Pets.create(req.body);
        res.status(201).json(newPet);

    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: error.message });
    }
};
/* 
const get = async (req, res) => {
    try {

    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: error.message });
    }
}

const get = async (req, res) => {
    try {

    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: error.message });
    }
}

const get = async (req, res) => {
    try {

    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: error.message });
    }
}

const get = async (req, res) => {
    try {

    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: error.message });
    }
}

const get = async (req, res) => {
    try {

    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: error.message });
    }
}
 */

const apiPets = {
    getPets,
    createPet
}