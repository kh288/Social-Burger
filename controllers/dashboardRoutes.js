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

// router.get('/edit/:id', withAuth, async (req, res) => {
//     try {
//         const burgerData = await Post.findByPk(req.params.id);
//         if (burgerData) {
//             const burgers = burgerData.get({ plain: true });
//             console.log(burgers);
//             res.render('edit-burger', { layout: 'dashboard', burgers, });
//         } else {
//             res.status(400).end();
//         }
//     } catch (err) {
//         console.log(err.message);

//     }
// });

router.get('/create', withAuth, (req, res) => {
    res.render('create', { layout: 'dashboard', });
});

router.get('/edit/:id', withAuth, (req, res) => {
    Burger.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id',
            'title',
            'ingredients',
            'date_created'
        ],
        include: [{
            model: User,
            attributes: ['username']
        },
        {
            model: Comment,
            attributes: ['id', 'text', 'burger_id', 'user_id', 'date_created'],
            include: {
                model: User,
                attributes: ['username']
            }
        }
        ]
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }

            const burgers = dbPostData.get({ plain: true });
            res.render('edit-burger', { burgers, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

module.exports = router;
