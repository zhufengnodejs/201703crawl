let mongoose = require('mongoose');
mongoose.Promise = Promise;
let conn = mongoose.createConnection('mongodb://127.0.0.1/201703crawl');
//当你需要导出一个特定引用类型的时候需要用module.exports
//如果只是向导出对象上挂一个属性，都可以用
exports.Movie = conn.model('Movie',new mongoose.Schema({
  name:String,
  url:String
}));