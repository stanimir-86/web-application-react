const authController = require("../controllers/authController.js");
const router = require('express').Router();

router.get('/', (req, res) => {

    res.json({ message: "Service in operation" })
});
router.use('/auth', authController);
module.exports = router;
