const authController = require('express').Router();


authController.get('/register', (req, res) => {
    // res.render('register', {
    //     title: 'Register Page'
    // });
    res.json({ message: "Register" })

});

authController.post('/register', async (req, res) => {

    // const token = await register(req.body.username, req.body.password);
    const token = (req.body);
    console.log(token);
    res.json({ message: "Register Post request OK" })

    // res.redirect('/auth/register')
});

module.exports = authController;