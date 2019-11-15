const dbHelpers = require('../database/dbHelpers.js')

module.exports = {
  getStuff: (req, res) => {
    // dbHelpers.getAllTasks((err, results) => {
    //   if (err) {
    //     res.status(404).send('Error getting stuff from database', err)
    //   } else {
    //     res.status(200).send(results)
    //   }
    // })
    
    dbHelpers.getAllTasks()
      .then(results => res.status(200).send(results))
      .catch(err => res.status(404).send('Error getting stuff from database', err))
  },

  postStuff: ({ body }, res) => {
    // dbHelpers.postOneTask(body, (err) => {
    //   if (err) {
    //     res.status(400).send('Error posting task in DB', err)
    //   } else {
    //     res.status(201).send(`Successfully added task ${body.task} to DB`)
    //   }
    // })

    dbHelpers.postOneTask(body)
      .then(() => res.status(201).send(`Successfully added task ${body.task} to DB`))
      .catch(err => res.status(400).send('Error posting task in DB', err))
  }
}