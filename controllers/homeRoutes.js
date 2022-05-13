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
                },
            ],
        });
        let burgers = burgerData.map((burger) => burger.get({ plain: true }));
        // console.log(JSON.parse("["+burgers[0].ingredients+"]"));
        // let burgers = burgersMapped;

        // for (var i = 0; i < burgers.length; i++) {
        //     burgers[i] = burgers[i].JSON.parse("["+burgers[0].ingredients+"]")
        // }
        // console.log(burgers);
        
        res.render('homepage', { layout: 'main', burgers, logged_in: req.session.logged_in });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/burger/:id', withAuth, async (req, res) => {
    try {
        const burgerData = await Burger.findOne({
            where: { id: req.params.id },
            include: [
                User,
                {
                    model: Comment,
                    include: [User],
                },
            ]
        });

        if (burgerData) {
            const burger = burgerData.get({ plain: true });
            console.log(burger);
            res.render('one-burger', { layout: 'main', burger, logged_in: req.session.logged_in });
        } else {
            res.status(404).end();
        }
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
