module.exports = app => {
  // 用户注册接口
  app.post('/register', (req, res) => { require('./register')(req, res) })
}