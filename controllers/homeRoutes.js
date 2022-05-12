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
        const burgers = burgerData.map((burger) => burger.get({ plain: true }));
        res.render('homepage', { layout: 'main', burgers, logged_in: req.session.logged_in });

    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/burger/:id', async (req, res) => {
    try {
        const burgerData = await Burger.findByPk(req.params.id, {
            where: { id: req.params.id },
            include: [User, {
                model: Comment,
                include: User,
            },
            ],
        });

        const postBurgerData = burgerData.get({ plain: true });

        res.render('one-burger', { layout: 'main', postBurgerData, logged_in: req.session.logged_in });

    } catch (err) {
        res.status(500).json(err);
    }
})
router.get('/login', async (req, res) => {
    try {
        if (req.session.logged_in) {
            res.redirect(`/dashboard`);
        } else {
            res.render(`login`);
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/signup', async (req, res) => {
    try {
        if (req.session.logged_in) {
            res.redirect(`/dashboard`);
        } else {
            res.render(`signup`);
        }
    } catch (error) {
        res.status(500).json(error);
    }
});


module.exports = router;
