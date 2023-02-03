const DataTypes = require("sequelize").DataTypes;
const _cart = require("./cart");
const _order = require("./order");
const _product = require("./product");
const _productInCart = require("./productInCart");
const _productInOrder = require("./productInOrder");
const _user = require("./user");

function initModels(sequelize) {
  const user = _user(sequelize, DataTypes);
  const cart = _cart(sequelize, DataTypes);
  const order = _order(sequelize, DataTypes);
  const product = _product(sequelize, DataTypes);
  const productInCart = _productInCart(sequelize, DataTypes);
  const productInOrder = _productInOrder(sequelize, DataTypes);

  productInCart.belongsTo(cart, { as: "cart", foreignKey: "cartId"});
  cart.hasMany(productInCart, { as: "productInCarts", foreignKey: "cartId"});
  productInOrder.belongsTo(order, { as: "order", foreignKey: "orderId"});
  order.hasMany(productInOrder, { as: "productInOrders", foreignKey: "orderId"});
  productInCart.belongsTo(product, { as: "product", foreignKey: "productId"});
  product.hasMany(productInCart, { as: "productInCarts", foreignKey: "productId"});
  productInOrder.belongsTo(product, { as: "product", foreignKey: "productId"});
  product.hasMany(productInOrder, { as: "productInOrders", foreignKey: "productId"});
  order.belongsTo(user, { as: "user", foreignKey: "userId"});
  user.hasMany(order, { as: "orders", foreignKey: "userId"});
  
  user.hasMany(product,{as:"product",foreignKey:"userId"});
  product.belongsTo(user,{as:"user",foreignKey:"userId"});

  user.hasOne(cart,{as:"home",foreignKey:"userId"})
  cart.belongsTo(user,{as:"resident",foreignKey:"userId"})
  return {
    cart,
    order,
    product,
    productInCart,
    productInOrder,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
