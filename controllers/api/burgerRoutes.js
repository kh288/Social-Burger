const router = require('express').Router()
const { Burger } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newBurger = await Burger.create({
            title: req.body.title,
            ingredients: req.body.ingredients,
            user_id: req.session.user_id
        })
        res.status(200).json(newBurger);
    } catch (err) {
        res.status(400).json(err)
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const [oldBurger] = await Burger.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id
            },
        });
        if (oldBurger > 0) {
            res.status(200).end();
        } else {
            res.status(400).end();
        }
        res.status(200).json(oldBurger);
    } catch (err) {
        res.status(400).json(err)
    }
});


module.exports = router;
