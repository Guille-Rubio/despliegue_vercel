const mongoose = require('mongoose');
const { Schema } = mongoose;

const PetSchema = new Schema({
    petName: String,
    animal: String,
    owner: String,
    imageUrl: String
});

const Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet;