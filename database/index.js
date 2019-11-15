/*
const mysql = require('mysql');

// TODO: establish connection
var db = mysql.createConnection({
  user     : 'root',
  password : 'password',
  database : 'ReviewDB'
});

db.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected DB');
});

module.exports = db;
*/

const Sequelize = require('sequelize');

const sequelize = new Sequelize('ReviewDB', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;