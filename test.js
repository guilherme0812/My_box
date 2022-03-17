const { Sequelize, DataTypes, Model } = require('@sequelize/core');
const sequelize = new Sequelize('sqlite::memory:');

class Product extends Model {}
Product.init({
  title: Sequelize.STRING
}, { sequelize, modelName: 'product' });

class User extends Model {}
User.init({
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING
}, { sequelize, modelName: 'user' });

class Address extends Model {}
Address.init({
  type: DataTypes.STRING,
  line1: Sequelize.STRING,
  line2: Sequelize.STRING,
  city: Sequelize.STRING,
  state: Sequelize.STRING,
  zip: Sequelize.STRING,
}, { sequelize, modelName: 'address' });

// We save the return values of the association setup calls to use them later
Product.User = Product.belongsTo(User);
User.Addresses = User.hasMany(Address);