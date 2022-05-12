const router = require('express').Router()
const { User } = require('../../models');
// const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
    try {
        const newUser = await User.create({
            username: req.body.username,
            password: req.body.password
        });
        req.session.save(() => {
            req.session.user_id = newUser.id;
            req.session.logged_in = true
            res.status(200).json(newUser);
        })
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { username: req.body.username } });
        if (!userData) {
            res.status(400).json({ message: 'Incorrect username, please try again' });
            return;
        }
        const validPassword = await userData.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password, please try again' });
            return;
        }
        req.session.save(() => {
            req.session.user_id = userData.id;
            // req.session.username = userData.username;
            req.session.logged_in = true;
            res.json({ user: userData, message: 'Welcome to Social Burger!' });
        });
    } catch (err) {
        res.status(400).json(err);
        console.log(err.message)
    }
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
})


module.exports = router;
