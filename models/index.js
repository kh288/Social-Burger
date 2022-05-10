const User = require('./User');
const Burger = require('./Burger');
const Comment = require('./Comment');

// User to comment relation
User.hasMany(Comment, {
    foreignKey: 'user_id'
});
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// User to Burger relation
User.hasMany(Burger, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
Burger.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// Burger to comment relation
Burger.hasMany(Comment, {
    foreignKey: 'burger_id',
    onDelete: 'CASCADE'
});
Comment.belongsTo(Burger, {
    foreignKey: 'burger_id',
    onDelete: 'CASCADE'
});

module.exports = { User, Burger, Comment };
