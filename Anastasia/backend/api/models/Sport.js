const Sequelize = require('sequelize');

const sequelize = require('../../config/database');

const tableName = 'sports';

const Sport = sequelize.define('Sport', {
  id: {
    type: Sequelize.NUMBER,
    unique: true,
    primaryKey: true,
  },
  fullName: {
    type: Sequelize.STRING,
  },
  shortName:{
    type: Sequelize.STRING,
  },
  legalAddress: {
    type: Sequelize.STRING,
  },
  chiefPosition: {
    type: Sequelize.STRING,
  },
  chiefName: {
    type: Sequelize.STRING,
  },

  website: {
    type: Sequelize.STRING,
  },

  email: {
    type: Sequelize.STRING,
  },
  
}, { tableName });

module.exports = Sport;
