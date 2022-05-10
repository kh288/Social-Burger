const router = require('express').Router()
const { User, Burger, Comment } = require('../models');
const withAuth = require('../utils/auth');


module.exports = router;
