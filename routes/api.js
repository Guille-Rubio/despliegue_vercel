const express = require('express');
const api = express.Router();


api.get('/', (req, res) => {
    res.status(200).json({ msg: "Hello World" });
});

api.get('/hello', (req, res) => {
    res.status(200).json({ msg: "route to /hello is ok" });
});


module.exports = api;
