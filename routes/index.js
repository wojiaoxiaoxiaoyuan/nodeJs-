module.exports = app => {
  // 测试服接口Test
  app.get('/test', (req, res) => { require('./test')(req, res) })
}