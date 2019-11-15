const Notebook = require('./model.js');

/*
module.exports = {
  getAllTasks: (callback) => {
    db.query(`SELECT * FROM notebook;`, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    })
  },

  postOneTask: ({ name, task }, callback) => {
    db.query(`INSERT INTO notebook (person_name, task) VALUES ("${name}", "${task}");`, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    })
  }
}
*/

module.exports = {
  getAllTasks: () => Notebook.findAll(),
  postOneTask: ({ name, task }) => db.create({ person_name: name, task })
}