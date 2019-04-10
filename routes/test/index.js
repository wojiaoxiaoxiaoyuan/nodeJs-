// http://localhost:8080/test

module.exports = (req, res) => {
  res.append('Access-Control-Allow-Origin', '*')
  res.send('Hello, World')
}