const db = require('./index.js');

const things = [
  {
    name: 'Deff',
    task: 'Do something'
  },
  {
    name: 'Shush',
    task: 'Believe it'
  },
  {
    name: 'Quick',
    task: 'Slow down'
  },
  {
    name: 'Funny',
    task: 'Haha'
  },
  {
    name: 'Naruto',
    task: 'Run and eat ramen'
  }
]

things.forEach(({ name, task }) => {
  // insert name and task into notebook
  db.query(`INSERT INTO notebook (person_name, task) VALUES ("${name}", "${task}");`)
})