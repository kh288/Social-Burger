const sequelize = require(`../config/connection`);
const { User, Comment, Burger } = require(`../models`);

const userData = require(`./userData.json`);
const burgerData = require(`./burgerData.json`);
const commentData = require(`./commentData.json`);
// const ingredientData = require(`./ingredientData.json`);

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true
    });
    await Burger.bulkCreate(burgerData);
    await Comment.bulkCreate(commentData);
    // await Ingredient.bulkCreate(ingredientData);

    process.exit(0);
};

seedDatabase();
