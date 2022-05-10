const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Burger extends Model {}

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
        type: DataTypes.ARRAY,
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
