const mongoose = require("mongoose");

const connectMongoDb = async () => {

    if (process.env.NODE_ENV === 'production') {
        mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            ssl: true
        });

        const db = mongoose.connection;//objeto de la conexion

        // Eventos
        db.on("error", error => console.log(error));
        db.once("open", () => console.log("connection to db established"))
    }

    if (process.env.NODE_ENV === 'development') {
        mongoose.connect('mongodb://127.0.0.1:27017/movieApp')

        const db = mongoose.connection;//objeto de la conexion

        // Eventos
        db.on("error", error => console.log(error));
        db.once("open", () => console.log("connection to db established"))

    }
}

module.exports = { mongoose, connectMongoDb };
