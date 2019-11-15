const Sequelize = require('sequelize');
const db = require('./index.js');

const Notebook = db.define('notebooks', {
  person_name: {
    type: Sequelize.STRING
  },
  task: {
    type: Sequelize.STRING
  }
}, { timestamps: false })

Notebook.sync();

module.exports = Notebook;