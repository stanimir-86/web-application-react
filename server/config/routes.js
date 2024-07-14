const authController = require("../controllers/authController.js");
const sunglassController = require("../controllers/sunglassController.js");
const router = require('express').Router();

router.get('/', (req, res) => {

    res.json({ message: "Service in operation" })
});
router.use('/auth', authController);
router.use('/sunglasses', sunglassController);
module.exports = router;
