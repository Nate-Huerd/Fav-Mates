const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Menu extends Model {}

Menu.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false,
    },
    restaurant_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'restaurant',
            key: 'id'
        }
    }
},
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'menu'
    }
);

module.exports = Menu;