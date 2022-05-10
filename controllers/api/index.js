const router = require('express').Router();

const userRoutes = require('./userRoutes');
const burgerRoutes = require('./burgerRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/user', userRoutes);
router.use('/burger', burgerRoutes);
router.use('/comment', commentRoutes);




module.exports = router;