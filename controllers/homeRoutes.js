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

router.get('/burger/:id', withAuth, async (req, res) => {
    try {
        const burgerData = await Burger.findByPk(req.params.id, {
            include: [{
                model: User,
                attributes: [`username`]
            }, {
                model: Comment,
                include: [{
                    model: User,
                    attributes: [`username`]
                }]
            }]
        });

        const burger = burgerData.get({ plain: true });

        res.render('one-burger', { layout: 'main', burger, logged_in: req.session.logged_in });

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
