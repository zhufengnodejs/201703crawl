let {Movie} = require('../model');
function write(movies,callback){
  Movie.create(movies,function(err,docs){
    callback(err,docs);
  })
}
module.exports = write;