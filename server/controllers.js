module.exports = {
  getStuff: (req, res) => {
    console.log(req.body)
    res.send('Hello World')
  },

  postStuff: (req, res) => {
    res.send(`Hi, I'm post request`)
  }
}