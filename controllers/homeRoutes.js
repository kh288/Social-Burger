const router = require('express').Router()
const { User, Burger, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const burgerData = await Burger.findAll({
            include: [
                {
                    model: User,
                },
                {
                    model: Comment,
                    include: User,
                }
            ],
        });
        const postBurgerData = burgerData.map((burger) => burger.get({ plain: true }));
        res.render('thiswillbemyhandlebarinthefuture', { layout: '', postBurgerData, logged_in: req.session.logged_in });

    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/burger/:id', async (req, res) => {
    try {
        const burgerData = await Burger.findOne(req.params.id, {
            where: { id: req.params.id },
            include: [User, {
                model: Comment,
                include: User,
            },
            ],
        });

        const postBurgerData = burgerData.get({ plain: true });

        res.render('thiswillbemyhandlebarinthefuture', { layout: '', postBurgerData, logged_in: req.session.logged_in });

    } catch (err) {
        res.status(500).json(err);
    }
})
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }
    res.render('login');
});

router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }
    res.render('signup');
});


module.exports = router;
