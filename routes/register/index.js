// http://localhost:8080/register

module.exports = (req, res) => {
  res.append('Access-Control-Allow-Origin', '*')
  let MongoClient = require('mongodb').MongoClient
  let url = 'mongodb://wojiaoxiaoxiaoyuan:yzl0000@wojiaoxiaoxiaoyuan-shard-00-00-oy0d5.azure.mongodb.net:27017,wojiaoxiaoxiaoyuan-shard-00-01-oy0d5.azure.mongodb.net:27017,wojiaoxiaoxiaoyuan-shard-00-02-oy0d5.azure.mongodb.net:27017/test?ssl=true&replicaSet=wojiaoxiaoxiaoyuan-shard-0&authSource=admin&retryWrites=true'
  MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err
    let dbase = db.db('zeLinBlogs')
    var myobj = { userName: req.body.userName }
    dbase.collection("user"). find(myobj).toArray(function(err, result) {
      if (err) throw err
      if (result.length === 0) {
        dbase.collection('user').insertOne(req.body, (err, res2) => {
          if (err) throw err
          let obj = { 
            message: 1,
            status: 200,
          }
          res.send(JSON.stringify(obj))
          db.close()
        })
      } else {
        let obj = { 
          message: 2,
          status: 400,
        }
        res.send(JSON.stringify(obj))
        db.close()
      }
    })
  })
}