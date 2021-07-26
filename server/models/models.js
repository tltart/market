const sequelize = require('../db');
const { DataTypes } = require('sequelize');


const user = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true, require: true },
    password: { type: DataTypes.STRING, require: true },
    role: { type: DataTypes.STRING, defaultValue: "USER" }
})

const basket = sequelize.define('basket', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})
const basketProduct = sequelize.define('basketProduct', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const product = sequelize.define('product', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
    img: { type: DataTypes.STRING, allowNull: false }

})

const productInfo = sequelize.define('productInfo', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull:false},
    description: { type: DataTypes.STRING, allowNull:false},
})

user.hasOne(basket);
basket.belongsTo(user);

basket.hasMany(basketProduct);
basketProduct.belongsTo(basket);

basketProduct.hasOne(product);
product.belongsTo(basketProduct);

product.hasMany(productInfo, {as:'info'});
productInfo.belongsTo(product);

module.exports = {
    user,
    basket,
    basketProduct,
    product,
    productInfo
}