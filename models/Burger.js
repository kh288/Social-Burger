const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Burger extends Model {}
// Burger model
// ingredients key works like this:
// [23,10,1]
// [0, 1, 2] represents the z element
Burger.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
    },
    ingredients: {
        type: DataTypes.STRING,
    },
    date_created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
        },
    },
},{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'burger',
});

module.exports = Burger;

