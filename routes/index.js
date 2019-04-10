module.exports = function (app) {
  //一个get请求的路由  http://localhost:3000
  app.get("/", function (req, res) {
      res.render("index", {title:"育知同创abc"})
  });
  
  //又一个请求路由：http://localhost:3000/abc
  app.get("/abc", function (req, res) {
      res.render("index", {title:"育知同创" + req.path})
  });
}