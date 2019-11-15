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