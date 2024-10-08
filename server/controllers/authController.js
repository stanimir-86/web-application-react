
const { register, login } = require('../services/userService.js');

const authController = require('express').Router();


authController.post('/register', async (req, res) => {
    console.log(req.body);

    try {
        if (req.body.repass == undefined) {
            throw new Error('Repass not send!');
        }

        if (req.body.password !== req.body.repass) {
            throw new Error('Password dismatch!');
        }

        const token = await register(
            req.body.email,
            req.body.password,
        )

        if (!token) {
            throw new Error('Unable to register with this credential!!!');
        }
        res.status(201).json(token);
        res.end();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

});

authController.post('/login', async (req, res) => {

    try {
        const token = await login(req.body.email, req.body.password);
        if (!token) {
            throw new Error('Unable to login with this credential!!!');
        }
        res.status(201).json(token);
        res.end();
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
});

authController.get('/user', async (req, res) => {
    try {
        const user = req.user;
        res.status(200).json(user);
        res.end();
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message })
    }
});

module.exports = authController;