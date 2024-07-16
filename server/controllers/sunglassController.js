const sunglassController = require('express').Router();

const { getAll } = require('../services/glassService.js');

sunglassController.get('/', async (req, res) => {

    try {
        const glasess = await getAll();
        res.status(200).json(glasess);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});



module.exports = sunglassController;
