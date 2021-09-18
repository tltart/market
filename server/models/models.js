const sequelize = require('../db');
const { DataTypes } = require('sequelize');


const user = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true, require: true },
    password: { type: DataTypes.STRING, require: true },
    role: { type: DataTypes.STRING, defaultValue: "USER" }
})

const basket = sequelize.define('basket', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const basketProduct = sequelize.define('basketProduct', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    count: { type: DataTypes.INTEGER, allowNull: false },
    date: { type: DataTypes.STRING, allowNull: false }
})

const product = sequelize.define('product', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
    img: { type: DataTypes.STRING, allowNull: false },
    info: { type: DataTypes.STRING, allowNull: false }

})

const taste = sequelize.define('taste', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false }

})

const product_taste = sequelize.define('product_taste', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})


user.hasOne(basket);
basket.belongsTo(user);

basket.hasMany(basketProduct);
basketProduct.belongsTo(basket);

basketProduct.hasOne(product);
product.belongsTo(basketProduct);

basketProduct.hasOne(taste);
product.belongsTo(basketProduct);

product.belongsToMany(taste, {through: product_taste});
taste.belongsToMany(product, {through: product_taste});

module.exports = {
    user,
    basket,
    basketProduct,
    product,
    taste,
    product_taste
}