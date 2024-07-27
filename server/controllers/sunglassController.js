const sunglassController = require('express').Router();

const validateSunglassData = require('../middlewares/validationSunglassData.js');
const Sunglasses = require('../models/Sunglasses.js');
const { create } = require('../models/Sunglasses.js');
const { getAll, getByUserId, getMyLikes, getById, update, deleteById, likeSunglasses, deleteLikes } = require('../services/glassService.js');

sunglassController.get('/', async (req, res) => {

    try {
        const glasess = await getAll();
        res.status(200).json(glasess);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

sunglassController.get('/my-glasses', async (req, res) => {
    const glasses = await getByUserId(req.user._id);
    res.status(200).json(glasses);
});

// sunglassController('/my-likes', async (req, res) => {
//     try {
//         const glasses = await getMyLikes(req.user._id);
//         res.status(200).json(glasses);
//     } catch (error) {
//         console.log(error);
//         res.status(400).json({ error: error.message });
//     }
// });

sunglassController.get('/:id', async (req, res) => {
    try {
        const glasses = await getById(req.params.id);
        if (!glasses) {
            throw new Error('Glases does not exist');
        }
        return res.status(200).json(glasses)
    } catch (error) {
        res.status(400).json({ error });
    }

});
sunglassController.post('/', validateSunglassData, async (req, res) => {
    try {

        
        const data = Object.assign({ _ownerId: req.user._id }, req.body);

        const glasses = await Sunglasses.create(data);
        res.json(glasses);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
    // res.end();
});
sunglassController.put('/:id', async (req, res) => {
    try {
        const glasses = await getById(req.params.id);
        if (req.user._id != glasses._ownerId._id) {
            return res.status(403).json({ message: 'You cannot modify this record!' });
        }
        const result = await update(req.params.id, req.body);
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        res.status(400).json({ error: err.message });
    }
});

sunglassController.delete('/:id', async (req, res) => {
    try {
        const glasses = await getById(req.params.id);
        if (req.user._id != glasses._ownerId._id) {
            return res.status(403).json({ err: err.message });
        }
        await deleteById(req.params.id);
        res.status(200).send({ message: `Item with name ${glasses.name} deleted successfully.` });
    } catch (err) {
        console.log(err);
        res.status(400).json({ err: err.message });
    }
});

sunglassController.get('/like/:id', async (req, res) => {
    try {
        const glasses = await getById(req, params.id);
        if (glasses._ownerId._id != req.user._id
            && glasses.likes.map(x => x.includes(req.user?._id) == false)
        ) {
            try {
                await likeSunglasses(req.params.id, req.user._id);
                const glasses = await getById(req.params.id);
                return res.status(200).json(glasses)
            } catch (error) {
                res.status(400).json({ err: error.message });
            }
        }
    } catch (error) {
        res.status(400).json({ err: error.message })
    }
});

sunglassController.get('/unlike/:id', async (req, res) => {
    try {
        const glasses = await getById(req.params.id);
        const result = await deleteLikes(glasses._id, req.user._id);
        return res.status(200).json(result)
    } catch (error) {
        res.status(400).json({ err: error.message })
        console.log(error);
    }
});


module.exports = sunglassController;
