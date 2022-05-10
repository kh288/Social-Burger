const router = require('express').Router()
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.findAll({
            include: User
        });
        const comments = commentData.map((comment) => comment.get({ plain: true }));
        console.log(comments);
        res.render('thiswillbemyhandlebarinthefuture', { comments, logged_in: req.session.logged_in });
    } catch (err) {
        res.status(500).json(err);
    }
});


router.post('/', withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body, user_id: req.session.user_id,
        });
        res.json(newComment);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const oldComment = await Comment.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id
            }
        })
        res.status(200).json(oldComment);
    } catch (err) {
        res.status(400).json(err)
    }
});





module.exports = router;
