const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'todolist',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    todo: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.INTEGER
    },
    date:{
      type: Sequelize.DATE
    }
  },
  {
    timestamps: false
  }
)