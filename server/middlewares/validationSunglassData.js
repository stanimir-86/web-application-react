const validateSunglassData = (req, res, next) => {
    const { brand, model, price, color, description, images, } = req.body;

    if (!brand || !model || price === undefined || !images || !color || !description
    ) {
        return res.status(400).json({ error: 'Invalid data' });
    }
    next();
}

module.exports = validateSunglassData;