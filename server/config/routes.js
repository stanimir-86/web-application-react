const router = require('express').Router();
const authController = require("../controllers/authController.js");
const sunglassController = require("../controllers/sunglassController.js");

router.get('/', (req, res) => {

    res.json({ message: "Service in operation" })
});
router.use('/auth', authController);
router.use('/sunglasses', sunglassController);
module.exports = router;
