const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Restaurant extends Model {}

Restaurant.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true
  }
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'restaurant'
}
);

module.exports = Restaurant;