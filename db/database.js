const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://lucas:lucas@localhost:8411/mongoExport');

sequelize.Promise = global.Promise;

module.exports = sequelize;