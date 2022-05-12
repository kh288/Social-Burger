const router = require('express').Router()
const { User, Burger, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const burgerData = await Burger.findAll({
            where: { 'user_id': req.session.user_id },
            include: User
        });
        const burgers = burgerData.map((burger) => burger.get({ plain: true }));
        console.log(burgers);
        res.render('all-my-burgers', { layout: 'dashboard', burgers, });
    } catch (err) {
        res.redirect('login');
    }
});

router.get('/edit/:id', withAuth, async (req, res) => {
    try {
        const burgerData = await Post.findByPk(req.params.id);
        if (burgerData) {
            const burgers = burgerData.get({ plain: true });
            console.log(burgers);
            res.render('edit-burger', { layout: 'dashboard', burgers, });
        } else {
            res.status(400).end();
        }
    } catch (err) {
        res.redirect('login');
    }
});

router.get('/create', withAuth, (req, res) => {
    res.render('one-burger', { layout: 'dashboard', });
    try {
        if (req.session.logged_in) {
            res.redirect(`/create`);
        } else {
            res.redirect('login')
        }
    } catch (error) {
        res.status(500).json(error);
    }
});


module.exports = router;
