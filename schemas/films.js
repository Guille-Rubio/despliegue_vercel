const { Sequelize, DataTypes } = require('sequelize');
const { db } = require('../config/sqlConnection');

const Films = db.define('Films', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING(75),
    },
    favorite: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }
},
    {
        db,
        modelName: 'Films',
        tableName: 'films',
        timestamps: 'true',
    });


Films.sync(/* { force: true } */);

module.exports = Films;

