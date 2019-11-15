const router = require('express').Router();
const controllers = require('./controllers.js');

router
  .route('/list')
  .get(controllers.getStuff)
  .post(controllers.postStuff)

module.exports = router;