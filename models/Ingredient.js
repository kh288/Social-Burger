const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Ingredient extends Model {}
// Burger model
// ingredients key works like this:
// [23,10,1]
// [0, 1, 2] represents the z element
Ingredient.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    burger_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'burger',
            key: 'id',
        },
    },
},{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'ingredient',
});

module.exports = Ingredient;

