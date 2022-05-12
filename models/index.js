const User = require('./User');
const Burger = require('./Burger');
const Comment = require('./Comment');

User.hasMany(Burger, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Burger.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
// User to comment relation
Burger.hasMany(Comment, {
    foreignKey: 'burger_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
});
Comment.belongsTo(Burger, {
    foreignKey: 'burger_id',
    
});


// User to Burger relation

// Burger to comment relation


module.exports = { User, Burger, Comment };
