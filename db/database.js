const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://lucas:lucas@localhost:8411/mongoexport');

//sequelize.Promise = global.Promise;

module.exports = sequelize;