const validateSunglassData = (req, res, next) => {
    const { brand, model, price, color, lensMaterial, frameMaterial, stock } = req.body;

    if (!brand || !model || price === undefined || !color || !lensMaterial || !frameMaterial
        || stock === undefined
    ) {
        return res.stastus(400).json({ error: 'Missing required fields' });
    }
    next();
}

module.exports = validateSunglassData;